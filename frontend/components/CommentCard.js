import React from 'react'
import styles from '../styles/CommentCard.module.css'
import Image from 'next/image'
import heartOutlined from '../assets/heartOutlined.svg'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

const CommentCard = ({username, timestamp,avatar,comment}) => {
  return (
    <div className={styles.wrapper}>
        <div>
            <Image
                width = {34}
                height = {34}
                className = {styles.avatar}
                src = {avatar}
                alt = {userName}
            />
        </div>
        <div className={styles.textContainer}>
            <div>
                <p className={styles.username}>{username}</p>
                <p className={styles.commentText}>{comment}</p>
                <div>
                    <span>
                        {timeAgo.format(new Date(timestamp * 1000), 'twitter-now')}
                    </span>
                </div>
            </div>
            <div className={styles.button}>
                <div>
                    <Image
                        width={24}
                        height={24}
                        src={heartOutlined}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentCard