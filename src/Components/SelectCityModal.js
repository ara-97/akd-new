import React, { Component } from 'react';
import styled from "styled-components";
import FullPageModalWrapper from './FullPageModalWrapper';
import Carousel from './CarouselWrapper';
import CTAButton from './CTAButton';
import BottomSlideModalWrapper from './BottomSlideModal';
import Logo from './Logo';

const DownArrowIcon = '../../media/Components/down-arrow.png';

const SelectCityModalContainer = styled.div``

const LogoWrapper = styled.div`
    padding: 40px 0px 10px 0px;
`

const CarouselContentContainer = styled.div`
`

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    @media(max-width: 700px){
        /* position: fixed;
        bottom: 0;
        left: 0;
        width: 100%; */
    }
`

const CityDropdownSelect = styled.div`
	height: 50px;
	width: 325px;
    border-radius: 8px;
    margin: 20px 0;
    background-color: #FFFFFF;
    display: grid;
    grid-template-columns: 4fr 1fr;
    box-shadow: 0px 6px 13px rgb(229,231,231);
`

const CityName = styled.div`
	color: #030F09;
	font-family: Inter;
	font-size: 18px;
	font-weight: 500;
    line-height: 50px;
    padding-left: 15px;
    vertical-align: middle;
`

const DownArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DownArrow = styled.img`
    height: 20px;
    width: 20px;
`

const CityDropdown = styled.div`
    padding: 20px;
`

const CityDropdownItemWrapper = styled.div`
    margin: 10px 0; 
`

const CityDropdownItem = styled.div`
    padding: 10px 10px;
	color: #030F09;
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
    line-height: 22px;
    border-radius: 8px;
    background-color: ${props => props.selected ? '#DACFFF' : '#fff'};
`

class SelectCityModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCityModal: false,
            selectedCity: ''
        }
    }

    toggleCitySelectModal = () => {
        this.setState({ showCityModal: !this.state.showCityModal })
    }


    selectCity = (city) => {
        this.setState({ selectedCity: city })
    }

    render() {

        const props = this.props;
        const state = this.state;
        const cities = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Chennai'];

        return (
            <SelectCityModalContainer>
                <FullPageModalWrapper show={props.show} >
                    <CarouselContentContainer>
                        <LogoWrapper>
                            <Logo height={'30px'} width={'150px'} />
                        </LogoWrapper>
                        <Carousel />
                    </CarouselContentContainer>
                    <DropdownContainer>
                        <CityDropdownSelect onClick={this.toggleCitySelectModal}>
                            <CityName>Select your city</CityName>
                            <DownArrowWrapper>
                                <DownArrow src={DownArrowIcon} alt={'Down Arrow'} />
                            </DownArrowWrapper>
                        </CityDropdownSelect>
                        <CTAButton>Get Started</CTAButton>
                    </DropdownContainer>
                </FullPageModalWrapper>
                <BottomSlideModalWrapper show={state.showCityModal} heading={'Select your city'} modalHeight={'70%'} closeModal={this.toggleCitySelectModal}>
                    <CityDropdown>
                        {
                            cities.map((city, city_index) =>
                                <CityDropdownItemWrapper key={city_index}>
                                    <CityDropdownItem selected={state.selectedCity === city} onClick={() => this.selectCity(city)}>{city}</CityDropdownItem>
                                </CityDropdownItemWrapper>
                            )
                        }
                    </CityDropdown>
                    <CTAButton fixed={true}>Get Started</CTAButton>
                </BottomSlideModalWrapper>
            </SelectCityModalContainer>
        );
    }
}

export default SelectCityModal;