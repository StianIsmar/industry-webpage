import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./CarouselComponent.css"


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
                <Carousel interval = {false} activeIndex={index} direction={direction} onSelect={this.handleSelect} 
>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fnapipelines.com%2Fwp-content%2Fuploads%2F2014%2F11%2FKomatsu-PC210LCi-10.jpg&f=1&nofb=1" alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>First slide label</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.volvoce.com%2F-%2Fmedia%2Fvolvoce%2Fglobal%2Fproducts%2Fexcavators%2Fcrawler-excavators%2Fhero%2Fvolvo-show-crawler-excavator-ec750e-t4f-2324x1200.jpg%3Fmh%3D620%26mw%3D1205%26v%3DIP4tPw%26c%3D1%26cw%3D1200%26ch%3D620%26jq%3D80%26hash%3DD74491474FE2F6213A24E81C13AF995AD8D41A0D&f=1&nofb=1"
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
                        src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.volvoce.com%2F-%2Fmedia%2Fvolvoce%2Fglobal%2Fproducts%2Fexcavators%2Fcrawler-excavators%2Fhero%2Fvolvo-show-crawler-excavator-ec750e-t4f-2324x1200.jpg%3Fmh%3D620%26mw%3D1205%26v%3DIP4tPw%26c%3D1%26cw%3D1200%26ch%3D620%26jq%3D80%26hash%3DD74491474FE2F6213A24E81C13AF995AD8D41A0D&f=1&nofb=1" alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

            </div >
        );
    }

}


export default CarouselComponent;