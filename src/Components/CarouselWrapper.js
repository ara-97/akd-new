import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const CarouselImage = '../../media/Components/carouselImage1.png';

const Dot = styled.div`
    background: ${props => props.active ? '#582CDB' : '#FFF'};
    border: 1px solid #582CDB;
    border-radius: 50%;
    height: 8px;
    width: 8px;
`

const CarouselContainer = styled.div`
    padding: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 211px;	
    width: 344px;
    margin: 15px 0;
    object-fit: contain;
    background: #fff;
`

const Heading = styled.p`
	color: #242424;
	font-family: Inter;
	font-size: 22px;
	font-weight: bold;
	line-height: 26px;
    text-align: center;
    background: #fff;
    
`

const Info = styled.div`
    word-break: break-word;
    width: 300px;
	opacity: 0.51;
	color: #242424;
	font-family: Inter;
	font-size: 14px;
	font-weight: 500;
	line-height: 19px;
    text-align: center;
    background: #fff;
    
`

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dotIndex: [1, 0, 0, 0, 0]
        }
    }

    change = (e) => {
        let tempIndex = [0, 0, 0, 0, 0];
        tempIndex[e] = 1;
        this.setState({ dotIndex: tempIndex })
    }

    render() {
        const index = this.state.dotIndex;
        const settings = {
            customPaging: function (i) {
                return (
                    <Dot active={index[i]} />
                );
            },
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings} arrows={false} afterChange={this.change}>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Slider>
        );
    }
}

const CarouselItem = (props) => {
    return (
        <CarouselContainer>
            <Image src={CarouselImage} alt={'Carousel Image'} />
            <Heading>Great Cars at Great Prices</Heading>
            <Info>With Acko Drive, we put a brake on all your doubts. Since our prices are pre-negotiated with authorized dealers in your local area, they will always be at their accelerated best!</Info>
        </CarouselContainer>
    );
}