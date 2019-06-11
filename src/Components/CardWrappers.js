import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: ${props => props.height || '300px'};
    width: ${props => props.width || '275px'};
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 50px 80px 0 rgba(51,30,30,0.15);
    @media(max-width: 700px){
        height: ${props => props.height || '100%'};
        width: ${props => props.width || '100%'};
    }
`

const CardContainer = (props) =>
    <Container onClick={props.onCLickProps}>
        {props.children}
    </Container>


export default CardContainer;