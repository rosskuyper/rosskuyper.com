import React from 'react'
import {Heading} from '../Heading/Heading'
import {Link} from '../Link/Link'
import {Paragraph} from '../Paragraph/Paragraph'

export type ProjectPropTypes = {
  heading: string
  href: string
}

export const Project: React.FC<ProjectPropTypes> = ({heading, href, children}) => {
  return (
    <div>
      <Heading variant="h5">
        <Link target="_blank" href={href}>
          {heading}
        </Link>
      </Heading>

      <Paragraph variant="small" children={children} />
    </div>
  )
}
