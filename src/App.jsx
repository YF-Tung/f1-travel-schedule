import React, { useState } from 'react';
import { 
  BookOpen, Map, Info, ChevronDown, ChevronUp, 
  AlertCircle, Clock, ShoppingBag, Flag, Navigation,
  Coffee, Utensils, Zap, Camera, Train, Footprints,
  Heart, Sun, Star, Ticket
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
        { time: '14:30', title: '回程：接駁車', desc: '今日人潮較少，可輕鬆排隊搭接駁車回白子站。', icon: <Navigation size={18} /> },
      ],
      memo: '今天主要是熟悉動線，不要讓腿太累，週四撤退最容易。'
    },
    {
      date: '3/27 (五)',
      title: '練習賽：聽聽引擎聲 🏁',
      summary: 'FP1/FP2，確認最讚的觀賽視角。',
      checkpoints: [
        { time: '08:00', title: '柳橋市場早餐', desc: '新鮮海鮮丼，吃飽了才有力氣。', icon: <Utensils size={18} /> },
        { time: '11:30', title: 'F1 練習賽 FP1', desc: '在不同看台移動，感受震撼聲浪。', icon: <Zap size={18} /> },
        { time: '15:00', title: 'F1 練習賽 FP2', desc: '看車手挑戰極速彎道。', icon: <Flag size={18} /> },
        { time: '16:30', title: '回程：接駁車', desc: '週五人潮尚可控，建議搭接駁車保留戰力。', icon: <Navigation size={18} /> },
      ],
      memo: '練習賽結束後若不急，可以在賽場多待一下避開首波排隊。'
    },
    {
      date: '3/28 (六)',
      title: '排位賽：夢幻夜賽道 ✨',
      summary: 'Qualifying 決戰，Night Pit Walk 超美。',
      checkpoints: [
        { time: '15:00', title: 'F1 排位賽', desc: '全場屏息，見證竿位誕生的瞬間。', icon: <Zap size={18} /> },
        { time: '18:00', title: 'Night Pit Walk', desc: '燈光下的賽車像藝術品一樣。', icon: <Camera size={18} /> },
        { time: '20:00', title: '回程：步行挑戰', desc: '今日地獄排隊預警！啟動 80 分鐘步行模式往白子站。', icon: <Footprints size={18} /> },
      ],
      memo: '六日這兩天回程絕對不排接駁車，用走的比較快！'
    },
    {
      date: '3/29 (日)',
      title: '決戰正賽：燃燒鬥魂 🔥',
      summary: '正賽 14:00 起跑，衝線後的感動。',
      checkpoints: [
        { time: '12:00', title: '車手巡遊', desc: '舉起旗子大聲應援吧！', icon: <Heart size={18} /> },
        { time: '14:00', title: 'F1 正賽開始', desc: '53 圈的熱血，每一秒都別眨眼。', icon: <Flag size={18} /> },
        { time: '17:00', title: '東賽道漫步', desc: '走進賽道撿胎屑，這才是車迷！', icon: <Star size={18} /> },
        { time: '18:30', title: '回程：最終步行', desc: '最後一次 80 分鐘大行軍，往白子站出發。', icon: <Footprints size={18} /> },
      ],
      memo: '正賽後是最大地獄！絕對不要在此時去排接駁車，直接走去白子。'
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
              <h4 className="font-black text-red-600 text-lg mb-2 flex items-center gap-2">
                <AlertCircle size={20}/> 伊勢鐵道不能刷卡！
              </h4>
              <p className="text-sm text-red-700 leading-relaxed font-black">
                津車站 ↔ 鈴鹿稻生 這段 <span className="underline decoration-red-500">不收任何交通 IC 卡</span> (Suica / PASMO 等)。
              </p>
              <div className="mt-3 p-3 bg-white/60 rounded-xl border border-red-100">
                <p className="text-xs text-red-600 font-bold italic">
                  實戰建議：在津車站轉乘口，請尋找櫃檯或售票機購買「實體來回票」，避免回程被困在稻生站月台！
                </p>
              </div>
            </div>

            {/* Departure Method A */}
            <div className="bg-white p-6 rounded-[2.5rem] border-2 border-[#e0e0e0] shadow-sm">
              <h3 className="font-black text-xl mb-4 text-blue-600 flex items-center gap-2">去程最佳解：方案 A</h3>
              <p className="text-xs text-neutral-400 mb-4 italic">目標：避開名古屋直達鈴鹿的驚人排隊人潮</p>
              <div className="space-y-4">
                {[
                  { step: '1', title: '名站 ➡️ 津 (Tsu)', desc: '搭近鐵特急 (45-55分)。強烈建議官網先預訂對號座。' },
                  { step: '2', title: '津 ➡️ 鈴鹿稻生', desc: '轉乘「伊勢鐵道」(15-20分)。記得買實體票！' },
                  { step: '3', title: '步行抵達', desc: '從稻生站走路 20 分鐘即可進場。' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                    <div>
                      <div className="font-black text-base">{item.title}</div>
                      <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Return Method B */}
            <div className="bg-white p-6 rounded-[2.5rem] border-2 border-[#e0e0e0] shadow-sm">
              <h3 className="font-black text-xl mb-4 text-orange-600 flex items-center gap-2">回程建議：方案 B</h3>
              <p className="text-xs text-neutral-400 mb-4 italic">目標：六日絕對不排接駁車，用走的比較快</p>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                  <div className="font-black text-sm text-orange-700 mb-1 flex items-center gap-1">
                    <Footprints size={14}/> 步行 80 分鐘至白子站
                  </div>
                  <p className="text-xs text-orange-600 leading-relaxed">
                    賽後接駁車排隊需 1.5 - 2 小時。與其罰站，不如慢慢走去白子站，沿途還有熱鬧攤位。
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <div className="font-black text-sm text-blue-700 mb-1 flex items-center gap-1">
                    <Ticket size={14}/> 近鐵特急預約
                  </div>
                  <p className="text-xs text-blue-600 leading-relaxed">
                    回程（白子 ➡️ 名古屋）請務必提早在官網搶票，否則只能一路站回名古屋。
                  </p>
                </div>
              </div>
            </div>

            {/* Timetable Sticker */}
            <div className="bg-white border-2 border-[#e0e0e0] rounded-[2.5rem] p-6 shadow-sm relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
                 <Clock size={120} />
               </div>
              <h3 className="font-black text-lg text-[#333] mb-4 text-center">🚌 白子站接駁車時間 (2026)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b-2 border-neutral-100">
                      <th className="py-2 text-neutral-400">日期</th>
                      <th className="py-2">去程 (白子發)</th>
                      <th className="py-2">回程 (賽場發)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '3/26 (四)', go: '07:00-12:00', back: '12:30-18:00' },
                      { date: '3/27 (五)', go: '06:30-12:00', back: '15:00-18:00' },
                      { date: '3/28 (六)', go: '06:30-13:00', back: '15:00-20:00' },
                      { date: '3/29 (日)', go: '06:00-13:00', back: '15:00-19:30' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-dashed border-neutral-100">
                        <td className="py-3 font-bold">{row.date}</td>
                        <td className="py-3">{row.go}</td>
                        <td className="py-3 font-black text-red-500">{row.back}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-neutral-50 p-3 rounded-xl">
                 <p className="text-[10px] text-neutral-500 leading-relaxed font-bold">
                   💡 四、五人少可排接駁車；六、日強烈建議直接啟動「方案 B」步行挑戰！
                 </p>
              </div>
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