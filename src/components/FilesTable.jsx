import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import FileRow from './FileRow'

export default function FilesTable() {

    const [files, setFiles] = useState([])

    const fetchFiles = async () => {
        try {
            const response = await fetch(`https://striveschoolbox.herokuapp.com/files`)
            if (response.ok) {
                const data = await response.json()
                setFiles(data)
            }
        } catch (error) {
            console.error(error)
        }
    }   

    useEffect(() => {
        fetchFiles()
    }, [])

    return (
        <Table bordered hover className="mt-5">
        <thead>
            <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Size</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
            { files.map((file, index) => <FileRow key={file.id} file={file} index={index} /> ) }
        </tbody>
    </Table>
    )
}