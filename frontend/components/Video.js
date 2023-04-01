import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styles from '../styles/Video.module.css'
import Comments from './Comments'

const Video = ({
    address,
    url,
    channel,
    description,
    index,
    likes,
    shares,
    likeVideo,
    likeAddress,
    createComment,
    getComments,
    commentCount,
}) => {

    const [playing, setPlaying ] = useState(true)
    const [showCommentsModal, setShowCommentsModal ] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(playing) {
            videoRef.current.play()
            setPlaying(true)
        } else {
            videoRef.current.pause()
            setPlaying(false)
        }
    
    }

    const hideComments = () => [
        setShowCommentsModal(false)
    ]

    const showComments = () => {
        setShowCommentsModal(true)
    }

  return (
    <div className={styles.wrapper}>
        <video
            className={styles.videoPlayer}
            loop
            onClick = {onVideoPress}
            ref = {videoRef}
            src = {url}
            style = {{objectFit: 'cover'}}
        />

        {/* < Footer /> */}

        {/* <Sidebar/> */}

        {showCommentsModal && (
            <Comments />
        )}


    </div>
  )
}

export default Video