import React from 'react';
import ReactDom from 'react-dom';
import VideoListItem from './video_list_item.js'

const VideoList = (props) => {
    return <ul className="col-md-4 list-group" >
             {props.videos.map( x => {
                 return <VideoListItem onVideoSelect = {props.onVideoSelect} key = {x.etag} video={x} />
             })}
            </ul>
}

export default VideoList;