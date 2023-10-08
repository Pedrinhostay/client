"use client"
import React, { FormEventHandler, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FormContainer from '../components/formContainer'
import Button from '../components/Button'
import InputArea from '../components/InputArea'

export default function Login() {
  const [formData,setFormData] = useState({email: '', password: ''})
  async function handleFormLogin (e: React.FormEvent){
    e.preventDefault()
    const response = await fetch('http://localhost:3333/login',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if(response.ok){
      console.log('foi')
    }else{
      console.log('noa foi')
    }
  }


  return (
    <FormContainer>
      <h1>CONDOMBR <Image src="/logo.svg" width={47} height={47} alt='logo'/></h1>
          <form onSubmit={handleFormLogin}>
            <InputArea>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name='email' 
            placeholder='Digite seu email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            </InputArea>
            <InputArea>
              <label htmlFor="password">Senha</label>
              <input 
              type="password" 
              name='password' 
              placeholder='Digite sua senha'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
