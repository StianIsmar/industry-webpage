import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div>
                <Container className="footer">
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col xs={12}><br></br></Col>
                    </Row>
                    <Row>
                        <Col xs={12}><br></br></Col>
                    </Row>
                    <Row>
                        <Col xs={12}><br></br></Col>
                    </Row>
                    <Row>
                        <Col xs={2} class="d-flex justify-content-between">
                            <a href="https://www.instagram.com">
                                <i id="instagramIcon" class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                        </Col>
                        <Col xs={10}   className="float-left" >instagram.com/myCompany</Col>
                    </Row>
                    <Row>
                        <Col xs={2}> <a href="https://www.facebook.com">
                                <i id="facebookIcon" class="icon fa fa-facebook" aria-hidden="true" ></i>
                            
                            </a>
                            </Col>
                        <Col xs={10} className="float-left">facebook.com/myCompany</Col>
                    </Row>
                    <Row >
                        <Col xs={2}>
                            <a href="https://www.twitter.com">
                                <i id="twitterIcon" class="icon fa fa-twitter" aria-hidden="true" ></i>
                            </a></Col>

                        <Col xs={5} className="float-left">twitter.com/myCompany</Col>
                        <Col xs={5}>Osloveien 40</Col>

                    </Row>
                    <Row>
                        <Col className="emptyRow" xs={12}><br></br></Col>
                    </Row>
                    <Row>
                        <Col className="emptyRow" xs={12}><br></br></Col>
                    </Row>
                    <Row>
                        <Col className="emptyRow" xs={12}><br></br></Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default Footer;