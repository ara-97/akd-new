import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

const Car = '../../media/Components/car.jpg';
const Play = '../../media/Components/play.png';

import SearchBox from '../SearchBox';
import CardContainer from '../CardWrappers';

const WelcomeCardWrapper = styled.div`
    margin: 20px 0;
`

const WelcomeNote = styled.div`
    padding: 20px 40px;
    margin: 0 auto;
	color: #030F09;
	font-family: Inter;
	font-size: 18px;
	line-height: 30px;
    text-align: center;
    
    & > span {
        font-weight: bold;
    }
`

const Info = styled.div`
    margin-top: 10px;
	opacity: 0.51;
	color: #242424;
	font-family: Inter;
	font-size: 14px;
	font-weight: 500;
	line-height: 19px;
	text-align: center;
`

const HowItWorksWrapper = styled.div`
        margin-top: 10px;
`

const HIWHeading = styled.div`
	color: #030F09;
	font-family: Inter;
	font-size: 20px;
	font-weight: bold;
	line-height: 30px;
    text-align: center;
    
    & > span {
        display: block;
        opacity: 0.51;
        color: #242424;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 19px;
        text-align: center;
    }
`

const HIWVideoPlayerWrapper = styled.div`
    position: relative;
`

const PlayButton = styled.div`
    position: absolute;
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 999;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    top: 100px;
    left: 45%;
    background-image: linear-gradient(rgba(170,170,169,0.9), rgba(255,255,255,0.9));
`

const PlayIcon = styled.img`
    height: 20px;
    width: 20px;
`

const HIWVideoPlayer = styled.video`
    height: 240px;
    width: 100%;
    border-radius: 0 0 8px 8px;
`

class WelcomeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showControls: false
        }
        this.vidRef = React.createRef();
    }

    playVideo = () => {
        this.refs.vidRef.play();
        this.setState({ showControls: true });
    }

    pauseVideo = () => {
        this.setState({ showControls: false });
    }

    render() {
        return (
            <WelcomeCardWrapper>
                <CardContainer>
                    <WelcomeNote>
                        <span>Save money</span> on your next car with <span>Acko Drive.</span>
                    </WelcomeNote>
                    <Info>Transparent. Hassle-free. Inexpensive.</Info>
                    <SearchBox />
                    <HowItWorksWrapper>
                        <HIWHeading>
                            See how it works
                            <span>
                                Watch the video
                            </span>
                        </HIWHeading>
                        <HIWVideoPlayerWrapper>
                            <PlayButton show={!this.state.showControls} onClick={this.playVideo}>
                                <PlayIcon src={Play} />
                            </PlayButton>
                            <HIWVideoPlayer
                                onPause={this.pauseVideo}
                                ref="vidRef"
                                controls={this.state.showControls}
                                poster={Car}>
                                <source src="https://dms.licdn.com/playback/C4D05AQFPZaF-oGOv_w/d256a8abaa9f40ae8452ee5ca13e15bc/feedshare-mp4_500-captions-thumbnails/1507940118923-hysdc8?e=1559584800&v=beta&t=kZoQWkDsZI3WkgJspD3PEFJi8v7Wyq_egZKJnoUFgQI" type="video/mp4" />
                            </HIWVideoPlayer>
                        </HIWVideoPlayerWrapper>
                    </HowItWorksWrapper>
                </CardContainer>
            </WelcomeCardWrapper>
        );
    }
}

export default WelcomeCard;