import React from 'react'

export default function SelectedVideo({mainVideo}) {

    if(!mainVideo){
        return <h1 className="center">Please Search To Get Videos</h1>
    }

    const MainURL = `https://www.youtube.com/embed/${mainVideo.id.videoId}`

    return (
        
        
        <div>
            <div className='ui embed'>
                <iframe title='video' src={MainURL}/>
            </div>
            <div className="ui segment">
                <h4 className='ui header'>{mainVideo.snippet.title}</h4>
                <p>{mainVideo.snippet.description}</p>
            </div>
        </div>
    )
}
