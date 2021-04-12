import Head from 'next/head'
import { Button, Text, Page } from '@geist-ui/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Page>
      <Text h1 size="2em" style={{textAlign:"center"}}>Repl Talk Badge Generator</Text>
    </Page>
  )
}
