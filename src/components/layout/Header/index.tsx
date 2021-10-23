import { Button, Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Col>
            <Row>
                <Button variant="primary" size="sm" href="/login">
                    Login
                </Button>
                <Button variant="primary" size="sm" href="/new-task">
                    + New task
                </Button>
            </Row>
            </Col>
        </header>
    )
}

export { Header };