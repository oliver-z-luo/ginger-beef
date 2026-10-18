(() => {
const {D, ITEMS, money, esc, slug, status, createCart} = window.GBH;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const plus = `<svg aria-hidden="true"><use href="#i-plus"/></svg>`;
let uid = 0;
const cart = createCart("gbh-option-2");

// ---------- status + week strip ----------
const st = status();
$$("[data-status]").forEach(el => { el.classList.toggle("is-open", st.open); el.querySelector("span").textContent = st.text; });
const today = new Intl.DateTimeFormat("en-CA", {timeZone:"America/Vancouver", weekday:"short"}).format(new Date());
$("#week").innerHTML = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d =>
  `<li class="${d === "Tue" ? "off" : ""}${d === today ? " today" : ""}">${d}<b>${d === "Tue" ? "Closed" : "$25"}</b></li>`).join("");

// ---------- shared bits ----------
const addBtn = (it, label = "Add") =>
  `<button class="add" type="button" data-add="${it.id}" aria-label="Add ${esc(it.name)}">${plus}<span class="lbl">${label}</span><span class="n"></span></button>`;
const opts = (it) => {
  if (!it.opts) return "";
  const name = "o" + (++uid);
  return `<div class="opts" role="radiogroup" aria-label="Choice for ${esc(it.name)}">${it.opts.map((o, i) =>
    `<label><input type="radio" name="${name}" value="${esc(o)}"${i ? "" : " checked"}><span>${esc(o)}</span></label>`).join("")}</div>`;
};
const peanut = it => it.peanut ? `<span class="tag">Peanut</span>` : "";
const card = it => `<article class="card">
  <div class="card__ph"><img src="${it.img}" alt="${esc(it.name)} (stand-in photo)" loading="lazy" width="900" height="675"></div>
  <div class="card__b"><span class="no">NO. ${it.no}</span><h4>${esc(it.name)}${peanut(it)}</h4>${opts(it)}
    <div class="card__f"><span class="price">${money(it.price)}</span>${addBtn(it)}</div></div>
</article>`;
const mini = it => `<article class="mini">
  <span class="mini__no">${it.no}</span>
  <div class="mini__b"><h4>${esc(it.name)}${peanut(it)}</h4><span class="price">${money(it.price)}</span>${opts(it)}</div>
  ${addBtn(it)}
</article>`;
const block = items => `<div class="grid">${items.filter(i => i.img).map(card).join("")}</div>
  <div class="grid grid--compact">${items.filter(i => !i.img).map(mini).join("")}</div>`;

// ---------- promo carousel ----------
$("#slides").innerHTML = D.NEWS.map((n, i) => {
  const it = ITEMS[n.id];
  return `<div class="slide${i ? "" : " on"}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${D.NEWS.length}" id="slide-${i}">
    <div><h3>${esc(n.name)}</h3><p>${esc(n.desc)}</p><span class="slide__price">${money(n.price)}</span>${addBtn(it, "Add to bag")}</div>
    <div class="slide__ph"><img src="${it.img}" alt="${esc(n.alt)} (stand-in photo)" width="900" height="675"${i ? ' loading="lazy"' : ""}><span class="badge">New</span><span class="slide__demo">Demo dish · stand-in photo</span></div>
  </div>`;
}).join("");
$("#dots").innerHTML = D.NEWS.map((n, i) => `<button type="button" role="tab" aria-selected="${!i}" aria-controls="slide-${i}" aria-label="${esc(n.name)}"></button>`).join("");
let cur = 0, timer = null;
function go(i){
  cur = (i + D.NEWS.length) % D.NEWS.length;
  $$(".slide").forEach((s, k) => { s.classList.toggle("on", k === cur); s.inert = k !== cur; });
  $$("#dots button").forEach((d, k) => d.setAttribute("aria-selected", k === cur));
}
go(0);
const play = () => { if (!reduce) { clearInterval(timer); timer = setInterval(() => go(cur + 1), 7000); } };
const pause = () => clearInterval(timer);
$("#prev").addEventListener("click", () => { go(cur - 1); play(); });
$("#next").addEventListener("click", () => { go(cur + 1); play(); });
$$("#dots button").forEach((d, k) => d.addEventListener("click", () => { go(k); play(); }));
const promo = $("#promo");
promo.addEventListener("mouseenter", pause); promo.addEventListener("mouseleave", play);
promo.addEventListener("focusin", pause); promo.addEventListener("focusout", play);
play();

// ---------- menu tabs ----------
const POPULAR = [...D.BEST, 69, 8, 87].map(n => ITEMS[n]);
const TABS = [["Popular", null], ...D.CATS.map(([cat, list, note]) => [cat, {list, note}])];
$("#chips").innerHTML = TABS.map(([name], i) => `<button class="chip" type="button" role="tab" aria-selected="${!i}" data-tab="${i}">${esc(name)}</button>`).join("")
  + `<button class="chip" type="button" data-jump="#combo">Combo for One</button><button class="chip" type="button" data-jump="#dinners">Family Dinners</button>`;

function showTab(i){
  $$("#chips [data-tab]").forEach(c => c.setAttribute("aria-selected", +c.dataset.tab === i));
  const [name, info] = TABS[i];
  if (!info) {
    $("#panel").innerHTML = `<div class="panel-title"><h3>Popular right now</h3><span>Regulars’ favourites</span></div>` + block(POPULAR);
  } else {
    const items = info.list.map(([no]) => ITEMS[no]);
    $("#panel").innerHTML = `<div class="panel-title"><h3>${esc(name)}</h3><span>No. ${items[0].no}–${items[items.length - 1].no}</span></div>`
      + (info.note ? `<p class="panel-note">${esc(info.note)}</p>` : "") + block(items);
  }
  if (typeof initialised !== "undefined") $("#announce").textContent = `${name}: ${(info ? info.list.length : POPULAR.length)} dishes`;
  render({type:"tab"});
}
$("#chips").addEventListener("click", e => {
  const c = e.target.closest(".chip"); if (!c) return;
  if (c.dataset.jump) { document.querySelector(c.dataset.jump).scrollIntoView({behavior: reduce ? "auto" : "smooth"}); return; }
  $("#q").value = "";
  showTab(+c.dataset.tab);
  const bar = c.parentElement; bar.scrollTo({left: c.offsetLeft - bar.clientWidth / 2 + c.offsetWidth / 2});
  const top = $("#menu").getBoundingClientRect().top;
  if (top < -40) $("#menu").scrollIntoView({behavior: reduce ? "auto" : "smooth"});
});

// ---------- search ----------
const ALL = D.CATS.flatMap(([, list]) => list.map(([no]) => ITEMS[no]));
$("#q").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { showTab(0); return; }
  $$("#chips [data-tab]").forEach(c => c.setAttribute("aria-selected", "false"));
  const hits = ALL.filter(it => String(it.no) === q || it.name.toLowerCase().includes(q));
  $("#panel").innerHTML = `<div class="panel-title"><h3>Results for “${esc(e.target.value.trim())}”</h3><span>${hits.length} dish${hits.length === 1 ? "" : "es"}</span></div>`
    + (hits.length ? block(hits) : `<p class="empty-q">Nothing matches. Try a dish name like “almond” or a menu number like 43.</p>`);
  render({type:"tab"});
  $("#announce").textContent = `${hits.length} dish${hits.length === 1 ? "" : "es"} found`;
});

// ---------- combo ----------
$("#picks").innerHTML = D.COMBO_PICKS.map(p => `<label><input type="checkbox" value="${esc(p)}"><span>${esc(p)}</span></label>`).join("");
function comboState(){
  const on = $$("#picks input:checked").map(i => i.value);
  $$("#picks input").forEach(i => i.disabled = !i.checked && on.length >= 2);
  $("#combo-add").disabled = !on.length;
  $("#combo-out").textContent = on.length ? `${on.length} item${on.length > 1 ? "s" : ""} · ${money(D.COMBO.prices[on.length])}` : "Pick at least one item";
  return on;
}
$("#picks").addEventListener("change", comboState);
$("#combo-add").addEventListener("click", () => {
  const on = comboState(); if (!on.length) return;
  const base = $("input[name=combo-base]:checked").value;
  cart.add("C" + on.length, base + " + " + on.join(" + "), {id:"C" + on.length, name:`Combo for one (${on.length} item${on.length > 1 ? "s" : ""})`, price:D.COMBO.prices[on.length]});
  $$("#picks input").forEach(i => i.checked = false); comboState();
});

// ---------- family dinners ----------
$("#dinner-list").innerHTML = D.DINNERS.map(d => {
  const it = ITEMS[d.id];
  const size = d.name.replace("Dinner for ", "");
  return `<article class="dcard">
    <span class="dcard__size" aria-hidden="true">${size}</span>
    <h3>${esc(d.name)}</h3>
    <ul>${d.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
    ${opts(it)}
    <div class="dcard__f"><span class="price">${money(d.price)}</span>${addBtn(it)}</div>
  </article>`;
}).join("");

// ---------- cart ----------
const sheet = $("#sheet");
let lastAdded = null;

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    const scope = add.closest(".card, .mini, .dcard, .slide");
    const choice = scope?.querySelector(".opts input:checked");
    cart.add(id, choice ? choice.value : "");
    add.classList.remove("bump"); void add.offsetWidth; add.classList.add("bump");
    setTimeout(() => add.classList.remove("bump"), 300);
    return;
  }
  if (e.target.closest("[data-open-cart]")) { sheet.showModal(); return; }
  if (e.target.closest("[data-close-cart]")) { sheet.close(); return; }
  const ctl = e.target.closest("[data-inc],[data-dec],[data-rm]");
  if (ctl) {
    if (ctl.dataset.inc) cart.inc(ctl.dataset.inc);
    else if (ctl.dataset.dec) cart.dec(ctl.dataset.dec);
    else cart.remove(ctl.dataset.rm);
  }
});
sheet.addEventListener("click", e => { if (e.target === sheet) sheet.close(); });
$("#clear").addEventListener("click", () => cart.clear());

function render(evt){
  const t = cart.totals();
  document.body.classList.toggle("has-items", t.count > 0);
  $$("[data-count]").forEach(el => el.textContent = t.count);
  $$("[data-total]").forEach(el => el.textContent = money(t.total));
  $(".bag").setAttribute("aria-label", `Your bag, ${t.count} item${t.count === 1 ? "" : "s"}`);
  $(".bagbar").hidden = !t.count;
  if (evt.type === "add") {
    lastAdded = evt.key;
    const bag = $(".bag"); bag.classList.remove("bump"); void bag.offsetWidth; bag.classList.add("bump");
    $("#announce").textContent = `Added ${evt.name}. ${t.count} in your bag.`;
  }
  $$("[data-add]").forEach(b => {
    const q = cart.qtyOf(b.dataset.add);
    b.classList.toggle("in", q > 0);
    b.querySelector(".n").textContent = !q ? "" : b.closest(".mini") ? q : `${q} in bag`;
    const name = ITEMS[b.dataset.add].name;
    b.setAttribute("aria-label", q ? `Add another ${name}, ${q} in bag` : `Add ${name}`);
  });
  if (evt.type === "tab") return;

  $("#lines").innerHTML = cart.lines.length ? cart.lines.map(l => `
    <div class="line${l.key === lastAdded && evt.type === "add" ? " enter" : ""}">
      <div class="line__name">${/^(\d+|N\d)$/.test(l.id) ? `<span class="line__no">${l.id}</span>` : ""}${esc(l.name)}${l.opt ? `<small>${esc(l.opt)}</small>` : ""}</div>
      <div class="line__amt">${money(l.price * l.qty)}</div>
      <div class="line__ctl">
        <div class="stepper">
          <button type="button" data-dec="${esc(l.key)}" aria-label="One less ${esc(l.name)}"><svg><use href="#i-minus"/></svg></button>
          <span>${l.qty}</span>
          <button type="button" data-inc="${esc(l.key)}" aria-label="One more ${esc(l.name)}"><svg><use href="#i-plus"/></svg></button>
        </div>
        <button type="button" class="linkbtn" data-rm="${esc(l.key)}">Remove</button>
      </div>
    </div>`).join("")
    : `<div class="bag-empty"><svg aria-hidden="true"><use href="#i-bag"/></svg><b>Your bag is empty</b>Add a dish from the menu to start an order.</div>`;
  $("#t-sub").textContent = money(t.sub);
  $("#t-gst").textContent = money(t.gst);
  $("#t-total").textContent = money(t.total);
  $("#clear").hidden = !t.count;
  $("#t-disc").innerHTML = !t.count ? "" : t.discount
    ? `Picking up and paying cash or debit? You save <b>${money(t.discount)}</b> (5%, family dinners excluded).`
    : `Add <b>${money(t.toDiscount)}</b> more (not counting family dinners) for 5% off pickup.`;
}
showTab(0);
var initialised = true;
cart.on(render);
})();
