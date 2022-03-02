import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBBtn, MDBTable, MDBInput } from 'mdb-react-ui-kit';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, PopoverBody, } from 'reactstrap';
import prody from '../assets/prody.png'
import gamechest2 from '../assets/gamechest2.png'
import progjokes from '../assets/progjokes.png'
import kanye from '../assets/kanye.png'
import legoman from '../assets/legoman.png'
import kast from '../assets/kast.png'
function Project() {
    return (
        <div className="divs">
            <h1>Projects</h1>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <img src={prody} alt="" />
                            <CardBody>
                                <CardTitle className="title">Prody Library</CardTitle>
                                <CardText className="description">full stack application utilizing HTML 5, css, bootstrap, react, typescript, node.js, PostgreSQL and express to create an app where users can post and store resources for others to see and into their own personal library</CardText>
                            </CardBody>
                            <a onClick={() => window.open("https://jw-prody-client.herokuapp.com")} className="btn btn-primary">Prody</a>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <img src={gamechest2} alt="" />
                            <CardBody>
                                <CardTitle className="title">GameChest</CardTitle>
                                <CardText className="description"> full stack application utilizing HTML 5, css, bootstrap, react, javascript, node.js, PostgreSQL and express to create an app where anyone can view games posted and a user can post their favorite games with details of the game</CardText>
                            </CardBody>
                            <a onClick={() => window.open("https://amp-my-gamechest-react.herokuapp.com")} className="btn btn-primary">GameChest</a>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <img src={progjokes} alt="" />
                            <CardBody>
                                <CardTitle className="title">Programming Jokes API</CardTitle>
                                <CardText className="description">utilized HTML , css, bootstrap, javascript and programming jokes api to create an app where a different programming joke appears when a button is clicked</CardText>
                            </CardBody>
                            <a onClick={() => window.open("https://apiproject2-50d60.firebaseapp.com")} className="btn btn-primary">Programming Jokes</a>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Card>
                            <img src={kanye} alt="" />
                            <CardBody>
                                <CardTitle className="title">Kanye API</CardTitle>
                                <CardText className="description">utilized HTML, css, javascript, Kanye quotes api and giphy api to creat an app that fetches a quote from kanye and a giph of kim when a button is clicked </CardText>
                            </CardBody>
                            <a onClick={() => window.open("https://jaylenwilson.github.io/KanyeApi")} className="btn btn-primary">Kanye API</a>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <img src={legoman} alt="" />
                            <CardBody>
                                <CardTitle className="title">CSS Creature</CardTitle>
                                <CardText className="description">utilized HTML and CSS to create a legoman css creature </CardText>
                            </CardBody>
                            <a onClick={() => window.open("https://codepen.io/Jmantv113/pen/zYwgNvj")} className="btn btn-primary">LegoMan</a>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <img src={kast} alt="" />
                            <CardBody>
                                <CardTitle className="title">Kast mock up</CardTitle>
                                <CardText className="description">EFA project utilizing HTML and CSS to create a mock up of the kast website landing page </CardText>
                            </CardBody>
                            <a onClick={() => window.open("https://jaylenwilson.github.io/StaticLayout")} className="btn btn-primary">Kast mock</a>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Project
