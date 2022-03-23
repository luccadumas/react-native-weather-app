import React, {useState} from 'react';
import {Container, Hr, Row, Title} from './styles';
import {
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';
import {apiImage} from '../../services/api';
import {convertMetrics} from '../../util/convertMetrics';
import {convertUnixDate} from '../../util/convertUnixTime';
import {Button, Date, Temp, Weather, WindSpeed} from './styles';

const Item = ({item, onPress}) => (
  <Button onPress={onPress}>
    <Date>{convertUnixDate(item?.dt)}</Date>
    <Temp>{item?.temp?.day}°</Temp>
    <Weather
      source={{
        uri: `${apiImage}/wn/${item?.weather?.[0]?.icon}@2x.png`,
      }}
    />
    <WindSpeed>{`${convertMetrics(item?.wind_speed)} km/h`}</WindSpeed>
  </Button>
);

export default function CardWeather({title, data}: {title: Text; data: []}) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
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
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.dt}
          extraData={100}
          horizontal={true}
        />
      </SafeAreaView>
    </Container>
  );
}
