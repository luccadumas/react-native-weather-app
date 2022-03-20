import React from "react";
import { Container, Description, Hr, Row, Title } from "./styles";
import { Ionicons } from '@expo/vector-icons';

export default function CardAlert({
  title,
  description,
}: {
  title: Text;
  description: Text;
}) {
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
