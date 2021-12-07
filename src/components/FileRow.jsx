import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

export default function FileRow({ file, index}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <tr>
            <td>{index + 1}</td>
            <td>{file.title}</td>
            <td>{file.size}</td>
            <td>
                <i className="text-dark bi bi-image mx-2" onClick={handleShow}></i>
                <i className="text-primary bi bi-star mx-2"></i>
                <i className="text-success bi bi-pencil mx-2"></i>
                <i className="text-danger bi bi-trash mx-2"></i>
            </td>
        </tr>

        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <img src={file.path} alt="" className="w-100"/>
            </Modal.Body>
        </Modal>
        </>
    )
}