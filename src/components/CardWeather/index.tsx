import React, { useState } from "react";
import { Container, Description, Hr, Row, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { apiImage } from "../../services/api";
import { convertMetrics } from "../../util/convertMetrics";

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
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "13",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "14",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ padding: 20, flexDirection: 'column', marginVertical: 8, marginHorizontal: 6 }}
  >
    <Text style={{fontSize: 13, color: "#ddd", fontWeight: "600", alignSelf: "center"}}>{item.title}</Text>
    <Text style={{marginTop: 10, fontSize: 16, alignSelf: "center", color: "#FFF", fontWeight: "600"}}>30°</Text>
    <Image source={{
          uri: `${apiImage}/wn/10d@2x.png`,
        }} style={{width: 40, height: 40, alignSelf: "center"}} />
    <Text style={{fontSize: 13, color: "#fff", fontWeight: "600", alignSelf: "center"}}>{`${convertMetrics(3.09)} km/h`}</Text>
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
