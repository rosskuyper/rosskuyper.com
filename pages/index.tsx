import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Avatar} from '../components/Avatar/Avatar'
import {Text} from '../components/Text/Text'
import {Heading} from '../components/Heading/Heading'
import {Link} from '../components/Link/Link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ross Kuyper</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className={styles.main}>
        <Avatar src="/RossToyFace.jpg" alt="Ross Kuyper - Toy Face" />

        <Heading>Hi, I'm Ross Kuyper</Heading>

        <div className={styles.intro}>
          <Text>
            I develop software, mostly using Node, React (&amp; Native), Terraform, Postgres and
            DynamoDB - though I often dabble in other wonderful pieces of tech.
          </Text>

          <Text>
            I'm the ex-CTO of{' '}
            <Link target="_blank" href="https://www.namesandfaces.com">
              Names &amp; Faces
            </Link>
            , a Y Combinator company that builds beautiful, fast employee directories.
          </Text>

          <Text>
            I'm currently enjoying the pro-leisure circuit while I figure out what's next. Below
            you'll find some projects (software and otherwise) that I've been working on.
          </Text>

          <Text>
            I'm also steadily writing out a personal{' '}
            <Link target="_blank" href="https://handbook.rosskuyper.com">
              handbook
            </Link>
            .
          </Text>
        </div>
      </div>
    </>
  )
}
