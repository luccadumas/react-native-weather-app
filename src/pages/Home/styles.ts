import styled from 'styled-components/native';
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${colors.primary};
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 40px;
`;
