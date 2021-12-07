import {  useState } from 'react'
import FilesTable from '../components/FilesTable'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Home() {

    const [selectedFile, setSelectedFile] = useState(null)
    const [imageSrc, setImageSrc] = useState(null)
    const [title, setTitle] = useState('')
    const [uploadModal, setUploadModal] = useState(false)

    const handleFileUpload = async () => {

        const formData = new FormData()
        formData.append('fileImage', selectedFile)
        formData.append('title', title)

        try {
            const response = await fetch(`https://striveschoolbox.herokuapp.com/files`, {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                alert('Success')
                setUploadModal(false)
            } else {
                console.error('Post Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }   

    return (
        <>
            <input type="file" hidden id="fileUpload" 
                onChange={e => {
                    setSelectedFile(e.target.files[0])
                    setImageSrc(URL.createObjectURL(e.target.files[0]))
                    setUploadModal(true)
                }}
            />
            <button className="btn btn-info mt-4">
                <label htmlFor="fileUpload" className="mb-0">Upload</label>
            </button>

            <FilesTable />

            <Modal show={uploadModal} onHide={() => setUploadModal(false)}>
                <Modal.Body>
                    <Form onSubmit={handleFileUpload}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                        </Form.Group>
                        <img src={imageSrc} alt="" className="w-100" />
                        <Button className="btn btn-success mt-4 ml-2" onClick={handleFileUpload}>
                            <i className="bi bi-cloud-upload mr-2"></i>
                            Send
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}