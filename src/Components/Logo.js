import React from 'react';
import styled from "styled-components";

const AckoDriveLogo = '../../media/Components/logo.png';

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    object-fit: contain;
    height: ${props => props.height || '40px'};
    width: ${props => props.width || '240px'};
`

const Logo = (props) => {
    return (
        <LogoContainer>
            <Image src={AckoDriveLogo} height={props.height} width={props.width} alt={'Logo'} />
        </LogoContainer>
    );
}

export default Logo;