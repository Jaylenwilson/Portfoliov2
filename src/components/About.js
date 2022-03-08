import React from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, PopoverBody, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


function About() {
    return (
        <div className="divs">
            {/* <h1>About</h1> */}
            <div id="aboutdiv">
                <FontAwesomeIcon id="quote" icon={faQuoteLeft} size="2x" />
                <p id="about">  I am an aspiring Full Stack Web Developer and EFA graduate. For about 6 months before EFA I spent mt time self learning web development although I was able to learn a nice a,ount I realized I needed some structure to get going. I was recommended by a friend to try EFA so I did, below are some links to help you learn better of who I am as a web developer   </p>
                <FontAwesomeIcon id="rightquote" icon={faQuoteRight} size="2x" />
                <p>hello</p>
            </div>


            <Container >
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <FontAwesomeIcon className="icon" onClick={() => window.open("https://github.com/Jaylenwilson")} icon={faGithub} color="blue" size="8x" />
                    </Col>
                    <Col md="auto">
                        <FontAwesomeIcon className="icon" onClick={() => window.open("https://www.linkedin.com/in/jaylen-wilson-b21944222/")} icon={faLinkedin} color="blue" size="8x" />
                    </Col>

                </Row>
            </Container>

        </div>

    )
}
export default About