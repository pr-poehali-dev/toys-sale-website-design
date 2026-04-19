import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/catalog/ProductCard';
import Icon from '@/components/ui/icon';
import { PRODUCTS } from '@/data/products';

const HERO_IMG = 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/82a2788b-6c82-471a-a3dc-a9649e8b2d30.jpg';
const ABOUT_IMG = 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/42c9cfde-b6a7-451f-8381-60800dc21d66.jpg';

const FEATURES = [
  { icon: 'ShieldCheck', label: 'Сертифицировано', desc: 'Все игрушки прошли контроль качества' },
  { icon: 'Truck', label: 'Быстрая доставка', desc: 'По Москве — 1 день, по России — 3-5 дней' },
  { icon: 'RotateCcw', label: 'Обмен и возврат', desc: '30 дней на обмен без вопросов' },
  { icon: 'Headphones', label: 'Поддержка 24/7', desc: 'Всегда рядом, если нужна помощь' },
];

const CATEGORY_LIST = [
  { emoji: '🧱', label: 'Конструкторы', color: 'from-blue-500 to-purple-600' },
  { emoji: '🪆', label: 'Куклы', color: 'from-pink-500 to-rose-600' },
  { emoji: '🚗', label: 'Машинки', color: 'from-orange-500 to-yellow-500' },
  { emoji: '🎲', label: 'Настольные игры', color: 'from-green-500 to-teal-600' },
  { emoji: '🧸', label: 'Мягкие игрушки', color: 'from-amber-500 to-orange-600' },
  { emoji: '🔮', label: 'Развивашки', color: 'from-violet-500 to-purple-600' },
];

export default function Index() {
  const popular = PRODUCTS.filter(p => p.popular).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/60 to-pink-900/80" />
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(120,75,160,0.4) 0%, transparent 70%)' }} />
        </div>

        <div className="absolute top-32 right-[10%] text-6xl animate-float" style={{ animationDelay: '0s' }}>🎮</div>
        <div className="absolute top-48 right-[25%] text-4xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-40 right-[15%] text-5xl animate-float" style={{ animationDelay: '2s' }}>🚀</div>
        <div className="absolute top-1/3 left-[5%] text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🌈</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-semibold text-white/80 mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Более 5000 игрушек в наличии
            </div>
            <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6" style={{ fontFamily: 'Nunito' }}>
              Магия{' '}
              <span className="gradient-text">детства</span>{' '}
              в каждой игрушке
            </h1>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Самые яркие, безопасные и развивающие игрушки для детей от 0 до 14 лет. Подберём идеальный подарок!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="btn-gradient px-8 py-4 rounded-2xl font-bold text-white text-lg flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
                Смотреть каталог
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-2xl font-bold text-white text-lg glass-card border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                <Icon name="Play" size={20} />
                О нас
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div>
                <div className="text-3xl font-black gradient-text-warm">5000+</div>
                <div className="text-white/40 text-sm">товаров</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-black gradient-text-warm">12k+</div>
                <div className="text-white/40 text-sm">покупателей</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-black gradient-text-warm">4.9★</div>
                <div className="text-white/40 text-sm">рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-2">Категории</h2>
        <p className="text-white/40 mb-10">Найди игрушку для любого возраста</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORY_LIST.map(cat => (
            <Link
              key={cat.label}
              to={`/catalog?cat=${encodeURIComponent(cat.label)}`}
              className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {cat.emoji}
              </div>
              <span className="text-white text-sm font-semibold text-center">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-white">Хиты продаж</h2>
            <p className="text-white/40 mt-1">Самые популярные игрушки этого месяца</p>
          </div>
          <Link to="/catalog" className="text-sm font-semibold text-white/60 hover:text-white flex items-center gap-1 transition-colors">
            Все товары <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* About banner */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest mb-3">О нас</span>
            <h2 className="text-3xl font-black text-white mb-4">10 лет радости и счастливых детей</h2>
            <p className="text-white/50 mb-6 leading-relaxed">
              Мы создали ToyLand с одной мечтой — делать детей счастливее. Каждая игрушка в нашем магазине тщательно отобрана, сертифицирована и проверена на безопасность.
            </p>
            <Link to="/about" className="btn-gradient px-6 py-3 rounded-xl font-bold text-white w-fit flex items-center gap-2">
              Узнать больше <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="h-64 md:h-auto overflow-hidden">
            <img src={ABOUT_IMG} alt="О магазине" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map(f => (
            <div key={f.label} className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Icon name={f.icon} size={22} className="text-white" />
              </div>
              <div className="font-bold text-white">{f.label}</div>
              <div className="text-white/40 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}