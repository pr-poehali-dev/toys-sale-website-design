import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const REVIEWS = [
  { id: 1, name: 'Мария К.', rating: 5, date: '12 апр 2024', text: 'Заказывала конструктор для сына 8 лет — в восторге! Качество отличное, доставили за день. Буду заказывать ещё!', product: 'Конструктор «Космическая станция»', avatar: '👩' },
  { id: 2, name: 'Алексей П.', rating: 5, date: '5 апр 2024', text: 'Купил дочке куклу, она не расстаётся с ней уже неделю 😄 Упаковка красивая, всё целое. Магазин рекомендую!', product: 'Кукла «Принцесса Аврора»', avatar: '👨' },
  { id: 3, name: 'Ольга Д.', rating: 4, date: '28 мар 2024', text: 'Отличный выбор игрушек, всё безопасное и сертифицированное. Единственный минус — хотелось бы больше фото товаров.', product: 'Развивающий куб Монтессори', avatar: '👩' },
  { id: 4, name: 'Сергей В.', rating: 5, date: '20 мар 2024', text: 'Машинка сыну понравилась, он теперь гоняет её по всей квартире! Хорошая скорость, долгий заряд батарей.', product: 'Радиоуправляемый внедорожник', avatar: '👨' },
  { id: 5, name: 'Наталья М.', rating: 5, date: '15 мар 2024', text: 'Мишка «Тедди» просто прелесть! Мягкий, большой, ребёнок засыпает с ним каждую ночь. Спасибо ToyLand!', product: 'Плюшевый мишка «Тедди»', avatar: '👩' },
  { id: 6, name: 'Иван Ф.', rating: 4, date: '8 мар 2024', text: 'Хорошая игра для всей семьи. Играем каждые выходные. Карты качественные, правила понятные.', product: 'Настольная игра «Дикие джунгли»', avatar: '👨' },
];

export default function Reviews() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && text) {
      setSubmitted(true);
      setName('');
      setText('');
      setRating(5);
    }
  };

  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-2">Отзывы покупателей</h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="text-5xl font-black gradient-text">{avg}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={20} className={i <= Math.round(Number(avg)) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />)}
              </div>
              <div className="text-white/40 text-sm">{REVIEWS.length} отзывов</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REVIEWS.map(r => (
            <div key={r.id} className="glass-card rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{r.avatar}</div>
                <div className="flex-1">
                  <div className="font-bold text-white">{r.name}</div>
                  <div className="text-white/30 text-xs mt-0.5">{r.date}</div>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={14} className={i <= r.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />)}
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-3">{r.text}</p>
              <div className="text-xs text-pink-400/70 font-medium">📦 {r.product}</div>
            </div>
          ))}
        </div>

        {/* Add review */}
        <div className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Оставить отзыв</h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <div className="text-xl font-bold text-white mb-2">Спасибо за отзыв!</div>
              <div className="text-white/40">Мы опубликуем его после проверки</div>
              <button onClick={() => setSubmitted(false)} className="mt-6 btn-gradient px-6 py-3 rounded-xl font-bold text-white">
                Написать ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-white/60 text-sm font-semibold mb-2 block">Ваше имя</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-pink-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/60 text-sm font-semibold mb-2 block">Оценка</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(i => (
                    <button key={i} type="button" onClick={() => setRating(i)} className="p-1">
                      <Icon name="Star" size={28} className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-white/60 text-sm font-semibold mb-2 block">Ваш отзыв</label>
                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Расскажите о вашем опыте покупки..."
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-pink-500/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-gradient px-8 py-4 rounded-xl font-bold text-white w-fit flex items-center gap-2">
                <Icon name="Send" size={18} />
                Отправить отзыв
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
