import React from 'react'
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import {Avatar} from '../../../components/Avatar/Avatar'
import {Heading} from '../../../components/Heading/Heading'
import {Link} from '../../../components/Link/Link'
import {LinkedIcon} from '../../../components/LinkedIcon/LinkedIcon'
import {Paragraph} from '../../../components/Paragraph/Paragraph'
import styles from './Intro.module.css'

export const Intro = () => {
  return (
    <>
      <Avatar src="/RossToyFace.jpg" alt="Ross Kuyper - Toy Face" />

      <Heading>Hi, I'm Ross Kuyper</Heading>

      <div className={styles.intro}>
        <Paragraph>
          I develop software, mostly using Node, React (&amp; Native), Terraform, Postgres and
          DynamoDB; though I love to dabble in other wonderful pieces of tech.
        </Paragraph>

        <Paragraph>
          Until recently I was also the CTO of{' '}
          <Link target="_blank" href="https://www.namesandfaces.com">
            Names &amp; Faces
          </Link>
          , a Y Combinator company that builds beautiful, fast people directories that leaders need.
        </Paragraph>

        <Paragraph>
          These days I'm mostly just enjoying the pro-leisure circuit while I figure out what's
          next.
        </Paragraph>

        <Paragraph>
          Below you'll find some projects and experiments that I've been working on.
          <br />
          I'm also (slowly) writing out a personal{' '}
          <Link target="_blank" href="https://handbook.rosskuyper.com">
            personal handbook
          </Link>
          .
        </Paragraph>

        <div className={styles.profiles}>
          <LinkedIcon href="https://github.com/rosskuyper" icon={IoLogoGithub} />
          <LinkedIcon href="https://www.linkedin.com/in/ross-kuyper/" icon={IoLogoLinkedin} />
        </div>
      </div>
    </>
  )
}
