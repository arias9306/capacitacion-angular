import { Book } from './book';

export class Author {
  name: string;
  email: string;
  address: string;
  birthdate: Date;
  gender: string;
  books: Book[];
}
