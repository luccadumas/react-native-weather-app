// @ts-nocheck
import React, { useEffect, useState } from "react";
import { convertUnixDate } from "../../util/convertUnixTime";
import * as Location from "expo-location";
import CardAlert from "../../components/CardAlert";
import image from "../../assets/bg.png";
import {
  getCurrentWeather,
  setStoredCurrentWeather,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

// import Logo from "../../assets/images/logo.svg";
// import UserIcon from "../../assets/icons/user.svg";
// import NotificationIcon from "../../assets/icons/notification.svg";

// import CardStatus from "../../componets/CardStatus";
// import Footer from "../../componets/Footer";

// import { useNavigation } from "@react-navigation/core";
// import { useSelector } from "react-redux";

import {
  Container,
  City,
  Header,
  TitleCard,
  Background,
  Temperature,
  Climate,
  MaxMin,
  Content,
  Refresh,
} from "./styles";
import CardWeather from "../../components/CardWeather";
import { customToast } from "../../util/showMessage";

export default function Home() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [currentWeatherStored, setCurrentWeatherStored] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // const {
  //   storedCity: city,
  // } = useSelector( state => state.CurrentWeather);

  // const {
  //   storedCity: city,
  // } = useSelector( state => state.CurrentWeather);

  async function handlerGetCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      customToast("Permissão para acessar a localização negada", "error");
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
    dispatch(getCurrentWeather({latitude, longitude}));

    return () => dispatch(setStoredCurrentWeather({ city: null, temp: null, temp_max: null, temp_min: null, weather: null }));
  }, [dispatch, latitude, longitude]);

  // useEffect(() => {
  //   setCurrentWeatherStored(city);
  // }, [city]);

  // api.get(`onecall?lat=${String(location?.coords?.latitude)}&lon=${String(location?.coords?.longitude)}&appid=ead617ec2dba6d888611653b004c0c2a&lang=pt_br&units=metric&exclude=minutely,`).then(res => {
  //   console.log(res.data, "aqui");
  // });

  // api.get(`weather?lat=${String(location?.coords?.latitude)}&lon=${String(location?.coords?.longitude)}&appid=ead617ec2dba6d888611653b004c0c2a&lang=pt_br&units=metric,`).then(res => {

  //   console.log(res.data.name, "aqui");
  // });

  // console.log(location, "AQUIIIII")

  // convertUnixDate(1647630000);
  // const navigation = useNavigation();
  // const { online, offline } = useSelector((state) => state.SafeBoxes);
  // const [numberOfOnlineSafeBoxes, setNumberOfOnlineSafeBoxes] = useState();
  // const [numberOfOfflineSafeBoxes, setNumberOfOfflineSafeBoxes] = useState();
  // const [percentageOfOnlineSafeBoxes, setPercentageOfOnlineSafeBoxes] =
  //   useState();
  // const [percentageOfOfflineSafeBoxes, setPercentageOfOfflineSafeBoxes] =
  //   useState();

  // useEffect(() => {
  //   setNumberOfOnlineSafeBoxes(online);
  //   setNumberOfOfflineSafeBoxes(offline);
  // }, [online, offline]);

  return (
    <Container>
      <Background source={image} resizeMode="cover">
        <Refresh>
          <Ionicons name="refresh-outline" size={32} color="#FFF" />
        </Refresh>
        <Header>
          <City>Balneário Camboriú</City>
          <Temperature>70°</Temperature>
          <Climate>Nublado</Climate>
          <MaxMin>Máx.: 32° Min.: 23°</MaxMin>
        </Header>
        <CardAlert
          title={"Acumulado de chuva"}
          description={"Instituto Nacional de Meteorologia: Tempestade"}
        />
        <CardWeather title={"Previsão do tempo para a semana"}></CardWeather>
      </Background>
    </Container>
  );
}
