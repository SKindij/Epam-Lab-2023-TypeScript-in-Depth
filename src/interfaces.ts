// src/interfaces.ts
import { Category } from './enums';

interface Book {
  id:number;
  title:string;
  author:string;
  available:boolean;
  category:Category;
  year?: number;
  copies?: number,
  pages?: number
};



export { Book };