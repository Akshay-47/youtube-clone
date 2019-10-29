import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    render() {
        const { videos, selectedVideo } = this.props;

        const renderedList = videos.map((video) => <VideoItem selectedVideo={() => selectedVideo(video)} key={video.id.videoId} video={video} />)

        return (
            <div className='video-list'>
                {renderedList}
            </div>
        )
    }
}

export default VideoList;