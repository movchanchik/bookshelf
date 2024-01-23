export interface BookType {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface BookShelf {
  bookList: BookType[];
}

export interface ErrorsType {
  name: null | string;
  description: null | string;
  price: null | string;
}
