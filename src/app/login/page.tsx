"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FormContainer from '../components/formContainer'
import Button from '../components/Button'
import InputArea from '../components/InputArea'

export default function Login() {
  return (
    <FormContainer>
      <h1>CONDOMBR <Image src="/logo.svg" width={47} height={47} alt='logo'/></h1>
          <form>
            <InputArea>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name='email' 
            placeholder='Digite seu email'
            />
            </InputArea>
            <InputArea>
              <label htmlFor="password">Senha</label>
              <input 
              type="password" 
              name='password' 
              placeholder='Digite sua senha'
              />
            </InputArea>
            <InputArea>
              <Button type='submit'>Entrar</Button>
            </InputArea>
            <span>Não possui uma conta? <Link href="/register">Registra-se</Link></span>
          </form>
    </FormContainer>
  )
}
