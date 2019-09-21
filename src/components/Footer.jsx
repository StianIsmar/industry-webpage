import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div>
                <Container className = "footer">
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col xs={2} md={4}>
                            <h3>Lorem ipsum</h3>

                            <h5>Lorem ipsum</h5>
                            <h6>Lorem ipsum</h6>
                            <h7 class="font-weight-bold"> Lorem ipsum</h7>
                        </Col>
                        <Col xs={6} md={4}>
                            xs=6 md=4
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={1} md={2}>
                        Lorem ipsum
    </Col>
                        <Col xs={6} md={4}>
                            xs=6 md=4
    </Col>
                        <Col xs={6} md={4}>
                            xs=6 md=4
    </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col xs={6}>xs=6</Col>
                        <Col xs={6}>xs=6</Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Footer;