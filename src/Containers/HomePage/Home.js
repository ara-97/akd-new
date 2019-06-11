import React, { Component } from 'react';
import styled from 'styled-components';
import SelectCityModal from '../../Components/SelectCityModal';
import WelcomeCard from '../../Components/HomePage/WelcomeCard';
import SelectLocation from '../../Components/SelectLocation';
import Header from '../../Components/Header';


const HomeMainContainer = styled.div`
    @media (max-width:700px){
        padding: 20px;
    }
`

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <HomeMainContainer>
                <SelectCityModal show={true} />
                {/* <Header /> 
                {/* <SelectLocation />
                <WelcomeCard /> */}
            </HomeMainContainer>
        );
    }
}

export default HomePage;