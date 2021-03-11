import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Intro} from '../sections/home/Intro/Intro'
import {WorkSections} from '../sections/home/WorkSections/WorkSections'
import {Paragraph} from '../components/Paragraph/Paragraph'
import {useNow} from '../hooks/useNow'

export default function Home() {
  // Totally unnecessary but let's not trust the browser date unless we have to
  const {now} = useNow()

  return (
    <>
      <Head>
        <title>Ross Kuyper</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className={styles.main}>
        <Intro />

        <WorkSections />

        <Paragraph variant="tiny">&copy; {now.getFullYear()} Ross Kuyper</Paragraph>
      </div>
    </>
  )
}
