import styled from 'styled-components/native';
import colors from "../../constants/colors";
import { normalize } from '../../util/normalize';

export const Container = styled.View`
  flex-direction: column;
  width: 90%;
  background-color: ${colors.cardPrimary};
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${normalize(16)};
  padding: 10px;
  color: ${colors.light};
  margin-top: -6px;
`;

export const Description = styled.Text`
  font-size: ${normalize(12)};
  padding: 10px;
  color: ${colors.light};
`;

export const Hr = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
  opacity: 0.3;
  margin-horizontal: 10px;
`;
