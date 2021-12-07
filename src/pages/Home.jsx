import {  useState } from 'react'
import FilesTable from '../components/FilesTable'

export default function Home() {

    const [fileUploaded, setFileUploaded] = useState(false)

    const handleFileUpload = async () => {
        try {
            const response = await fetch(`http://localhost:3001/files`)
        } catch (error) {
            console.error(error)
        }
    }   

    return (
        <>
            <input type="file" hidden id="fileUpload" onChange={() => setFileUploaded(true)} />
            <button className="btn btn-info mt-4">
                <label htmlFor="fileUpload" className="mb-0">Upload</label>
            </button>
            { fileUploaded &&
            <button className="btn btn-success mt-4 ml-2" onClick={handleFileUpload}>
                <i className="bi bi-cloud-upload mr-2"></i>
                Send
            </button>
            }
            <FilesTable />
        </>
    )
}