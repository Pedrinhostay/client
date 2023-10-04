import React, { ReactNode } from 'react'
import { Container } from './style'

interface InputProps {
  children: ReactNode
}

export default function InputArea({children}: InputProps) {
  return (
    <Container>{children}</Container>
  )
}
