
function About() {

    document.body.style.background="url('/static/snow-mountain-sunrise1.jpg')";
    document.body.style.backgroundSize='cover';
    document.body.style.backgroundRepeat='no-repeat'
    document.body.style.backgroundAttachment='fixed'
    document.body.style.backgroundPosition='center top'

    return (
        <div>
            <Container className="d-flex justify-content-center">
                <Card className="text-center transparent-bg">
                    <Card.Body>
                        <Card.Title>
                            About Spark Your Day
                        </Card.Title>
                        <Card.Text>
                            Welcome! My name is Áine Thompson, and I’m a student in Hackbright Academy’s software engineering bootcamp. 
                            I created this full-stack web app for my capstone project to demonstrate all that I’ve learned over the past months. 
                            My idea for this project came when my sister moved across the country to start her first job out of college. 
                            I would set an alarm every morning to text her an affirmation or motivational message to start her day and remind her to prioritize self care. 
                            I realized, what if I could make an app to send her a message automatically without having to set my alarm? 
                            And what if anyone who could use an extra spark of motivation in the morning could sign up to receive these messages too? 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
}