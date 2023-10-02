"use client"
import Link from "next/link";
import { Container, Content, ContentItem, Header, Navigation } from "./style";


export default function Home() {
  return (
    <Container>
      <Header>
        <Link href="/">Condom</Link>
        <span>Morador</span>
      </Header>
      <Navigation>
        <button>Adicionar Inquilino</button>
        <button>Solicitar Reservas</button>
        <button>Fazer Reclamações</button>
        <button>Serviços</button>
      </Navigation>
      <Content>
        <ContentItem>
          <h2>Propriedade</h2>
          <h1>APT 01</h1>
          <div>
          <button>Ver</button>
          <button>Alterar</button>
          </div>
        </ContentItem>
      </Content>
    </Container>
  )
}
