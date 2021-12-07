import { Col, Container, Row } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Starred from "./pages/Starred"

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs="2" className="sidebar">
            <Sidebar />
          </Col>
          <Col xs="10">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/starred" element={ <Starred /> } />
            </Routes>
          </Col>
        </Row>    
      </Container>
    </Router>
  )
}