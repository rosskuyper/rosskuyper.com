import React from 'react'

import styles from './Heading.module.css'

// h1-h6 all have the same props
export type TextPropType = React.ComponentProps<'h1'> & {
  variant?: 'h1' | 'h3' | 'h5'
}

export const Heading = (props: TextPropType) => {
  const {variant = 'h1', ...rest} = props || {}

  return React.createElement(variant, {
    className: styles[variant],
    ...rest,
  })
}
