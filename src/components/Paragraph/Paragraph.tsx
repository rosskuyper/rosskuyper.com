import React from 'react'

import styles from './Paragraph.module.css'

export type ParagraphPropType = React.ComponentProps<'p'> & {
  variant?: 'standard' | 'small' | 'tiny'
}

export const Paragraph = (props: ParagraphPropType) => {
  const {variant = 'standard', ...rest} = props || {}

  return <p className={styles[variant]} {...rest} />
}
