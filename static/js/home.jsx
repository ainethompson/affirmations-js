const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;


function Home() {

    document.body.style.background="url('/static/snow-river-sunrise.jpg')";
    document.body.style.backgroundSize='cover';
    document.body.style.backgroundRepeat='no-repeat'
    document.body.style.backgroundAttachment='fixed'
    document.body.style.backgroundPosition='center top'

    return (
        <div>
            <Container className="d-flex justify-content-center">
            <Card className="text-center transparent-bg" style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Title>
                        Welcome to Spark Your Day! 
                    </Card.Title>
                    Subscribe to receive daily texts, and if you need a pick me up in the meantime, the affirmation generator has you covered. Enjoy!
                    <Card.Text></Card.Text>
                        <RandomMessage />
                </Card.Body>
            </Card>
            </Container>
        </div>
    )
}