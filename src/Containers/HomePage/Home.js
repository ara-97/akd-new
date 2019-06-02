import React, { Component } from 'react';
import SelectCityModal from '../../Components/SelectCityModal';

import * as Home from './HomeStyles';

class HomePage extends Component {
    render() {
        return (
            <Home.HomeMainContainer>
                <SelectCityModal show={true} />
            </Home.HomeMainContainer>
        );
    }
}

export default HomePage;