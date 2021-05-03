import styled from 'styled-components';
import { FaWhatsapp as Whats} from "react-icons/fa";
import { BiMap as Map } from "react-icons/bi";
import { AiOutlineMail as Email } from "react-icons/ai";

const ContactCard = ({cardIcon, cardTitle, cardContent}) => {
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

  //box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  

  @media screen and (max-width: 940px){
    width: 95%;
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
  font-size: 40px;
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