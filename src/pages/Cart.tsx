import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { useCartStore } from '@/store/cartStore';

export default function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-8">Корзина</h1>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-black text-white mb-3">Корзина пуста</h2>
            <p className="text-white/40 mb-8">Добавь товары из каталога</p>
            <Link to="/catalog" className="btn-gradient px-8 py-4 rounded-2xl font-bold text-white inline-flex items-center gap-2">
              <Icon name="Sparkles" size={20} />
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="glass-card rounded-2xl p-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm leading-snug mb-1">{item.name}</div>
                    <div className="text-white/40 text-xs">{item.category}</div>
                    <div className="text-pink-400 font-black mt-1">{(item.price * item.quantity).toLocaleString('ru')} ₽</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="text-white font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center text-red-400 transition-all ml-1"
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={clearCart}
                className="text-white/30 hover:text-red-400 text-sm flex items-center gap-2 mt-2 transition-colors"
              >
                <Icon name="Trash2" size={16} />
                Очистить корзину
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6 h-fit">
              <div className="text-white font-black text-xl mb-6">Итого</div>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Товары ({items.reduce((s, i) => s + i.quantity, 0)} шт.)</span>
                  <span>{total().toLocaleString('ru')} ₽</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Доставка</span>
                  <span className="text-green-400">Бесплатно</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between font-black text-white text-lg">
                  <span>К оплате</span>
                  <span className="gradient-text">{total().toLocaleString('ru')} ₽</span>
                </div>
              </div>
              <button className="w-full btn-gradient py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2">
                <Icon name="CreditCard" size={20} />
                Оформить заказ
              </button>
              <Link to="/catalog" className="block text-center text-white/40 hover:text-white text-sm mt-4 transition-colors">
                Продолжить покупки
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
