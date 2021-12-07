import FilesTable from '../components/FilesTable'

export default function Home() {
    return (
        <>
            <button className="btn btn-info mt-4"><i className="bi bi-cloud-upload mr-2"></i>Upload</button>
            <FilesTable />
        </>
    )
}