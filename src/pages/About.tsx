import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const ABOUT_IMG = 'https://cdn.poehali.dev/projects/f518f3ad-e250-4353-8d74-fd31ac31daf2/files/42c9cfde-b6a7-451f-8381-60800dc21d66.jpg';

const TEAM = [
  { name: 'Алина Морозова', role: 'Основатель', emoji: '👩‍💼' },
  { name: 'Дмитрий Ковалёв', role: 'Директор по продажам', emoji: '👨‍💼' },
  { name: 'Мария Лебедева', role: 'Эксперт по игрушкам', emoji: '👩‍🔬' },
  { name: 'Александр Петров', role: 'Доставка и логистика', emoji: '🚚' },
];

const VALUES = [
  { icon: 'Heart', title: 'Забота о детях', desc: 'Каждая игрушка отбирается с учётом детской психологии и развития' },
  { icon: 'ShieldCheck', title: 'Безопасность', desc: 'Все товары сертифицированы и соответствуют ГОСТ стандартам' },
  { icon: 'Star', title: 'Качество', desc: 'Только проверенные бренды и надёжные производители' },
  { icon: 'Smile', title: 'Счастье', desc: 'Наша цель — улыбки детей и довольные родители' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(120,75,160,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest mb-3 block">О нас</span>
          <h1 className="text-5xl font-black text-white mb-6">
            Мы делаем <span className="gradient-text">детство</span> ярче
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            ToyLand — это больше чем магазин игрушек. Это место, где мечты становятся реальностью, а каждая покупка приносит радость всей семье.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="h-72 md:h-auto overflow-hidden">
            <img src={ABOUT_IMG} alt="История магазина" className="w-full h-full object-cover" />
          </div>
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-white mb-4">Наша история</h2>
            <p className="text-white/50 mb-4 leading-relaxed">
              ToyLand был основан в 2014 году молодой мамой Алиной, которая не могла найти качественные и безопасные игрушки для своей дочери. Так родилась идея создать магазин, где каждый товар проходит строгий отбор.
            </p>
            <p className="text-white/50 leading-relaxed">
              Сегодня мы — одна из крупнейших сетей магазинов игрушек в России, но наши принципы остались прежними: качество, безопасность и счастье детей.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-black text-white text-center mb-12">Наши ценности</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {VALUES.map(v => (
            <div key={v.title} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Icon name={v.icon} size={26} className="text-white" />
              </div>
              <div className="font-black text-white mb-2">{v.title}</div>
              <div className="text-white/40 text-sm leading-relaxed">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <div className="glass-card rounded-3xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[['10+', 'лет на рынке'], ['5000+', 'игрушек'], ['12 000+', 'покупателей'], ['4.9★', 'средний рейтинг']].map(([val, label]) => (
            <div key={label}>
              <div className="text-4xl font-black gradient-text mb-2">{val}</div>
              <div className="text-white/40 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-black text-white text-center mb-12">Наша команда</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map(m => (
            <div key={m.name} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">{m.emoji}</div>
              <div className="font-black text-white mb-1">{m.name}</div>
              <div className="text-white/40 text-sm">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
