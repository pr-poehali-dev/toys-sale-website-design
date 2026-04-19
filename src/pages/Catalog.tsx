import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/catalog/ProductCard';
import Icon from '@/components/ui/icon';
import { PRODUCTS, CATEGORIES } from '@/data/products';

const SORT_OPTIONS = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price_asc', label: 'Сначала дешевле' },
  { value: 'price_desc', label: 'Сначала дороже' },
  { value: 'rating', label: 'По рейтингу' },
];

const AGE_GROUPS = [
  { label: 'Все возрасты', min: 0, max: 99 },
  { label: 'До 3 лет', min: 0, max: 3 },
  { label: '3–6 лет', min: 3, max: 6 },
  { label: '6–10 лет', min: 6, max: 10 },
  { label: '10–14 лет', min: 10, max: 14 },
];

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const initCat = searchParams.get('cat') || 'Все';

  const [category, setCategory] = useState(initCat);
  const [sort, setSort] = useState('popular');
  const [ageGroup, setAgeGroup] = useState(0);
  const [priceMax, setPriceMax] = useState(10000);
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== 'Все') list = list.filter(p => p.category === category);
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    list = list.filter(p => p.price <= priceMax);
    const ag = AGE_GROUPS[ageGroup];
    list = list.filter(p => p.ageMin <= ag.max && p.ageMax >= ag.min);

    if (sort === 'price_asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

    return list;
  }, [category, sort, ageGroup, priceMax, search]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Каталог игрушек</h1>
        <p className="text-white/40 mb-8">Найдено {filtered.length} товаров</p>

        {/* Search + sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Поиск игрушек..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 outline-none focus:border-pink-500/50 transition-colors"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500/50 transition-colors"
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value} className="bg-gray-900">{o.label}</option>)}
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all font-semibold ${showFilters ? 'border-pink-500 text-pink-400 bg-pink-500/10' : 'border-white/10 text-white/60 hover:border-white/20'}`}
          >
            <Icon name="SlidersHorizontal" size={18} />
            Фильтры
          </button>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="glass-card rounded-2xl p-6 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wide">Возраст</div>
              <div className="flex flex-col gap-2">
                {AGE_GROUPS.map((ag, i) => (
                  <button
                    key={ag.label}
                    onClick={() => setAgeGroup(i)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${ageGroup === i ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    {ag.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wide">Цена до {priceMax.toLocaleString('ru')} ₽</div>
              <input
                type="range"
                min={500}
                max={10000}
                step={100}
                value={priceMax}
                onChange={e => setPriceMax(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>500 ₽</span>
                <span>10 000 ₽</span>
              </div>
            </div>
            <div>
              <div className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wide">Категория</div>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${category === cat ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-8 pb-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all ${category === cat ? 'btn-gradient text-white shadow-lg' : 'glass-card text-white/60 hover:text-white border border-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/30">
            <div className="text-6xl mb-4">🔍</div>
            <div className="text-xl font-bold mb-2">Ничего не найдено</div>
            <div className="text-sm">Попробуй изменить фильтры</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
