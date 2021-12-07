import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import FileRow from './FileRow'

export default function FilesTable() {

    const [files, setFiles] = useState([])
    const { pathname } = useLocation()

    const fetchFiles = async () => {
        try {
            const response = await fetch(`https://striveschoolbox.herokuapp.com/files`)
            if (response.ok) {
                const data = await response.json()
                if (pathname === '/') {
                    setFiles(data)
                } else {
                    const starredFiles = data.filter(item => item.isStarred === true)
                    setFiles(starredFiles)
                }
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