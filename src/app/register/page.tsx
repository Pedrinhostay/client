"use client"
import React from 'react'
import FormContainer from '../components/formContainer'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button'
import InputArea from '../components/InputArea'
export default function Register() {
  return (
    <FormContainer>
        <h1>CondomBR <Image src="/logo.svg" width={47} height={47} alt='logo'/></h1>
        <form>
            <InputArea>
                <label htmlFor="">Nome Completo</label>
                <input 
                type="text" 
                placeholder='Digite seu nome completo'
                />
            </InputArea>
            <InputArea>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                placeholder='Digite seu melhor email'
                />
            </InputArea>
            <InputArea>
                <label htmlFor="password">Senha</label>
                <input 
                type="password" 
                placeholder='Digite sua melhor senhal'
                />
            </InputArea>
            <InputArea>
                <Button type='submit'>Cadastrar</Button>
            </InputArea>
            <span>Já possui uma conta? <Link href="/login">Entrar</Link></span>
        </form>
    </FormContainer>
  )
}
