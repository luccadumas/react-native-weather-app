import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import CardAlert from '../../components/CardAlert';
import image from '../../assets/bg.png';
import {
  getCurrentWeather,
  getOneCall,
  setStoredCurrentWeather,
  setStoredOneCall,
} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';

import {
  Container,
  Content,
  City,
  Header,
  Background,
  Temperature,
  Climate,
  MaxMin,
  Refresh,
  MessageError,
} from './styles';
import {ActivityIndicator} from 'react-native';
import CardWeather from '../../components/CardWeather';
import {customToast} from '../../util/showMessage';

export default function Home() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState<Number>(0.00);
  const [longitude, setLongitude] = useState<Number>(0.00);
  const [errorMsg, setErrorMsg] = useState<String>('');
  const loading = useSelector((state: StoreType) => state.Weather.loading);

  const {
    storedCity: city,
    storedTempMax: tempMax,
    storedTempMin: tempMin,
    storedTemp: temp,
    storedWeather: weather,
    storedDailyList: daily,
    storedDescription: description,
    storedEvent: event,
  } = useSelector((state: StoreType) => state.Weather);

  async function handlerGetCurrentLocation() {

    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão para acessar a localização negada. 🙁⛈ \n\n Por favor, ative a localização.');
      customToast(errorMsg, 'error');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setLatitude(location?.coords?.latitude);
    setLongitude(location?.coords?.longitude);
  }

  useEffect(() => {
    handlerGetCurrentLocation();
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(getCurrentWeather({latitude, longitude}));
      dispatch(getOneCall({latitude, longitude}));

      return () => {
        dispatch(
          setStoredCurrentWeather({
            city: "",
            temp: 0.00,
            temp_max: 0.00,
            temp_min: 0.00,
            weather: "",
            daily: [],
          }),
        );
        dispatch(setStoredOneCall({daily: []}));
      };
    }
  }, [dispatch, latitude, longitude]);

  return (
    <Container>
      <Background source={image} resizeMode="cover">
        {loading && !errorMsg ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : errorMsg ? (
          <MessageError>{errorMsg}</MessageError>
        ) :
        (
          <>
            <Refresh onPress={() => handlerGetCurrentLocation()}>
              <Ionicons name="refresh-outline" size={32} color="#FFF" />
            </Refresh>
            <Content>
              <Header>
                <City>{city}</City>
                <Temperature>{temp}°</Temperature>
                <Climate>{weather}</Climate>
                <MaxMin>
                  Min.: {tempMin}° Máx.: {tempMax}°
                </MaxMin>
              </Header>
              {event && description ? (
                <CardAlert title={event} description={description} />
              ) : null}
              <CardWeather
                title={'Previsão do tempo para a semana'}
                data={daily}
              />
            </Content>
          </>
        )}
      </Background>
    </Container>
  );
}
