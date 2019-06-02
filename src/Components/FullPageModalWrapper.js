import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types';

const SlideUpAnimation = keyframes`
    0% {
        opacity:0;
        transform:  translate(0%,100%);
    }
    100% {
        opacity:1;
        transform:  translate(0%,-5%);
}   
`
const FadeInAnimation = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`

const Modal = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    overflow: auto;
    position: fixed;
    width: 100%;
    min-height: 100%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    opacity: 0.1;
    animation: ${FadeInAnimation} ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode:forwards;

    @media (max-width: 700px) {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
`

const ModalContent = styled.div`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    background: white;
    margin: 10% auto;   
    border-radius: 8px;
    animation: ${SlideUpAnimation} ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode:forwards;
    @media (max-width: 700px) {
        max-width: 100%;
        width: 100%;
        height: 100%;
    }
`

const FullPageModalWrapper = ({ children, show, height, width }) => {
    return (
        <Modal show={show}>
            <ModalContent height={height} width={width}>
                {children}
            </ModalContent>
        </Modal>
    )
}

FullPageModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired
};

export default FullPageModalWrapper