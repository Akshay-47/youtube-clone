import React, { Component } from 'react';

class VideoDetail extends Component {
    render() {

        const { video } = this.props;
        if (!video) {
            return <div>Loading...</div>
        }
        else {
            const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
            return (
                <div>
                    <div className="ui embed">
                        <iframe title="video player" src={videoSrc} allowfullscreen="allowfullscreen"></iframe>
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">{video.snippet.title}</h4>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            )
        }
    }
}

export default VideoDetail;