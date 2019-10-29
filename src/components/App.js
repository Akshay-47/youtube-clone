import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    selectedVideo = (video) => {
        console.log(video)
        this.setState({
            selectedVideo: video
        })
    }

    componentDidMount() {
        this.onSearchSubmit('Iron Man');
    }

    render() {
        return <div className="app-component ui container">
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <div className="ui grid">

                <div className="ui row">
                    <div className="eleven wide column">   <VideoDetail video={this.state.selectedVideo} /></div>
                    <div className="five wide column"><VideoList selectedVideo={this.selectedVideo} videos={this.state.videos} /></div>
                </div>
            </div>
        </div>;
    }
}

export default App;
