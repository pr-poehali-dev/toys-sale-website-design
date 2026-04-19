import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const CONTACTS = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (800) 555-12-34', sub: 'Бесплатно по России' },
  { icon: 'Mail', label: 'Email', value: 'hello@toyland.ru', sub: 'Ответим в течение часа' },
  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Игрушечная, 1', sub: 'Пн–Вс: 10:00–21:00' },
  { icon: 'Clock', label: 'Режим работы', value: '10:00 – 21:00', sub: 'Без выходных' },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-2">Контакты</h1>
          <p className="text-white/40">Всегда рады помочь вам</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {CONTACTS.map(c => (
            <div key={c.label} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Icon name={c.icon} size={22} className="text-white" />
              </div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">{c.label}</div>
              <div className="text-white font-bold text-sm mb-1">{c.value}</div>
              <div className="text-white/30 text-xs">{c.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Напишите нам</h2>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <div className="text-xl font-bold text-white mb-2">Сообщение отправлено!</div>
                <div className="text-white/40 mb-6">Мы ответим вам в течение часа</div>
                <button onClick={() => setSent(false)} className="btn-gradient px-6 py-3 rounded-xl font-bold text-white">
                  Написать ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-white/60 text-sm font-semibold mb-2 block">Имя</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-pink-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm font-semibold mb-2 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-pink-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm font-semibold mb-2 block">Сообщение</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Чем мы можем помочь?"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-pink-500/50 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-gradient px-8 py-4 rounded-xl font-bold text-white flex items-center gap-2 w-fit">
                  <Icon name="Send" size={18} />
                  Отправить
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder */}
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col">
            <div className="flex-1 bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center min-h-64 relative">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px)' }} />
              <div className="text-center z-10">
                <div className="text-6xl mb-4 animate-float">📍</div>
                <div className="text-white font-bold">Москва, ул. Игрушечная, 1</div>
                <div className="text-white/40 text-sm mt-1">ТЦ «Детский мир», 2 этаж</div>
              </div>
            </div>
            <div className="p-6">
              <div className="font-bold text-white mb-3">Как добраться</div>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <div className="flex items-center gap-2"><span>🚇</span> м. Охотный ряд, 5 мин пешком</div>
                <div className="flex items-center gap-2"><span>🚌</span> Автобусы №156, 200, 630</div>
                <div className="flex items-center gap-2"><span>🅿️</span> Парковка на 300 мест рядом</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
