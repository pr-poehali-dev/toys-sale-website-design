import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const ORDERS = [
  { id: '#TL-1042', date: '12 апр 2024', status: 'Доставлен', total: 3490, items: 1 },
  { id: '#TL-0987', date: '5 мар 2024', status: 'Доставлен', total: 6180, items: 3 },
  { id: '#TL-0834', date: '18 фев 2024', status: 'Доставлен', total: 990, items: 1 },
];

const STATUS_COLORS: Record<string, string> = {
  'Доставлен': 'text-green-400 bg-green-400/10',
  'В пути': 'text-blue-400 bg-blue-400/10',
  'Обрабатывается': 'text-yellow-400 bg-yellow-400/10',
};

export default function Profile() {
  const [tab, setTab] = useState<'orders' | 'settings'>('orders');
  const [name, setName] = useState('Мария Иванова');
  const [email, setEmail] = useState('maria@example.com');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 px-4 max-w-4xl mx-auto">

        {/* Profile header */}
        <div className="glass-card rounded-3xl p-8 mb-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-4xl flex-shrink-0">
            👩
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-black text-white">{name}</h1>
            <div className="text-white/40 text-sm mt-1">{email}</div>
            <div className="flex items-center gap-4 mt-3 justify-center sm:justify-start">
              <div className="text-center">
                <div className="font-black text-white">{ORDERS.length}</div>
                <div className="text-white/30 text-xs">заказа</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="font-black gradient-text-warm">320</div>
                <div className="text-white/30 text-xs">бонусов</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['orders', 'settings'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${tab === t ? 'btn-gradient text-white' : 'glass-card text-white/60 hover:text-white border border-white/10'}`}
            >
              {t === 'orders' ? 'Мои заказы' : 'Настройки'}
            </button>
          ))}
        </div>

        {tab === 'orders' ? (
          <div className="flex flex-col gap-4">
            {ORDERS.map(o => (
              <div key={o.id} className="glass-card rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-black text-white">{o.id}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${STATUS_COLORS[o.status]}`}>{o.status}</span>
                  </div>
                  <div className="text-white/40 text-sm">{o.date} · {o.items} товар</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-white text-lg">{o.total.toLocaleString('ru')} ₽</div>
                  <button className="text-pink-400 text-xs hover:text-pink-300 transition-colors mt-1 flex items-center gap-1">
                    Детали <Icon name="ChevronRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="text-xl font-black text-white mb-2">Личные данные</h2>
            <div>
              <label className="text-white/60 text-sm font-semibold mb-2 block">Имя</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-white/60 text-sm font-semibold mb-2 block">Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500/50 transition-colors"
              />
            </div>
            <button
              onClick={handleSave}
              className={`w-fit px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${saved ? 'bg-green-500 text-white' : 'btn-gradient text-white'}`}
            >
              <Icon name={saved ? 'Check' : 'Save'} size={18} />
              {saved ? 'Сохранено!' : 'Сохранить'}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
