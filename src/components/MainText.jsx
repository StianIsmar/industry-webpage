import React, { Component } from 'react';
import "./MainText.css"
import { p, h1 } from 'react-bootstrap';
import { Col, Row, Container, Button } from 'react-bootstrap'

class MainText extends Component {
    render() {
        return (
            <div class="article">
                <div></div>
                <Container white mt-3>
                    <Row>
                        <div class="text">
                            <Col class="text" >
                                <h1>What we do</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum nisl eu odio efficitur rutrum. Aenean id fermentum massa, non tristique nibh. Quisque vulputate nisl id pretium porttitor. Morbi sapien sapien, pulvinar eget auctor quis, luctus vel augue. Nulla tempor ante urna, vitae porta dolor dictum sit amet. Vivamus ipsum urna, tristique condimentum orci et, dignissim iaculis lacus. Donec quis ex nec eros suscipit auctor non faucibus nibh. Aliquam vitae elit leo. Nulla luctus mi in molestie laoreet.</p>
                                <p>Donec et luctus nisi. Pellentesque mattis vel enim nec viverra. Phasellus porttitor fermentum leo quis sollicitudin. Phasellus ac nisi quis justo ultrices maximus sit amet sed erat. Praesent vestibulum nisi augue, quis pretium odio sodales sed. Fusce lacus magna, blandit vel nunc rutrum, pretium lacinia nunc. Quisque porta risus et mi dapibus, at pulvinar velit molestie. Vivamus et hendrerit ligula.</p>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainText;