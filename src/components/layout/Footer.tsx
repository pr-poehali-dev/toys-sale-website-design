import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-black gradient-text mb-3" style={{ fontFamily: 'Nunito' }}>🪀 ToyLand</div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Лучшие игрушки для детей всех возрастов. Качество, безопасность и радость — наши главные принципы.
          </p>
        </div>
        <div>
          <div className="font-bold text-white mb-4">Разделы</div>
          <div className="flex flex-col gap-2">
            {[['/', 'Главная'], ['/catalog', 'Каталог'], ['/about', 'О магазине'], ['/reviews', 'Отзывы']].map(([to, label]) => (
              <Link key={to} to={to} className="text-white/50 hover:text-white text-sm transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold text-white mb-4">Контакты</div>
          <div className="flex flex-col gap-2 text-white/50 text-sm">
            <span>📞 +7 (800) 555-12-34</span>
            <span>✉️ hello@toyland.ru</span>
            <span>📍 Москва, ул. Игрушечная, 1</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-white/30 text-sm">
        © 2024 ToyLand. Все права защищены.
      </div>
    </footer>
  );
}
