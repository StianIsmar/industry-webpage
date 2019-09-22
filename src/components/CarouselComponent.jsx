import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./CarouselComponent.css"
import { Container, Row, Col, Button} from 'react-bootstrap'
import grave1 from "../images/grave11.jpg"
import grave2 from "../images/grave22.jpg"



class CarouselComponent extends Component {

    setIndex = (selectedIndex) => {
        this.setState({ index: selectedIndex })
    }

    setDirection = (direction) => {
        this.setState({ direction: direction, setDirection: true })
    }

    handleSelect = (selectedIndex, e) => {
        this.setIndex(selectedIndex);
        this.setDirection(e.direction);
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            setIndex: 0,
            direction: null,
            setDirection: null
        };
    }

    render() {
        const { index, direction } = this.state;
        return (
            <div >
                <Carousel interval={7000} activeIndex={index} direction={direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={grave1}
                            alt="first excavator"
                        />
                        <Carousel.Caption>
                            <h2>Utgraving</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button variant="secondary">Se på prosjekt</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={grave2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={grave1}
                            alt="second excavator"

                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel >
            </div >
        );
    }

}


export default CarouselComponent;