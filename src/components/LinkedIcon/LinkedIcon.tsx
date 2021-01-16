import React from 'react'
import {IconType} from 'react-icons'
import styles from './LinkedIcon.module.css'

export type LinkedIconProps = React.ComponentProps<'a'> & {
  icon: IconType
}

export const LinkedIcon = ({icon: Icon, ...props}: LinkedIconProps) => {
  return (
    <a target="_blank" className={styles.linkedIcon} {...props}>
      <Icon size="1.75rem" color="#666" />
    </a>
  )
}
