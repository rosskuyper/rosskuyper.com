import React from 'react'
import styles from './Link.module.css'

export const Link = (props: React.ComponentProps<'a'>) => {
  return <a className={styles.link} {...props} />
}
