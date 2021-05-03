import styled from 'styled-components';
import { FaWhatsapp as Whats, FaMapMarkerAlt as Map } from "react-icons/fa";
import { AiOutlineMail as Email } from "react-icons/ai";

const ContactCard = ({cardIcon, cardTitle, cardContent}) => {
  const icon = cardIcon;
  return (
    <Card>
      <IconArea className="icon">
        {cardIcon === 'Map' && (<Map />)}
        {cardIcon === 'Email' && (<Email />)}
        {cardIcon === 'Whats' && (<Whats />)}
      </IconArea>

      <Title className="title">{cardTitle}</Title>

      <CardContent className="content">{cardContent}</CardContent>
    </Card>
  )
}

export default ContactCard;

const Card = styled.div`
  width: 240px;
  height: 190px;
  background: #011627;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 10px 20px;
  transition: all ease 0.2s;
  transform: scale(0.9);

  @media screen and (max-width: 940px){
    width: 80%;
  }

  :hover{
    background-color: #fff;
    border: 2px solid #011627;
    transform: scale(1);

    .icon, .title, .content{
      color: #011627;
    }
  }
`;

const IconArea = styled.div`
  color: #fff;
  font-size: 30px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const CardContent = styled.p`
  font-size: 14px;
  text-align: center;
  color: #fff;
`;