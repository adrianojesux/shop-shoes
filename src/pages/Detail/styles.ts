import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.ScrollView``;

export const HeaderPage = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 4px;
  margin: 4px;
`;

export const ImageContent = styled.View`
  overflow: hidden;
`;

export const ContentStars = styled.View`
  flex: 1;
  width: 100%;
  height: 30px;
  flex-direction: row;
`;

export const ProductOldPrice = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
`;

export const ProductPrice = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 22px;
  color: ${theme.gray};
`;

export const ProductName = styled.Text`
  font-size: 24px;
  font-family: 'Montserrat-Bold';
  color: ${theme.dark};
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Regular';
  color: ${theme.gray};
`;

export const ProductBody = styled.View`
  flex: 1;
  text-align: center;
  margin: 8px;
  padding: 8px 16px;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  width: 100%;
  margin: 16px 0;
  height: 50px;
  background-color: ${theme.darkOrange};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonAddToCartTitle = styled.Text`
  font-size: 18px;
  color: ${theme.dark};
  padding: 4px 8px;
  font-family: 'Montserrat-Bold';
`;

export const CommentsArea = styled.View`
  flex: 1;
`;

export const CommentTitleArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.gray};
  align-items: center;
  margin: 16px 0;
`;
export const Comment = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.light};
  padding: 4px 8px;
`;
export const CommentAuthor = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 12px;
`;
export const CommentText = styled.Text``;
