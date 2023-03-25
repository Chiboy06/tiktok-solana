import React from 'react'
import styles from '../styles/MainView.module.css'
import Signup from './Signup'
import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { SOLANA_HOST } from '../utils/const'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

import useAccount from '../hooks/useAccount'

const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const { BN, web3 } = anchor
const { SystemProgram } = web3

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
}

let isAccount = false

const MainView = () => {

  const [isAccount, setAccount] = useState(false)
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)

  const program = getProgramInstance(connection,wallet)

  const { signup } = useAccount()

  return (
    <>
      {isAccount ? (
          <div>
              TikTok will go here
          </div>
      ) : (
          <Signup signup = {signup} wallet = {wallet.publicKey.toBase58()} />
      )}
    </>
  )
}

export default MainView