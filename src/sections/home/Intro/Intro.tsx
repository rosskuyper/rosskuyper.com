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
          DynamoDB; though I often dabble in other wonderful pieces of tech.
        </Paragraph>

        <Paragraph>
          I'm the ex-CTO of{' '}
          <Link target="_blank" href="https://www.namesandfaces.com">
            Names &amp; Faces
          </Link>
          , a Y Combinator company that builds beautiful, fast employee directories.
        </Paragraph>

        <Paragraph>
          I'm currently enjoying the pro-leisure circuit while I figure out what's next. Below
          you'll find some projects (software and otherwise) that I've been working on.
        </Paragraph>

        <Paragraph>
          I'm also steadily writing out a{' '}
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
