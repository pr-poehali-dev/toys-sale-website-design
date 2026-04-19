export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  ageMin: number;
  ageMax: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  popular?: boolean;
  inStock: boolean;
}

export const CATEGORIES = ['Все', 'Конструкторы', 'Куклы', 'Машинки', 'Настольные игры', 'Мягкие игрушки', 'Развивашки'];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Конструктор «Космическая станция»', price: 3490, oldPrice: 4200, category: 'Конструкторы', ageMin: 7, ageMax: 14, rating: 4.9, reviews: 342, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/f7d80b7d-fa62-4d92-8913-2c78c2e62a17.jpg', badge: 'Хит', popular: true, inStock: true },
  { id: 2, name: 'Кукла «Принцесса Аврора» с нарядами', price: 1890, category: 'Куклы', ageMin: 3, ageMax: 10, rating: 4.7, reviews: 218, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/42c9cfde-b6a7-451f-8381-60800dc21d66.jpg', popular: true, inStock: true },
  { id: 3, name: 'Радиоуправляемый внедорожник', price: 5290, oldPrice: 6500, category: 'Машинки', ageMin: 6, ageMax: 14, rating: 4.8, reviews: 157, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/82a2788b-6c82-471a-a3dc-a9649e8b2d30.jpg', badge: 'Новинка', popular: true, inStock: true },
  { id: 4, name: 'Настольная игра «Дикие джунгли»', price: 1290, category: 'Настольные игры', ageMin: 5, ageMax: 12, rating: 4.6, reviews: 89, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/f7d80b7d-fa62-4d92-8913-2c78c2e62a17.jpg', inStock: true },
  { id: 5, name: 'Плюшевый мишка «Тедди» 60см', price: 2190, category: 'Мягкие игрушки', ageMin: 0, ageMax: 12, rating: 4.9, reviews: 412, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/42c9cfde-b6a7-451f-8381-60800dc21d66.jpg', badge: 'Хит', popular: true, inStock: true },
  { id: 6, name: 'Развивающий куб Монтессори', price: 990, category: 'Развивашки', ageMin: 1, ageMax: 4, rating: 4.5, reviews: 203, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/82a2788b-6c82-471a-a3dc-a9649e8b2d30.jpg', inStock: true },
  { id: 7, name: 'LEGO City — Пожарная станция', price: 4890, oldPrice: 5900, category: 'Конструкторы', ageMin: 6, ageMax: 99, rating: 4.8, reviews: 276, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/f7d80b7d-fa62-4d92-8913-2c78c2e62a17.jpg', badge: 'Скидка', inStock: true },
  { id: 8, name: 'Железная дорога с управлением', price: 7990, category: 'Машинки', ageMin: 4, ageMax: 10, rating: 4.7, reviews: 134, image: 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/82a2788b-6c82-471a-a3dc-a9649e8b2d30.jpg', badge: 'Новинка', inStock: false },
];
