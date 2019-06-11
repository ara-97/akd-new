import React from 'react';
import styled from "styled-components";

const CTAWrapper = styled.div`
    position: ${props => props.fixed ? 'fixed' : 'relative'};
    bottom: ${props => props.fixed ? '0' : 'initial'};
    padding: ${props => props.fixed ? '20px 0' : '0px'};
    background: #fff;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.div`
	height: 50px;
    width: 325px;
    cursor: pointer;
    margin: 0 auto;
	border-radius: 8px;
	background-color: #30BE76;
    &:hover{
        background: #1BAF64;
    }
`

const CTAText = styled.div`
	color: #FFFFFF;
	font-family: Inter;
	font-size: 18px;
	font-weight: 500;
	line-height: 50px;
    text-align: center;
    vertical-align: middle;
`

const CTAButton = (props) => {
    return (
        <CTAWrapper fixed={props.fixed}>
            <ButtonWrapper onClick={props.onClickProps}>
                <CTAText>{props.children}</CTAText>
            </ButtonWrapper>
        </CTAWrapper>
    );

}

export default CTAButton;