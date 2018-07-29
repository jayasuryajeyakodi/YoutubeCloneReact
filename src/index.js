import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './search_bar.js';
import YtSearch from 'youtube-api-search';
import VideoList from './video_list.js';
const API_KEY = '**';
import VideoDetail from './video_detail.js'
import _ from 'lodash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] }
        // init state with youtube data.
        YtSearch({ key: API_KEY, term: "voicians" }, (data) => {
            console.log(data);
            this.setState({
                videos: data,
                currentVideo : data[0]
            })
        })
    }
    
    SearchVideo = _.debounce((searchTerm) => {
        YtSearch({ key: API_KEY, term: searchTerm }, (data) => {
            console.log(data);
            this.setState({
                videos: data,
                currentVideo: data[0]
            })
        })
    }, 300);

    PlayVideo = (video) => {
        this.setState({
            currentVideo: video
        })
    }

    render() {
        console.log("video is" + this.state.videos)
        var videos = this.state.videos;
        return(
            
            <div>
            <SearchBar searchVideo = {this.SearchVideo}/>
            <VideoDetail video = {this.state.currentVideo} />
            <VideoList onVideoSelect = {this.PlayVideo} videos={videos} />
            </div >
        );
    }
}

ReactDom.render(<App />, document.querySelector(".container")); 
