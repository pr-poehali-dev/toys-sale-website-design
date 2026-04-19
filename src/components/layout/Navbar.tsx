import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useCartStore } from '@/store/cartStore';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/about', label: 'О магазине' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const count = useCartStore(s => s.count());

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black gradient-text" style={{ fontFamily: 'Nunito' }}>🪀 ToyLand</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                location.pathname === l.to
                  ? 'bg-white/10 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/profile" className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
            <Icon name="User" size={20} />
          </Link>
          <Link to="/cart" className="relative p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
            <Icon name="ShoppingCart" size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === l.to ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
