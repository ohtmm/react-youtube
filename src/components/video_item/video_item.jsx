import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video : {snippet }, onSelect, display}) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return(
        <li className={`${styles.container} ${displayType}` } onClick={()=>{onSelect(video)}}>
        <div className={`${styles.video} ${displayType}`}>
               <img className={`${styles.thumbnail} ${displayType}`}src={snippet.thumbnails.medium.url} alt="video thumbnail" />
               <div className={styles.metadata}>
                   <p className={styles.title}> {snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
              </div>  
        </div>
    </li>
    );
    }
    
export default VideoItem;