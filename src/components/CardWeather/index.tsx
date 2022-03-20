import React, { useState } from "react";
import { Container, Description, Hr, Row, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Hoje",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "11",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "13",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "14",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ padding: 20, flexDirection: 'column', marginVertical: 8, marginHorizontal: 6 }}
  >
    <Text style={{fontSize: 16}}>{item.title}</Text>
    <Text style={{marginTop: 10, fontSize: 16}}>30°</Text>
  </TouchableOpacity>
);

export default function CardWeather({ title }: { title: Text }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <Container>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Hr />
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={100}
          horizontal={true}
        />
      </SafeAreaView>
    </Container>
  );
}
