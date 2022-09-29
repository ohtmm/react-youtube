import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    return(
        <h2>{selectedVideo.snippet.title}</h2>
        );
        

}

export default VideoDetail;