import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
    const myName = "{ Hammad Faiz }"

    return(
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h2> Welcome to my Portfolio! </h2>
                        <span className="name">{myName}</span>
                        <h1> Software Engineer </h1> 
                        <p> 
                            Software Engineer with a proven ability to work collaboratively with customers, team 
                            members, and project leaders to deliver software projects within timelines. Adept at 
                            working with a wide range of front- and back-end technologies. Transitioned from College
                            to Bootcamp for hands-on experience with building applications.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img id="animated" src='https://cdni.iconscout.com/illustration/premium/thumb/female-developer-developing-website-7299187-5962904.png' alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}