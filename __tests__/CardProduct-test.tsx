import React from 'react';
import {TouchableOpacity} from 'react-native';

import CardProduct from './../src/components/CardProduct';
import renderer from 'react-test-renderer';
import {Product} from '../src/interfaces/product';

describe('Teste CardProduct component', () => {
  it('should present product when params passed corretly', () => {
    const product: Product = {
      id: 5,
      product_name: 'Tenis Nike',
      product_description: 'Tenis de alta qualidade para os melhores clientes.',
      price: 150.5,
      principal_image:
        'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
      other_images: [
        'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      ],
      evaluations: [],
      comments: [],
    };

    const tree = renderer.create(<CardProduct product={product} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call function in prop to action when pressed', () => {
    const mockFn = jest.fn();

    const product: Product = {
      id: 5,
      product_name: 'Tenis Nike',
      product_description: 'Tenis de alta qualidade para os melhores clientes.',
      price: 150.5,
      principal_image:
        'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
      other_images: [
        'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      ],
      evaluations: [],
      comments: [],
    };

    const testRenderer = renderer.create(
      <CardProduct product={product} onTap={mockFn} />,
    );
    const cardTest = testRenderer.root;

    const button = cardTest.findByType(TouchableOpacity);

    renderer.act(button.props.onPress);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
