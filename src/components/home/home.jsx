import { useEffect } from 'react';
import { useState } from 'react';
import styles from './home.module.css';
import SearchHeader from '../search_header/search_header';
import VideoDetail from '../video_detail/video_detail';
import VideoList from '../video_list/video_list';
import { useNavigate } from 'react-router-dom';

function Home({youtube, authService}) {
    const navigate = useNavigate();
     const onLogout = () => {
        authService.logout();
        navigate('/react-youtube/');
      }
        // 비디오 api 받아오기
      const [videos, setVideos] = useState([]);
      const [selectedVideo, setSelectedVideo] = useState(null);

      const search = (inputVal) => {
        setSelectedVideo(null);
        youtube
        .search(inputVal)
        .then((items)=>setVideos(items));
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
      }, [youtube])


        return (
          <div className={styles.app}>
          <SearchHeader onLogout={onLogout} onSearch={search} goHome={goHome}/>
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

export default Home;
