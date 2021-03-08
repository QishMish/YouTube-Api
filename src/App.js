import React, { Component } from 'react'
import SearchBar from "./Components/SearchBar";
import YoutobeApi from "./Api/YoutobeApi";
import VideoList from './Components/VideoList';
import SelectedVideo from './Components/SelectedVideo';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        videos:[],
        selectedVideo: null,
    }
  }

  componentDidMount(){
    this.onSearchSubmit('nature')
  }

  onSearchSubmit= async (name)=>{

   const result = await YoutobeApi.get('/search',{
      params:{
        q:name,
      }
    });

    this.setState({
      videos:result.data.items,
      selectedVideo:result.data.items[0]
    })

  }

  videoSelectorMethod = (video)=>{
    
    this.setState({
      selectedVideo:video
    })
  }

  render() {
    return (
      <div className="ui container">
          <SearchBar onsubmit={this.onSearchSubmit}/>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <SelectedVideo mainVideo = {this.state.selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList onVideoSelect = {this.videoSelectorMethod} videos = {this.state.videos} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}
