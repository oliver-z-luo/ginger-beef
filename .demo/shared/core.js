// Shared demo logic: item lookup, money, open/closed status, and a localStorage cart.
// Each option renders its own markup; this file holds no design.
(function(){
const D = window.GBH_DATA;
const IMG = "../img/";

const money = n => "$" + n.toFixed(2);
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const slug = s => s.replace(/\W+/g,"-").replace(/^-|-$/g,"").toLowerCase();

// every orderable thing, keyed by menu number / id
const ITEMS = {};
D.CATS.forEach(([cat, list]) => list.forEach(([no, name, price, x]) => {
  ITEMS[no] = {id:String(no), no, name, price, cat, img: D.P[no] ? IMG + D.P[no] : null, ...(x||{})};
}));
D.NEWS.forEach(n => ITEMS[n.id] = {id:n.id, no:n.id, name:n.name, price:n.price, desc:n.desc, img: IMG + n.img, alt:n.alt, isNew:true});
D.DINNERS.forEach(d => ITEMS[d.id] = {id:d.id, no:d.id, name:d.name, price:d.price, items:d.items, opts: d.opts ? d.opts.map(o => o + " chop suey") : null, family:true});

// open/closed in Campbell River time. Open Wed–Mon 4:00–8:30pm, closed Tuesday.
function status(now = new Date()){
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {timeZone:"America/Vancouver", weekday:"short", hour:"numeric", minute:"numeric", hourCycle:"h23"})
    .formatToParts(now).map(p => [p.type, p.value]));
  const day = parts.weekday, mins = (+parts.hour) * 60 + (+parts.minute);
  const OPEN = 16*60, CLOSE = 20*60 + 30;
  if (day === "Tue") return {open:false, text:"Closed Tuesdays · open Wednesday at 4pm"};
  if (mins >= OPEN && mins < CLOSE) return {open:true, text:"Open now · until 8:30pm tonight"};
  if (mins < OPEN) return {open:false, text:"Opens today at 4pm"};
  return {open:false, text: day === "Mon" ? "Closed · open Wednesday at 4pm" : "Closed · opens tomorrow at 4pm"};
}

// cart store
function createCart(storageKey){
  let lines = [];
  try { lines = JSON.parse(localStorage.getItem(storageKey) || "[]"); } catch(e) { lines = []; }
  const subs = new Set();
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(lines)); } catch(e){} };
  const emit = (evt) => { save(); subs.forEach(fn => fn(evt)); };

  return {
    get lines(){ return lines; },
    on(fn){ subs.add(fn); fn({type:"init"}); return () => subs.delete(fn); },
    // add a menu item by id, or a custom line ({id,name,price,opt,family})
    add(id, opt = "", custom = null){
      const it = custom || ITEMS[id];
      const key = it.id + "|" + opt;
      const hit = lines.find(l => l.key === key);
      if (hit) hit.qty++;
      else lines.push({key, id:it.id, name:it.name, price:it.price, opt, qty:1, family:!!it.family});
      emit({type:"add", key, name:it.name, id:it.id});
    },
    inc(key){ const l = lines.find(l => l.key === key); if (l){ l.qty++; emit({type:"qty", key}); } },
    dec(key){
      const l = lines.find(l => l.key === key); if (!l) return;
      if (--l.qty <= 0) lines = lines.filter(x => x !== l);
      emit({type:"qty", key});
    },
    remove(key){ lines = lines.filter(l => l.key !== key); emit({type:"remove", key}); },
    clear(){ lines = []; emit({type:"clear"}); },
    qtyOf(id){ return lines.filter(l => l.id === String(id)).reduce((s,l) => s + l.qty, 0); },
    totals(){
      const sub = lines.reduce((s,l) => s + l.price * l.qty, 0);
      const eligible = lines.filter(l => !l.family).reduce((s,l) => s + l.price * l.qty, 0);
      const gst = sub * 0.05;
      return {count: lines.reduce((s,l) => s + l.qty, 0), sub, gst, total: sub + gst,
              discount: eligible > 45 ? eligible * 0.05 : 0, toDiscount: eligible > 45 ? 0 : 45 - eligible};
    }
  };
}

const PHONE = "(250) 850-0729", TEL = "tel:+12508500729";
const ADDRESS = "1891 Island Hwy, Campbell River, BC V9W 2E9";

window.GBH = {D, ITEMS, IMG, money, esc, slug, status, createCart, PHONE, TEL, ADDRESS};
})();
