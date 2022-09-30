import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({selectedVideo, selectedVideo : {snippet} }) => (
    <div className={styles.detail}>
        <iframe 
            type="text/html"
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            frameBorder="0"
            allowFullScreen
            >
        </iframe>
        <h2 className={styles.tit}>{snippet.title}</h2>
        <h3 className={styles.channel}>{snippet.channelTitle}</h3>
        <pre className={styles.desc}>
            {snippet.description}
        </pre>
        

    </div>
)
export default VideoDetail;