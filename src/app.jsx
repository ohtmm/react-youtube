import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  // 비디오 api 받아오기
const [videos, setVideos] = useState([]);
useEffect(()=>{
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAu11CIY1iHbO21XJGdyERnRNItXwDYEwc", requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
}, [])

  return (
    <>
    <h2>youtube</h2>
    <VideoList videos={videos}/>
    </>
  )
   ;
}

export default App;
