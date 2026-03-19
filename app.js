import React, { useState } from 'react';
import { 
  BookOpen, Map, Info, ChevronDown, ChevronUp, 
  AlertCircle, Clock, ShoppingBag, Flag, Navigation,
  Coffee, Utensils, Zap, Camera, Train, Footprints,
  Heart, Sun, Star
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [openDay, setOpenDay] = useState(0);

  const itineraryData = [
    {
      date: '3/24 (二)',
      title: '抵達名古屋 ✨',
      summary: '20:50 降落，開啟熱血旅程！',
      checkpoints: [
        { time: '20:50', title: '抵達 NGO 機場', desc: '下飛機後跟著「名鐵」指標走。', icon: <Navigation size={18} /> },
        { time: '21:17', title: '搭乘 u-Sky', desc: '對號座最舒服，28分鐘到名古屋。', icon: <Train size={18} /> },
        { time: '22:00', title: 'APA Check-in', desc: '這幾天溫馨的家，行李放好。', icon: <Map size={18} /> },
      ],
      memo: '機場到市區很順，早點休息明天要走很多路！'
    },
    {
      date: '3/25 (三)',
      title: '市區慢活與大採買 🛍️',
      summary: '熱田神宮、大須觀音、Amica 備貨。',
      checkpoints: [
        { time: '10:00', title: '熱田神宮', desc: '森林芬多精，祈求比賽好天氣。', icon: <Sun size={18} /> },
        { time: '12:30', title: '大須商店街', desc: '邊吃邊逛，找找可愛的小店。', icon: <Utensils size={18} /> },
        { time: '15:30', title: 'Amica 補給', desc: '購入：能量飲、水、耐放麵包。', icon: <ShoppingBag size={18} /> },
        { time: '18:30', title: 'VIVAN 晚餐', desc: '這趟旅行的重頭戲（預約好了嗎？）。', icon: <Heart size={18} /> },
      ],
      memo: 'Amica 買的東西要分類裝好，這幾天賽道就靠它們了！'
    },
    {
      date: '3/26 (四)',
      title: '鈴鹿場勘：初見賽道 🏎️',
      summary: 'Pit Walk 必衝，周邊一定要先買！',
      checkpoints: [
        { time: '07:00', title: '名站出發', desc: '試跑方案 A：津車站轉乘法。', icon: <Train size={18} /> },
        { time: '09:00', title: 'Pit Lane Walk', desc: '看技師工作，這時人最少。', icon: <Flag size={18} /> },
        { time: '11:00', title: '搶購 Merchandise', desc: '衣服、帽子今天不買，週六會斷貨！', icon: <ShoppingBag size={18} /> },
        { time: '14:30', title: '撤退回名古屋', desc: '保留體力，下午去名古屋城散步。', icon: <Camera size={18} /> },
      ],
      memo: '今天主要是熟悉動線，不要讓腿太累，好戲在後頭。'
    },
    {
      date: '3/27 (五)',
      title: '練習賽：聽聽引擎聲 🏁',
      summary: 'FP1/FP2，確認最讚的觀賽視角。',
      checkpoints: [
        { time: '08:00', title: '柳橋市場早餐', desc: '新鮮海鮮丼，吃飽了才有力氣。', icon: <Utensils size={18} /> },
        { time: '11:30', title: 'F1 練習賽 FP1', desc: '在不同看台移動，感受震撼聲浪。', icon: <Zap size={18} /> },
        { time: '15:00', title: 'F1 練習賽 FP2', desc: '看車手挑戰極速彎道。', icon: <Flag size={18} /> },
        { time: '16:30', title: '回程 80 分鐘挑戰', desc: '走往白子站，沿途欣賞鈴鹿風景。', icon: <Footprints size={18} /> },
      ],
      memo: '走路去白子站會經過很多攤位，可以看看有沒有特別的紀念品。'
    },
    {
      date: '3/28 (六)',
      title: '排位賽：夢幻夜賽道 ✨',
      summary: 'Qualifying 決戰，Night Pit Walk 超美。',
      checkpoints: [
        { time: '15:00', title: 'F1 排位賽', desc: '全場屏息，見證竿位誕生的瞬間。', icon: <Zap size={18} /> },
        { time: '18:00', title: 'Night Pit Walk', desc: '燈光下的賽車像藝術品一樣。', icon: <Camera size={18} /> },
        { time: '20:00', title: '步行往白子站', desc: '晚風徐徐，跟著車迷人龍前進。', icon: <Footprints size={18} /> },
      ],
      memo: '晚上賽道會變涼，記得帶件小外套。'
    },
    {
      date: '3/29 (日)',
      title: '決戰正賽：燃燒鬥魂 🔥',
      summary: '正賽 14:00 起跑，衝線後的感動。',
      checkpoints: [
        { time: '12:00', title: '車手巡遊', desc: '舉起旗子大聲應援吧！', icon: <Heart size={18} /> },
        { time: '14:00', title: 'F1 正賽開始', desc: '53 圈的熱血，每一秒都別眨眼。', icon: <Flag size={18} /> },
        { time: '17:00', title: '東賽道漫步', desc: '走進賽道撿胎屑，這才是車迷！', icon: <Star size={18} /> },
        { time: '21:30', title: '名站燒肉慶功', desc: '辛苦了！大口吃肉犒賞自己。', icon: <Utensils size={18} /> },
      ],
      memo: '正賽後人潮最多，我們不趕時間，慢慢走回白子站。'
    },
    {
      date: '3/30 (一)',
      title: '重機與招財貓 🐱',
      summary: 'NAPS 名古屋、常滑散策。',
      checkpoints: [
        { time: '11:00', title: 'NAPS 名古屋', desc: '騎士的天堂，安全帽買起來！', icon: <ShoppingBag size={18} /> },
        { time: '14:30', title: '常滑招財貓通', desc: '看巨大貓咪，買陶瓷小禮物。', icon: <Camera size={18} /> },
        { time: '16:30', title: 'AEON 常滑', desc: '最後採買免稅物與藥妝。', icon: <ShoppingBag size={18} /> },
      ],
      memo: 'NAPS 買的東西要確認箱子裝得下喔！'
    },
    {
      date: '3/31 (二)',
      title: '回家：下次見！ 👋',
      summary: '機場蝦餅買好買滿。',
      checkpoints: [
        { time: '07:30', title: 'APA 退房', desc: '檢查有沒有遺忘的東西。', icon: <Map size={18} /> },
        { time: '08:30', title: '蝦餅店掃貨', desc: 'えびせんべいの里，必買！', icon: <ShoppingBag size={18} /> },
        { time: '09:55', title: '起飛回台灣', desc: '帶著滿滿回憶回家。', icon: <Navigation size={18} /> },
      ],
      memo: '蝦餅可以手提上機，記得預留空間。'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#4a4a4a] font-sans pb-24">
      {/* Header - Washi Tape Style */}
      <header className="bg-[#ffeb3b] pt-10 pb-6 px-6 relative shadow-sm border-b-2 border-dashed border-[#dcdcdc]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-blue-400/30 -mt-2 rotate-1 border-b border-blue-400/50"></div>
        <h1 className="text-3xl font-black tracking-tight text-[#333]">鈴鹿賽戰手帳</h1>
        <p className="text-sm font-medium mt-1 text-[#666] flex items-center gap-1 italic">
          <Star size={14} className="text-orange-400 fill-current"/> Nagoya & Suzuka 2026
        </p>
      </header>

      {/* Tabs Navigation */}
      <nav className="flex sticky top-0 bg-[#fdfbf7]/90 backdrop-blur-sm border-b border-neutral-200 z-50">
        {[
          { id: 'itinerary', label: '旅行日記', icon: <BookOpen size={20}/> },
          { id: 'transport', label: '如何去賽場', icon: <Map size={20}/> },
          { id: 'backup', label: '小筆記', icon: <Info size={20}/> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center py-4 transition-all ${activeTab === tab.id ? 'text-blue-500 scale-105 font-bold' : 'text-neutral-400'}`}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="p-6 max-w-lg mx-auto">
        
        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            {itineraryData.map((day, idx) => (
              <div key={idx} className="relative">
                {/* Hand-drawn look card */}
                <div 
                  className={`bg-white rounded-[2rem] border-2 border-[#e0e0e0] overflow-hidden shadow-sm transition-all ${openDay === idx ? 'ring-2 ring-blue-200 shadow-lg' : ''}`}
                  style={{ borderRadius: '25px 10px 25px 10px' }}
                >
                  <button 
                    onClick={() => setOpenDay(openDay === idx ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${openDay === idx ? 'bg-blue-500 text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                        {day.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-neutral-400">{day.date}</div>
                        <div className="font-black text-xl text-[#333]">{day.title}</div>
                      </div>
                    </div>
                    {openDay === idx ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-neutral-300" />}
                  </button>

                  {openDay === idx && (
                    <div className="px-6 pb-6 animate-in fade-in zoom-in-95 duration-200">
                      {/* Timeline */}
                      <div className="space-y-6 relative border-l-2 border-dashed border-blue-200 ml-3 pl-8">
                        {day.checkpoints.map((cp, i) => (
                          <div key={i} className="relative">
                            {/* Hand-drawn bullet */}
                            <div className="absolute -left-[43px] top-1 w-6 h-6 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            </div>
                            <div className="bg-blue-50/50 p-3 rounded-2xl border border-blue-100">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-black text-blue-600 text-sm">{cp.time}</span>
                                <span className="font-bold text-[#444]">{cp.title}</span>
                              </div>
                              <p className="text-sm text-neutral-500 leading-relaxed">{cp.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Memo Area */}
                      <div className="mt-8 bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-200 relative">
                        <div className="absolute -top-3 left-4 bg-yellow-200 px-3 py-1 rounded-full text-[10px] font-black text-yellow-700 uppercase tracking-widest">Memo</div>
                        <p className="text-sm text-yellow-800 italic leading-relaxed">
                           " {day.memo} "
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="space-y-8">
            {/* Critical Info Sticker */}
            <div className="bg-red-50 border-2 border-dashed border-red-200 rounded-3xl p-6 relative">
              <div className="absolute -top-3 -left-2 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-black -rotate-3">必看！</div>
              <h4 className="font-black text-red-600 text-lg mb-2">伊勢鐵道不能刷卡喔！</h4>
              <p className="text-sm text-red-700 leading-relaxed font-medium">
                津車站到稻生這段，<span className="bg-red-200 px-1">不可以刷悠遊卡/Suica</span>。
              </p>
              <p className="text-xs text-red-500/80 mt-2 italic">
                請在津車站找機器買「實體來回票」，不然回程會很麻煩喔！
              </p>
            </div>

            {/* Travel Steps - Polaroid Style */}
            <div className="space-y-4">
              <h3 className="font-black text-xl ml-2 mb-4 text-blue-600 flex items-center gap-2">去程方案 A <Navigation size={20}/></h3>
              {[
                { step: '1', title: '名站 ➡️ 津 (Tsu)', desc: '近鐵特急對號座，保證有位。' },
                { step: '2', title: '津 ➡️ 稻生站', desc: '轉伊勢鐵道，記得買實體票。' },
                { step: '3', title: '散步到賽場', desc: '稻生站走 20 分鐘抵達。' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border-2 border-neutral-100 shadow-sm flex gap-4 items-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                  <div>
                    <div className="font-black text-base">{item.title}</div>
                    <p className="text-xs text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timetable Sticker */}
            <div className="bg-white border-2 border-[#e0e0e0] rounded-[2.5rem] p-6 shadow-sm">
              <h3 className="font-black text-lg text-[#333] mb-4 text-center">🚌 白子站接駁車時間</h3>
              <div className="space-y-3">
                {[
                  { date: '3/26 (四)', back: '18:00' },
                  { date: '3/27 (五)', back: '18:00' },
                  { date: '3/28 (六)', back: '20:00' },
                  { date: '3/29 (日)', back: '19:30' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-dashed border-neutral-100">
                    <span className="text-sm font-bold">{row.date}</span>
                    <span className="text-sm font-black text-red-500">末班車 {row.back}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-neutral-400 mt-4 italic text-center">※ 六日建議直接走路回白子站比較快喔！</p>
            </div>
          </div>
        )}

        {activeTab === 'backup' && (
          <div className="space-y-6">
            {/* NAPS Section */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShoppingBag size={80} />
              </div>
              <h3 className="font-black text-blue-600 text-xl mb-4">重機部品聖地：NAPS</h3>
              <p className="text-sm text-blue-700 mb-4 font-bold">名鐵常滑線「柴田站」走路 15 分鐘。</p>
              <div className="bg-white/80 p-4 rounded-2xl text-xs space-y-2 text-blue-900/80">
                <p>• 建議：跟常滑 AEON 排在同一天。</p>
                <p>• 重點：日本安全帽款式齊全，值得一看。</p>
              </div>
            </div>

            {/* Checklist - Hand drawn style */}
            <div className="bg-white border-2 border-[#e0e0e0] rounded-[2rem] p-6">
              <h3 className="font-black text-xl mb-6 flex items-center gap-2">賽道包包檢查點 ✨</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '全套雨衣', '行動電源', 
                  '大包濕紙巾', '防曬乳', 
                  '果凍能量飲', '舒適運動鞋',
                  '垃圾袋', '小外套'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-neutral-600">
                    <div className="w-4 h-4 border-2 border-blue-400 rounded flex items-center justify-center text-[10px] text-blue-500">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Rainy day note */}
            <div className="bg-orange-50 border-2 border-orange-100 rounded-3xl p-6">
              <h3 className="font-black text-orange-600 text-lg mb-2">下雨了怎麼辦？</h3>
              <p className="text-sm text-orange-800 leading-relaxed">
                賽場不能撐傘，一定要穿雨衣！如果雨太大比賽停了，可以改去「豐田產業技術紀念館」，那是室內的喔。
              </p>
            </div>
          </div>
        )}

      </main>

      {/* Decorative Washi Tape Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#fdfbf7]/80 backdrop-blur-sm pb-8 pt-2 px-6 flex justify-center border-t border-neutral-100">
        <div className="w-full max-w-xs h-3 bg-red-400/20 rounded-full overflow-hidden flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-red-400/40' : 'transparent'}`}></div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
