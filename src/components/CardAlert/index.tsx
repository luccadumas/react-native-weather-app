import React from "react";
import { Container, Description, Hr, Row, Title } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { CardAlertType } from './index.type';

const CardAlert: React.FC<CardAlertType> = ({
  title,
  description,
}) => {
  return (
    <Container>
      <Row>
        <Ionicons name="alert-circle-outline" size={32} color="#FFF" />
        <Title>{title}</Title>
      </Row>
      <Hr />
      <Description>{description}</Description>
    </Container>
  );
}

export default CardAlert;
