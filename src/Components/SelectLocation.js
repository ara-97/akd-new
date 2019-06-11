import React, { Component } from 'react';
import styled from 'styled-components';

const Edit = '../../media/Components/edit.png';

const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 40px;
`

const Heading = styled.div`
    vertical-align: middle;
	color: #000000;
	font-family: Inter;
    font-size: 14px;
    opacity: 0.53;
	font-weight: 500;
    line-height: 40px;
    padding-left: 5px;
`

const CityContainer = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 0.5fr;
`


const CityName = styled.div`
    vertical-align: middle;
	color: #000000;
    font-family: Inter;
    text-align: right;
	font-size: 13px;
	font-weight: 500;
	line-height: 40px;
`

const EditWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const EditIcon = styled.img`
    height: 20px;
    width: 20px;
`

class SelectLocation extends Component {
    render() {
        return (
            <InfoContainer>
                <Heading>Your Location</Heading>
                <CityContainer>
                    <CityName>Delhi/NCR</CityName>
                    <EditWrapper>
                        <EditIcon src={Edit} alt={'Edit'} />
                    </EditWrapper>
                </CityContainer>
            </InfoContainer>
        );
    }
}

export default SelectLocation;