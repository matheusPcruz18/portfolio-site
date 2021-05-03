import React from 'react'
import { ContactContainer, Title, CardContainer } from './style';
import ContactCard from './CardContact';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title>Entre em contato</Title>

      <CardContainer>
        <ContactCard
          cardIcon="Map"
          cardTitle="Localização"
          cardContent="São Sebastião - SP" 
        />
        <ContactCard
          cardIcon="Whats"
          cardTitle="Telefone - Whats"
          cardContent="(12) 99789-3277" 
        />
        <ContactCard
          cardIcon="Email"
          cardTitle="Email"
          cardContent="matheus.pcruz18@gmail.com" 
        />
      </CardContainer>
    </ContactContainer>
  )
}

export default Contact;
