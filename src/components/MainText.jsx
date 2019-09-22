import React, { Component } from 'react';
import "./MainText.css"
import { p, h1 } from 'react-bootstrap';
import {Col, Row, Container,Button} from 'react-bootstrap'

class MainText extends Component {
    render() {
        return (
            <div class="text-left">
                <Container white>
                    <Row>
                        <Col>
                        <h1>What we do</h1>
                <p>Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus bonorum et malorum av Cicero. Opprinnelig begynte avsnittet: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                <p>Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus bonorum et malorum av Cicero. Opprinnelig begynte avsnittet: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                        </Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainText;