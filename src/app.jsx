import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  // 비디오 api 받아오기
const [videos, setVideos] = useState([]);
const search = (inputVal) => {
  youtube
  .search(inputVal)
  .then((items)=>setVideos(items));
}

useEffect(()=>{
  youtube
  .mostPopular()
  .then(items => setVideos(items));
}, [])

  return (
    <div className={styles.app}>
    <SearchHeader onSearch={search} />
    <VideoList videos={videos}/>
    </div>
  )
   ;
}

export default App;
