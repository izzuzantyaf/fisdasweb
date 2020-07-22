import React from 'react'
import './video-frame.css'

class VideoFrame extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            videoFrameHeight: 0
        }
    }

    componentDidMount() {
        const videoFrame = document.querySelector(`iframe[title="${this.props.videoId}"]`)
        this.setState({ videoFrameHeight: 0.5625 * videoFrame.offsetWidth })
        window.addEventListener('resize', () => {
            this.setState({ videoFrameHeight: 0.5625 * videoFrame.offsetWidth })
        })
    }

    render() {
        const src = `https://www.youtube.com/embed/${this.props.videoId}`
        return (
            <iframe className="practicum-video" title={this.props.videoId} width="100%" height={`${this.state.videoFrameHeight}px`} src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        )
    }
}

export default VideoFrame