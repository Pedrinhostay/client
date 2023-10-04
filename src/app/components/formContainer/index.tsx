import React, { ReactNode } from 'react'
import { Container, SectionForm } from './style'

type FormProps = {
    children: ReactNode
}

export default function FormContainer({children}: FormProps) {
  return (
    <Container>
        <SectionForm>
            {children}
        </SectionForm>
    </Container>
  )
}
