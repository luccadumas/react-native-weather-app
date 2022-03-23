import styled from 'styled-components/native';
import colors from "../../constants/colors";
import { normalize } from '../../util/normalize';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Refresh = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 40px;
  margin-left: -36px;
`;

export const Content = styled.ScrollView`
  margin-top: 80px;
  margin-right: -36px;
`;

export const City = styled.Text`
  font-size: ${normalize(20)};
  text-align: center;
  color: ${colors.light};
`;

export const Temperature = styled.Text`
  font-size: ${normalize(70)};
  text-align: center;
  color: ${colors.light};
`;

export const Climate = styled.Text`
  font-size: ${normalize(20)};
  text-align: center;
  color: ${colors.light};
  text-transform: capitalize;
`;

export const MaxMin = styled.Text`
  font-size: ${normalize(20)};
  text-align: center;
  color: ${colors.light};
`;

export const MessageError = styled.Text`
  font-size: ${normalize(20)};
  text-align: center;
  color: ${colors.light};
`;
