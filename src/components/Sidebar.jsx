import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {

    const { pathname } = useLocation()

    return (
        <>
            <h3 className="mt-2">StriveBox</h3>
            <Link to="/"><h3 className={ pathname === '/' ? '' : 'text-muted' }>Home</h3></Link>
            <Link to="/starred"><h3 className={ pathname === '/starred' ? '' : 'text-muted' }>Starred</h3></Link>
        </>
    )
}