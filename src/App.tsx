/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Printer, 
  FileText, 
  Zap, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Clock, 
  ShieldCheck,
  ArrowRight,
  Copy,
  Languages,
  MapPin
} from "lucide-react";

const CONTACT_NUMBER = "9423002294";
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=Nagar+Road+Near+Fish+Market+Shevgaon`;
const WHATSAPP_LINK = `https://wa.me/91${CONTACT_NUMBER}?text=Hi, I want to get some prints/Xerox done.`;

const TRANSLATIONS = {
  en: {
    nav: { works: "How it Works", pricing: "Pricing", why: "Why Us", order: "Order Now" },
    hero: {
      offer: "Limited Time Offer",
      title: "PRINTS AT JUST ₹1",
      desc: "High-quality Xerox and printouts delivered to your doorstep. No hidden costs, just flat ₹1 per side.",
      cta: "Send Files on WhatsApp",
      support: "Call Support",
      social: "Joined by 500+ happy customers this month"
    },
    address: {
      title: "Visit Our Shop",
      desc: "Prefer to visit in person? Come to our shop for instant Xerox and printing.",
      location: "Nagar Road, Near Fish Market, Shevgaon",
      cta: "Get Directions"
    },
    works: {
      title: "How it Works",
      subtitle: "Get your documents printed in 3 simple steps without leaving your home.",
      steps: [
        { title: "Send Files", desc: "Share your PDF, Word, or Image files with us on WhatsApp at 9423002294." },
        { title: "We Print", desc: "We use high-quality laser printers to ensure crisp and clear text every time." },
        { title: "Quick Delivery", desc: "Get your prints delivered or ready for pickup in record time." }
      ]
    },
    why: {
      title: "WHY PAY MORE WHEN YOU CAN PRINT FOR ₹1?",
      list: [
        "High-Quality 75GSM Paper",
        "Confidential & Secure Handling",
        "Fast Turnaround Time"
      ],
      secure: { title: "Secure", desc: "Your data is deleted after printing" },
      xerox: { title: "Xerox", desc: "Crystal clear copies at ₹1" },
      bulk: { title: "Bulk Orders?", desc: "Contact us for even lower rates on orders above 500 pages.", cta: "Get a Quote" }
    },
    cta: {
      title: "READY TO PRINT?",
      desc: "Don't waste time in queues. Send your files now and get them printed at the best price in town.",
      button: "WHATSAPP YOUR FILES",
      call: "Or call us at"
    },
    pricing: { side: "Per Side", bw: "Black & White", price: "₹1.00", current: "Current Price" },
    footer: { rights: "© 2026 Print1 Services. All rights reserved." }
  },
  mr: {
    nav: { works: "कसे कार्य करते", pricing: "किंमत", why: "आम्हाला का निवडावे", order: "ऑर्डर करा" },
    hero: {
      offer: "मर्यादित काळासाठी ऑफर",
      title: "प्रिंट्स फक्त ₹१ मध्ये",
      desc: "उच्च दर्जाचे झेरॉक्स आणि प्रिंटआउट्स तुमच्या दारापर्यंत. कोणतेही छुपे खर्च नाहीत, फक्त ₹१ प्रति बाजू.",
      cta: "व्हॉट्सॲपवर फाईल्स पाठवा",
      support: "कॉल सपोर्ट",
      social: "या महिन्यात ५००+ आनंदी ग्राहक जोडले गेले आहेत"
    },
    address: {
      title: "आमच्या दुकानाला भेट द्या",
      desc: "प्रत्यक्ष भेट देणे आवडेल? झटपट झेरॉक्स आणि प्रिंटिंगसाठी आमच्या दुकानात या.",
      location: "नगर रोड, मासे बाजाराजवळ, शेवगाव",
      cta: "रस्ता पहा"
    },
    works: {
      title: "कसे कार्य करते",
      subtitle: "तुमच्या घरून बाहेर न पडता ३ सोप्या स्टेप्समध्ये तुमचे डॉक्युमेंट्स प्रिंट करा.",
      steps: [
        { title: "फाईल्स पाठवा", desc: "तुमच्या PDF, वर्ड किंवा इमेज फाईल्स व्हॉट्सॲपवर ९४२३००२२९४ वर शेअर करा." },
        { title: "आम्ही प्रिंट करतो", desc: "आम्ही उच्च दर्जाचे लेझर प्रिंटर वापरतो जेणेकरणून मजकूर स्पष्ट दिसेल." },
        { title: "जलद डिलिव्हरी", desc: "तुमचे प्रिंट्स रेकॉर्ड वेळेत मिळवा किंवा पिकअपसाठी तयार ठेवा." }
      ]
    },
    why: {
      title: "₹१ मध्ये प्रिंट मिळत असताना जास्त पैसे का द्यायचे?",
      list: [
        "उच्च दर्जाचा ७५ जीएसएम कागद",
        "गोपनीय आणि सुरक्षित हाताळणी",
        "जलद सेवा"
      ],
      secure: { title: "सुरक्षित", desc: "तुमचा डेटा प्रिंटिंगनंतर हटवला जातो" },
      xerox: { title: "झेरॉक्स", desc: "₹१ मध्ये स्पष्ट प्रती" },
      bulk: { title: "मोठ्या ऑर्डर्स?", desc: "५०० पेक्षा जास्त पानांच्या ऑर्डरसाठी आमच्याशी संपर्क साधा.", cta: "कोट मिळवा" }
    },
    cta: {
      title: "प्रिंट करण्यासाठी तयार आहात?",
      desc: "रांगेत वेळ वाया घालवू नका. आता फाईल्स पाठवा आणि सर्वोत्तम किमतीत प्रिंट मिळवा.",
      button: "व्हॉट्सॲपवर फाईल्स पाठवा",
      call: "किंवा आम्हाला कॉल करा"
    },
    pricing: { side: "प्रति बाजू", bw: "ब्लॅक अँड व्हाईट", price: "₹१.००", current: "सध्याची किंमत" },
    footer: { rights: "© २०२६ प्रिंट१ सर्व्हिसेस. सर्व हक्क राखीव." }
  }
};

export default function App() {
  const [lang, setLang] = useState<"en" | "mr">("en");
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-yellow-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-black text-white p-1.5 rounded-lg">
              <Printer size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">Print1</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
            <a href="#how-it-works" className="hover:text-black transition-colors">{t.nav.works}</a>
            <a href="#pricing" className="hover:text-black transition-colors">{t.nav.pricing}</a>
            <a href="#why-us" className="hover:text-black transition-colors">{t.nav.why}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === "en" ? "mr" : "en")}
              className="p-2 rounded-full hover:bg-black/5 transition-colors flex items-center gap-2 text-sm font-bold"
            >
              <Languages size={18} />
              {lang === "en" ? "मराठी" : "English"}
            </button>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform active:scale-95 flex items-center gap-2"
            >
              <MessageSquare size={16} />
              {t.nav.order}
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap size={14} />
                  {t.hero.offer}
                </div>
                <h1 className={`font-black leading-[0.9] tracking-tighter mb-8 ${lang === 'mr' ? 'text-5xl md:text-7xl' : 'text-6xl md:text-8xl'}`}>
                  {lang === 'en' ? (
                    <>PRINTS AT <br /><span className="text-blue-600 italic">JUST ₹1</span></>
                  ) : (
                    <><span className="text-blue-600 italic">फक्त ₹१</span> मध्ये <br />प्रिंट्स</>
                  )}
                </h1>
                <p className="text-xl text-black/60 max-w-md mb-10 leading-relaxed">
                  {t.hero.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-black/20 transition-all group"
                  >
                    {t.hero.cta}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-4 px-4 py-4 border border-black/10 rounded-2xl bg-white">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-black/40 leading-none mb-1">{t.hero.support}</p>
                      <p className="font-bold">{CONTACT_NUMBER}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User" 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-black/50">
                    {t.hero.social}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-black/5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-dashed border-black/10">
                      <FileText size={48} className="text-black/20 mb-4" />
                      <div className="w-full h-2 bg-black/5 rounded-full mb-2" />
                      <div className="w-2/3 h-2 bg-black/5 rounded-full" />
                    </div>
                    <div className="aspect-[3/4] bg-blue-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-dashed border-blue-200">
                      <Printer size={48} className="text-blue-600 mb-4 animate-pulse" />
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{lang === 'en' ? 'Printing...' : 'प्रिंटिंग...'}</p>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-black text-white rounded-3xl">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs opacity-50 uppercase font-bold mb-1">{t.pricing.current}</p>
                        <p className="text-4xl font-black italic">{t.pricing.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs opacity-50 uppercase font-bold mb-1">{t.pricing.side}</p>
                        <p className="text-sm font-bold">{t.pricing.bw}</p>
                      </div>
                    </div>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-blue-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10" />
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black tracking-tight mb-4 uppercase italic">{t.works.title}</h2>
                <p className="text-black/50 max-w-lg mx-auto">{t.works.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {t.works.steps.map((step, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-[#fafafa] border border-black/5 hover:border-black/20 transition-all">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-blue-600">
                      {i === 0 ? <MessageSquare size={32} /> : i === 1 ? <Zap size={32} /> : <Clock size={32} />}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-black/50 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section id="why-us" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className={`font-black mb-8 leading-tight italic ${lang === 'mr' ? 'text-3xl md:text-5xl' : 'text-4xl md:text-5xl'}`}>
                      {t.why.title}
                    </h2>
                    <div className="space-y-6">
                      {t.why.list.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={20} className="text-blue-400" />
                          <span className="font-medium opacity-80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                      <ShieldCheck size={32} className="text-blue-400 mb-4" />
                      <h4 className="font-bold mb-1 text-lg">{t.why.secure.title}</h4>
                      <p className="text-xs opacity-50">{t.why.secure.desc}</p>
                    </div>
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                      <Copy size={32} className="text-yellow-400 mb-4" />
                      <h4 className="font-bold mb-1 text-lg">{t.why.xerox.title}</h4>
                      <p className="text-xs opacity-50">{t.why.xerox.desc}</p>
                    </div>
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 col-span-2">
                      <h4 className="font-bold mb-2 text-lg">{t.why.bulk.title}</h4>
                      <p className="text-sm opacity-60 mb-4">{t.why.bulk.desc}</p>
                      <a href={WHATSAPP_LINK} className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        {t.why.bulk.cta} <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden">
                  <div className="absolute top-0 right-0 text-[20rem] font-black leading-none transform translate-x-1/4 -translate-y-1/4">1</div>
                </div>
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-blue-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-blue-100">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                    <MapPin size={32} />
                  </div>
                  <h2 className="text-4xl font-black mb-4 italic uppercase">{t.address.title}</h2>
                  <p className="text-black/60 text-lg mb-8 leading-relaxed">
                    {t.address.desc}
                  </p>
                  <div className="p-6 bg-white rounded-3xl border border-blue-100 shadow-sm mb-8">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Address</p>
                    <p className="text-xl font-bold text-black leading-tight">
                      {t.address.location}
                    </p>
                  </div>
                  <a 
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-black text-lg hover:gap-4 transition-all"
                  >
                    {t.address.cta} <ArrowRight size={20} />
                  </a>
                </div>
                <div className="flex-1 w-full aspect-video md:aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative group">
                  <img 
                    src="https://picsum.photos/seed/shevgaon-shop/800/800" 
                    alt="Shop Location" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-lg">Print1 Shevgaon</p>
                      <p className="text-sm opacity-80">Nagar Road</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 italic">{t.cta.title}</h2>
              <p className="text-xl text-black/50 mb-12">
                {t.cta.desc}
              </p>
              <div className="flex flex-col items-center gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
                >
                  {t.cta.button}
                </a>
                <p className="text-sm font-bold text-black/30 uppercase tracking-widest">
                  {t.cta.call} <span className="text-black">{CONTACT_NUMBER}</span>
                </p>
              </div>
            </div>
          </section>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-black text-white p-1 rounded-md">
                <Printer size={16} />
              </div>
              <span className="font-bold text-lg tracking-tight">Print1</span>
            </div>
            <p className="text-xs text-black/40 max-w-[200px]">
              {t.address.location}
            </p>
          </div>
          <p className="text-sm text-black/40 font-medium">
            {t.footer.rights}
          </p>
          <div className="flex gap-6 text-black/40">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
