import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  // 비디오 api 받아오기
const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);

const search = (inputVal) => {
  youtube
  .search(inputVal)
  .then((items)=>setVideos(items));
  setSelectedVideo((prev)=>!prev);
}

const onSelect = (video) =>{
  setSelectedVideo(video);
}

const goHome = () => {
  setSelectedVideo(null);
  youtube
  .mostPopular()
  .then(items => setVideos(items));
}

useEffect(()=>{
  youtube
  .mostPopular()
  .then(items => setVideos(items));
}, [])

  return (
    <div className={styles.app}>
    <SearchHeader onSearch={search} goHome={goHome}/>
    <section className={styles.content}>
      {selectedVideo && 
      <div className={styles.detail}>
         <VideoDetail selectedVideo={selectedVideo}/> 
      </div>}
      <div className={styles.list}>
    <VideoList onSelect={onSelect} videos={videos} display={selectedVideo ? 'list' : 'grid'}/>
      </div>
    </section>
    </div>
  )
   ;
}

export default App;
