import React from "react";
import { Container, Description, Hr, Row, Title } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { CardAlertT } from './index.type';

const CardAlert: React.FC<CardAlertT> = ({
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
