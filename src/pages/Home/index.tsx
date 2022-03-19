// @ts-nocheck
import React, { useEffect, useState } from "react";
import { convertUnixDate } from "../../util/convertUnixTime";
import * as Location from "expo-location";
import { api } from "../../services/api";
import { Dimensions } from "react-native";
// import Video from 'react-native-video';
import video from "../../assets/video/weather.mp4";
import image from "../../assets/bg.png";
import { getCurrentWeather, setStoredCurrentWeather } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { Video } from 'expo'

// import Logo from "../../assets/images/logo.svg";
// import UserIcon from "../../assets/icons/user.svg";
// import NotificationIcon from "../../assets/icons/notification.svg";

// import CardStatus from "../../componets/CardStatus";
// import Footer from "../../componets/Footer";

// import { useNavigation } from "@react-navigation/core";
// import { useSelector } from "react-redux";

import { Container, Title, Header, Wrapper, Background } from "./styles";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const dispatch = useDispatch(); 
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [currentWeather2, setCurrentWeather2] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { 
    storedCity: city,
  } = useSelector( state => state.CurrentWeather);

  // const { 
  //   storedCity: city, 
  // } = useSelector( state => state.CurrentWeather);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location?.coords?.latitude);
      setLongitude(location?.coords?.longitude);
    })();
  }, []);

  useEffect(() => {
    dispatch(getCurrentWeather({latitude, longitude}));

    return () => dispatch(setStoredCurrentWeather({ city: null, temp: null, temp_max: null, temp_min: null, weather: null }));
  }, [dispatch, latitude, longitude]);

  useEffect(() => {
    setCurrentWeather2(city);
  }, [city]);

  // useEffect(() => {
  //   setCityT(city);
  // }, [city]);
  // useEffect(() => {
  //   setCity(useSelector(state => state.CurrentWeather.storedCity));
  // }, [city]);

  // useEffect(() => {
  //   setMovementsList(movements);
  // }, [movements]);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

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
        <Header>
          <Title></Title>
        </Header>
      </Background>
    </Container>
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Logo width={65} height={65} style={{ marginRight: 30 }} />
    //     <View>
    //       <Text style={styles.title}>Bem vindo,</Text>
    //       <Text style={styles.subTitle}>ao Vanguarda Cash</Text>
    //     </View>
    //     <View style={{ marginLeft: 15, flexDirection: "row" }}>
    //       <NotificationIcon
    //         width={30}
    //         height={30}
    //         style={{ marginTop: 2 }}
    //         onPress={() => navigation.navigate("Notifications")}
    //       />
    //       <UserIcon
    //         width={32}
    //         height={32}
    //         style={{ marginLeft: 10 }}
    //         onPress={() => navigation.navigate("Profile")}
    //       />
    //     </View>
    //   </View>
    //   <View style={styles.cardStatus}>
    //     <CardStatus
    //       color={colors.cardOnline}
    //       marginTop={20}
    //       type="ONLINE"
    //       connection={"online"}
    //       redirect="ManageSafeBoxes"
    //       numberSafeBoxes={numberOfOnlineSafeBoxes}
    //       percentage={percentageOfOnlineSafeBoxes}
    //     />
    //     <CardStatus
    //       color={colors.cardOffline}
    //       marginTop={30}
    //       type="OFFLINE"
    //       connection={"offline"}
    //       redirect="ManageSafeBoxes"
    //       numberSafeBoxes={numberOfOfflineSafeBoxes}
    //       percentage={percentageOfOfflineSafeBoxes}
    //     />
    //   </View>
    //   <Footer />
    // </View>
  );
}
