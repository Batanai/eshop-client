export interface IProduct {
  id: number;
  name: string;
  description: string;
  richDescription: string;
  price: number;
  category: ICategory;
  image: string;
  images?: IImages[];
  brand: string;
  countInStock: number;
  rating: number;
  isFeatured: boolean;
  numberOfRatings: number;
}

export interface IImages {
  id: number;
  imageUrl: string;
}

export interface ICategory {
  id: number;
  name: string;
  color: string;
  icon: string;
  image: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  street: string;
  apartment: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  isAdmin: boolean;
}

export interface ICartItem {
  id: number;
  products: IProduct[];
  quantity: number;
}

export interface ICart {
  id: number;
  user: IUser;
  cartItems: ICartItem[];
}

export interface Order {
  id: number;
  cart: ICart;
  shippingAddress1: string;
  shippingAddress2: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  status: string;
  TotalPrice: number;
  dateOrdered: Date;
}
