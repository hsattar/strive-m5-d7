import Table from 'react-bootstrap/Table'
import FileRow from './FileRow'

export default function FilesTable() {
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
            <FileRow />
            <FileRow />
        </tbody>
    </Table>
    )
}