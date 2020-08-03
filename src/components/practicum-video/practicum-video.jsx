import React from 'react'
import { Link } from 'react-router-dom'
import VideoFrame from '../video-frame/video-frame'
import './practicum-video.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { practicumModules } from '../../contents/modules'

class OtherVideoCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            videoId: props.video.videoId
        }
    }

    handleChange() {
        this.props.onCurrentPlayingChange(this.state.videoId)
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="other-video-card" style={this.state.videoId === this.props.currentPlayingVideoId ? { color: '#222ea2' } : {}} onClick={this.handleChange}>
                <div className="icon"><FontAwesomeIcon icon="play" /></div>
                <div className="video-name">{this.props.video.name}</div>
            </div>
        )
    }

}

class PracticumVideo extends React.Component {

    constructor(props) {
        super(props)
        this.changeCurrentPlaying = this.changeCurrentPlaying.bind(this)
        this.state = {
            currentPlayingId: practicumModules[0].videoId
        }
    }

    changeCurrentPlaying(videoId) {
        this.setState({ currentPlayingId: videoId })
    }

    render() {

        const otherVideoList = practicumModules.map(module => <Link style={{ textDecoration: 'none' }}> <OtherVideoCard onCurrentPlayingChange={this.changeCurrentPlaying} currentPlayingVideoId={this.state.currentPlayingId} video={module} /></Link>)

        return (
            <section className="practicum-video">
                <div className="container">
                    <div className="player">
                        <VideoFrame videoId={this.state.currentPlayingId} />
                    </div>
                    <div className="other-videos">
                        {otherVideoList}
                    </div>
                </div>
            </section>
        )
    }
}

export default PracticumVideo