import { useState } from 'react';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import Icon from '@/components/ui/icon';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore(s => s.addItem);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(product.rating));

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-sm">Нет в наличии</span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
            <Icon name="Heart" size={16} className="text-white" />
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-white/40 mb-1 font-medium uppercase tracking-wide">{product.category}</div>
        <div className="text-sm font-semibold text-white mb-2 leading-snug flex-1">{product.name}</div>
        <div className="text-xs text-white/40 mb-2">{product.ageMin}–{product.ageMax} лет</div>

        <div className="flex items-center gap-1 mb-3">
          {stars.map((filled, i) => (
            <Icon key={i} name="Star" size={12} className={filled ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />
          ))}
          <span className="text-xs text-white/40 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-black text-white">{product.price.toLocaleString('ru')} ₽</span>
            {product.oldPrice && (
              <span className="text-xs text-white/30 line-through ml-2">{product.oldPrice.toLocaleString('ru')} ₽</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
              added
                ? 'bg-green-500 text-white scale-95'
                : product.inStock
                  ? 'btn-gradient text-white'
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
            }`}
          >
            {added ? <Icon name="Check" size={16} /> : <Icon name="Plus" size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
