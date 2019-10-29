import React, { Component } from 'react';
import VideoList from './VideoList';
import './VideoItem.css';

class VideoItem extends Component {
    render() {
        const { video, selectedVideo } = this.props;
        return (<div onClick={() => selectedVideo(video)} className="ui relaxed divided list">
            <div className="video-item item">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="ui image" />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>
        </div>
        )
    }
}

export default VideoItem;