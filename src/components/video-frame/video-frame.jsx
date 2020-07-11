import React from 'react'
import './video-frame.css'

import { practicumModules } from '../../contents/modules'

class VideoFrame extends React.Component {

    render() {
        // const initialVideoId = practicumModules[0].videoId
        const src = `https://www.youtube.com/embed/${this.props.videoId}`
        return (
            <iframe title="lsfjlsajfl" width="100%" height="75%" style={{
                aspectRatio: '9/16',
                minHeight: "315px"
            }} src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        )
    }
}

export default VideoFrame