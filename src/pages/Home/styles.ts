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

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 40px;
`;

export const Content = styled.View`
  flex-direction: column;
  width: 90%;
  opacity: 0.2;
  background-color: ${colors.primary};
  margin-top: 18px;
  margin-bottom: 40px;
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
`;

export const MaxMin = styled.Text`
  font-size: ${normalize(20)};
  text-align: center;
  color: ${colors.light};
`;
