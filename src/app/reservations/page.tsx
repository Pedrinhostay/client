"use client"
import React from 'react'
import { AreaFormReservation, Container, Content } from "./style"
import Header from '../components/Header'


export default function ReservationRequest() {
  return (
    <>
    <Header/>
    <Container>
        <Content>
            <h1>Solicitar Reserva de Salão</h1>
            <AreaFormReservation>
            <input type="text" placeholder='Motivo da solicitação'/>
            <input type="date" placeholder='Data do Evento'/>
            <input type="time" placeholder='Hora do Evento'/>
            <button>Solicitar</button>
            </AreaFormReservation>
        </Content>
    </Container>
    </>
  )
}
