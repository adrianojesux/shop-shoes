import React, {useCallback, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../utils/theme';

import {
  Container,
  TitleApp,
  HeaderActions,
  HeaderButton,
  InputSearchContent,
  InputSearch,
  InputSearchButtonClose,
} from './styles';

interface HeaderProps {
  onSearch?: (value: string) => void;
  onNavToCart?: () => void;
  onCloseSearch?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onNavToCart,
  onSearch,
  onCloseSearch,
}) => {
  const [searching, setSearching] = useState<boolean>(false);
  const handlePressToCart = useCallback(() => {
    if (onNavToCart) {
      onNavToCart();
    }
  }, [onNavToCart]);

  const inputRef = useRef<TextInput>(null);

  const handleOpenSearchInput = useCallback(() => {
    setSearching(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  }, []);

  const handleCloseSearchInput = useCallback(() => {
    setSearching(false);
    if (onCloseSearch) onCloseSearch();
  }, []);

  const handleInputChange = useCallback((value: string) => {
    if (onSearch) onSearch(value);
  }, []);

  return (
    <Container>
      {searching && (
        <InputSearchContent>
          <InputSearch
            onChangeText={handleInputChange}
            onBlur={handleCloseSearchInput}
            ref={inputRef}
          />
          <InputSearchButtonClose onPress={handleCloseSearchInput}>
            <MDIcon name="close" color={theme.gray} size={16} />
          </InputSearchButtonClose>
        </InputSearchContent>
      )}
      {!searching && (
        <>
          <TitleApp>ShopShoes</TitleApp>
          <HeaderActions>
            <HeaderButton onPress={handleOpenSearchInput}>
              <MDIcon name="magnify" color={theme.darkOrange} size={30} />
            </HeaderButton>
            <HeaderButton onPress={handlePressToCart}>
              <MDIcon name="cart-outline" color={theme.darkOrange} size={30} />
            </HeaderButton>
          </HeaderActions>
        </>
      )}
    </Container>
  );
};

export default Header;
