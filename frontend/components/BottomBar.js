import React from 'react'
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io'
import { BiMessageMinus } from 'react-icons/bi'
import { BsPerson} from 'react-icons/bs'
import styles from '../styles/BottomBar.module.css'

const BottomBar = ({ setNewVideoShow, getTiktoks}) => {
  return (
    <div className={styles.wrapper}>
      <AiFillHome className={styles.bottomIcon} />
      <AiOutlineCompass className={styles.bottomIcon} onClick={getTiktoks} />
      <div className={styles.addVideoButton}>
        <IoIosAdd
          className={styles.bottomIcon}
          onClick={() => setNewVideoShow(true)}
          style={{color: 'black'}}
         />
      </div>
      <BiMessageMinus className={styles.bottomIcon} />
      <BsPerson className={styles.bottomIcon} />
    </div>
  )
}

export default BottomBar