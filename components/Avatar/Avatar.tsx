import React from 'react'

import styles from './Avatar.module.css'

export const Avatar = (props: React.ComponentProps<'img'>) => {
  return <img className={styles.avatar} {...props} />
}
