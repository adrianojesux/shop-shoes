import React, {useCallback} from 'react';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../utils/theme';

import {Container, TitleApp, HeaderActions, HeaderButton} from './styles';

interface HeaderProps {
  onSearch?: (value: string) => void;
  onNavToCart?: () => void;
}

const Header: React.FC<HeaderProps> = ({onNavToCart}) => {
  const handlePressToCart = useCallback(() => {
    if (onNavToCart) {
      onNavToCart();
    }
  }, [onNavToCart]);

  return (
    <Container>
      <TitleApp>ShopShoes</TitleApp>
      <HeaderActions>
        <HeaderButton onPress={() => {}}>
          <MDIcon name="magnify" color={theme.darkOrange} size={30} />
        </HeaderButton>
        <HeaderButton onPress={handlePressToCart}>
          <MDIcon name="cart-outline" color={theme.darkOrange} size={30} />
        </HeaderButton>
      </HeaderActions>
    </Container>
  );
};

export default Header;
