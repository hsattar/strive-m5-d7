import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FileRow({ file, index}) {

    const [starred, setStarred] = useState(file.isStarred)
    const [title, setTitle] = useState(file.title)
    const [showImageModal, setShowImageModal] = useState(false)
    const [showTitleModal, setShowTitleModal] = useState(false)

    const handleStarClick = async () => {
        try {
            const response = await fetch(`https://striveschoolbox.herokuapp.com/files/${file.id}/isStarred`, {
                method: 'PATCH'
            })
            if (response.ok) {
                setStarred(!starred)
            } else {
                console.error('Star Patch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleTitleEdit = async e => {
        e.preventDefault()
        try {
            const response = await fetch(`https://striveschoolbox.herokuapp.com/files/${file.id}/title`, {
                method: 'PATCH',
                body: JSON.stringify({ title }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setTitle(data.title)
                setShowTitleModal(false)
            } else {
                console.error('Title Patch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <tr>
            <td>{index + 1}</td>
            <td>{file.title}</td>
            <td>{file.size}</td>
            <td>
                <i className="text-dark bi bi-image mx-2" onClick={() => setShowImageModal(true)}></i>
                <i className={starred ? "text-primary bi bi-star-fill mx-2" : "text-primary bi bi-star mx-2"} onClick={handleStarClick}></i>
                <i className="text-success bi bi-pencil mx-2" onClick={() => setShowTitleModal(true)}></i>
                <i className="text-danger bi bi-trash mx-2"></i>
            </td>
        </tr>

        <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
            <Modal.Body>
                <img src={file.path} alt="" className="w-100"/>
            </Modal.Body>
        </Modal>

        <Modal show={showTitleModal} onHide={() => setShowTitleModal(false)}>
            <Modal.Body>
                <Form onSubmit={handleTitleEdit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit">Save</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}