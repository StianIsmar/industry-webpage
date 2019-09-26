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
                        <Col id="icon"  xs={7}>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <div class="address">Osloveien 33</div>
                            <br></br>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <div class = "address">42145161</div>
                            <br></br>
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <div class = "emailaddress">company@yourcompany.com</div>
                            <div class="vl"></div>

                        </Col>

                        <Col xs={5} className="float-left">
                            <a href="https://www.instagram.com">
                                <i id="instagramIcon" class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.facebook.com">
                                <i id="facebookIcon" class="icon fa fa-facebook" aria-hidden="true" ></i>
                                <a href="https://www.twitter.com">
                                    <i id="twitterIcon" class="icon fa fa-twitter" aria-hidden="true" ></i>
                                </a>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                        </Col>
                        <Col xs={5} className="float-left"></Col>

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