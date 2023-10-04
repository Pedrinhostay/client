import React, { ReactNode } from 'react'
import { Container } from './style'

interface BtnProps {
    children: ReactNode
    type: string
}

export default function Button({children,type}: BtnProps) {
  return (
    <Container type=''>{children}</Container>
  )
}
