import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = ({channel, description, song}) => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerText}>
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className={styles.footerTicker}>
                <MusicNoteIcon className={styles.footerIcon}/>
                <p>&nbsp; &nbsp; &nbsp; {song}</p>
            </div>
        </div>
        <div className={styles.footerRecord}>
            <Image
                // src = {'https://upload.wikimedia.org/https://https://media.istockphoto.com/id/1282459424/vector/vinyl-record-player-in-modern-flat-style.jpg?s=612x612&w=0&k=20&c=n5bQNsU3Qv1w5IL1aLA1Wy417D0gwyc08XY_RTTaGoc=.istockphoto.com/id/980711798/vector/retro-vinyl-record-concept.jpg?s=612x612&w=0&k=20&c=mnZbUT812fbxFd0UU9JSP_8SKcd1bAUqS73XOOiEU1o=/commons/thumb/b/b6/12in-Vinyl-LP-Record-Angle.jpg/220px-12in-Vinyl-LP-Record-Angle.jpg'}
                src = {'https://static.thenounproject.com/png/934821-200.png'}
                alt = 'vinyl record'
                width = {50}
                height = {50}
                // style={{background: 'white'}}
            />
        </div>
    </div>
  )
}

export default Footer