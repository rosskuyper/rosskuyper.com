import React from 'react'

import styles from './Text.module.css'

export type TextPropType = React.ComponentProps<'p'> & {
  variant?: 'paragraph'
}

export const Text = (props: TextPropType) => {
  const {variant = 'paragraph', ...rest} = props || {}

  return <p className={styles[variant]} {...rest} />
}
