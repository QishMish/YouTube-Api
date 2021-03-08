import React from 'react';
import VideoItem from "./VideoItem";

export default function VideoList({videos,onVideoSelect}) {

    const videoRender = videos.map((video)=>{
        return <VideoItem onVideoSelect = {onVideoSelect} main video={video}  key={video.id.videoId}/>
    })

    return (
        <div className="ui relaxed divided list">
            {videoRender}
        </div>
    )
}
