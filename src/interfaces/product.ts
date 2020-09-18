export interface Product {
  principal_image: Image;
  other_images: Array<Image>;
  product_name: string;
  product_description: string;
  price: string | number;
  sale_price?: string;
  evaluations: Array<Evaluation>;
  comments: Array<Comment>;
}

export interface Comment {
  author_name: string;
  comment_text: string;
}

export interface Evaluation {
  rate: RateValue;
}

export enum RateValue {
  one = 1,
  two = 2,
  tree = 3,
  four = 4,
  five = 5,
}

export interface Image {
  src: string;
  description?: string;
}
