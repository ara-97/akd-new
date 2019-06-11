import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const HeaderContainer = styled.div`
    margin-bottom: 20px; 
`

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Logo height={'40px'} width={'140px'} />
            </HeaderContainer>
        );
    }
}

export default Header;