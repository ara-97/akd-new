import React from 'react';
import styled, { keyframes } from 'styled-components';

const Close = '../../media/Components/close.png';

const slideIn = keyframes`
    from {bottom: -300px; opacity: 0}
    to {bottom: 0; opacity: 1}
`

const fadeIn = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`

const Modal = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed; 
    z-index: 999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(40,41,40,0.3);
    animation-name: ${fadeIn}; 
    animation-duration: 0.4s;
    animation-name: fadeIn;
    animation-duration: 0.4s
`

const ModalBody = styled.div`
    position: fixed;
    bottom: 0;
    padding-bottom: 20px;
    border-radius: 20px 20px 0 0%;
    background-color: #fff;
    height: ${props => props.modalHeight || '9%'};
    width: 100%;
    animation-name: slideIn;
    animation-duration: 0.4s;
    animation-name: ${slideIn};
    animation-duration: 0.4s
`

const ModalContent = styled.div`
    overflow: auto;
    height: 100%;
`

const ModalHeader = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    height: 50px;
    margin-top: 10px;
`

const Heading = styled.div`
    vertical-align: middle;
    line-height: 50px;
    padding-left: 20px;
	color: #030F09;
	font-family: Inter;
	font-size: 20px;
	font-weight: 500;
`

const CloseIcon = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`

const CloseIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BottomSlideModalWrapper = (props) => {
    return (
        <Modal show={props.show}>
            <ModalBody modalHeight={props.modalHeight}>
                <ModalHeader>
                    <Heading>{props.heading}</Heading>
                    <CloseIconWrapper>
                        <CloseIcon src={Close} alt={'Close'} onClick={props.closeModal} />
                    </CloseIconWrapper>
                </ModalHeader>
                <ModalContent>
                    {props.children}
                </ModalContent>
            </ModalBody>
        </Modal>
    );
}

export default BottomSlideModalWrapper;