import React from 'react'
import {Avatar} from '../../../components/Avatar/Avatar'
import {Heading} from '../../../components/Heading/Heading'
import {Link} from '../../../components/Link/Link'
import {Text} from '../../../components/Text/Text'
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import styles from './intro.module.css'
import {LinkedIcon} from '../../../components/LinkedIcon/LinkedIcon'

export const Intro = () => {
  return (
    <>
      <Avatar src="/RossToyFace.jpg" alt="Ross Kuyper - Toy Face" />

      <Heading>Hi, I'm Ross Kuyper</Heading>

      <div className={styles.intro}>
        <Text>
          I develop software, mostly using Node, React (&amp; Native), Terraform, Postgres and
          DynamoDB; though I often dabble in other wonderful pieces of tech.
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
          I'm also steadily writing out a{' '}
          <Link target="_blank" href="https://handbook.rosskuyper.com">
            personal handbook
          </Link>
          .
        </Text>

        <div className={styles.profiles}>
          <LinkedIcon href="https://github.com/rosskuyper" icon={IoLogoGithub} />
          <LinkedIcon href="https://www.linkedin.com/in/ross-kuyper/" icon={IoLogoLinkedin} />
        </div>
      </div>
    </>
  )
}
