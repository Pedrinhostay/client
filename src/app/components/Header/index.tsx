import React from 'react'
import { Container, HeaderContent } from './style'
import Link from 'next/link'

export default function Header() {
  return (
    <Container>
        <HeaderContent>
        <Link href="/">Condom</Link>
        <span>Morador</span>
        </HeaderContent>
    </Container>
  )
}
