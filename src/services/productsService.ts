import {Product} from './../interfaces/product';
class ProductService {
  getProducts(): Product[] {
    const products: Product[] = [
      {
        product_name: 'Tenis Adidas',
        product_description:
          'Tenis de alta qualidade para os melhores clientes.',
        price: '150.50',
        principal_image:
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        other_images: [
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        ],
        evaluations: [],
        comments: [],
      },
      {
        product_name: 'Tenis Nike',
        product_description:
          'Tenis de alta qualidade para os melhores clientes.',
        price: '150.50',
        principal_image:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
        other_images: [
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        ],
        evaluations: [],
        comments: [],
      },
      {
        product_name: 'Tenis Nike',
        product_description:
          'Tenis de alta qualidade para os melhores clientes.',
        price: '150.50',
        principal_image:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
        other_images: [
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        ],
        evaluations: [],
        comments: [],
      },
      {
        product_name: 'Tenis Nike',
        product_description:
          'Tenis de alta qualidade para os melhores clientes.',
        price: '150.50',
        principal_image:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
        other_images: [
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        ],
        evaluations: [],
        comments: [],
      },
      {
        product_name: 'Tenis Nike',
        product_description:
          'Tenis de alta qualidade para os melhores clientes.',
        price: '150.50',
        principal_image:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
        other_images: [
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
        ],
        evaluations: [],
        comments: [],
      },
    ];
    return products;
  }
}
export default new ProductService();
