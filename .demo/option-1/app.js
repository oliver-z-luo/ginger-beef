(() => {
const {D, ITEMS, money, esc, slug, status, createCart} = window.GBH;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const plus = `<svg aria-hidden="true"><use href="#i-plus"/></svg>`;

// ---------- status ----------
const st = status();
$$("[data-status]").forEach(el => { el.classList.toggle("is-open", st.open); el.querySelector("span").textContent = st.text; });

// ---------- nav band once past the hero ----------
const hero = $(".hero");
new IntersectionObserver(([e]) => document.body.classList.toggle("scrolled", !e.isIntersecting), {rootMargin:"-110px 0px 0px 0px"}).observe(hero);

// ---------- add button ----------
const addBtn = (it, extra = "") =>
  `<button class="add${extra}" type="button" data-add="${it.id}" aria-label="Add ${esc(it.name)}">${plus}<span class="n"></span>${extra.includes("labelled") ? '<span class="lbl">Add</span>' : ""}</button>`;
const optSelect = (it) => it.opts
  ? `<select class="opt" data-opt-for="${it.id}" aria-label="Choice for ${esc(it.name)}">${it.opts.map(o => `<option>${esc(o)}</option>`).join("")}</select>` : "";

// ---------- favourites ----------
$("#favs").innerHTML = D.BEST.map(no => {
  const it = ITEMS[no];
  return `<article class="fav">
    <div class="fav__ph"><img src="${it.img}" alt="${esc(it.name)} (stand-in photo)" loading="lazy" width="900" height="900">${addBtn(it)}</div>
    <p class="fav__name"><b>${it.no}</b>${esc(it.name)}</p>
    <p class="fav__price">${money(it.price)}${it.opts ? " · gravy or sweet &amp; sour" : ""}</p>
  </article>`;
}).join("");

// ---------- new dishes ----------
$("#new-media").innerHTML = D.NEWS.map((n, i) => `<img class="newimg${i ? " out" : ""}" data-for="${n.id}" src="${ITEMS[n.id].img}" alt="${esc(n.alt)} (stand-in photo)" loading="lazy" width="900" height="675">`).join("");
$("#news").innerHTML = D.NEWS.map((n, i) => `<li class="newitem${i ? "" : " on"}" data-show="${n.id}">
  <span class="newitem__id">${n.id}</span>
  <div><h3>${esc(n.name)}</h3><p>${esc(n.desc)}</p></div>
  <span class="newitem__price">${money(n.price)}</span>
  ${addBtn(ITEMS[n.id])}
</li>`).join("");
let shown = D.NEWS[0].id;
function showNew(id){
  if (id === shown) return;
  shown = id;
  $$(".newitem").forEach(li => li.classList.toggle("on", li.dataset.show === id));
  $$(".newimg").forEach(img => {
    const on = img.dataset.for === id;
    img.style.zIndex = on ? 2 : 1;
    img.classList.toggle("out", !on);
  });
}
$$(".newitem").forEach(li => {
  li.addEventListener("mouseenter", () => showNew(li.dataset.show));
  li.addEventListener("focusin", () => showNew(li.dataset.show));
  li.addEventListener("click", () => showNew(li.dataset.show));
});

// ---------- full menu ----------
$("#catlinks").innerHTML = D.CATS.map(([cat]) => `<a href="#c-${slug(cat)}">${esc(cat)}</a>`).join("")
  + `<a href="#combo">Combo for One</a><a href="#dinners">Family Dinners</a>`;
$("#cats").innerHTML = D.CATS.map(([cat, list, note]) => `
  <section class="cat" id="c-${slug(cat)}" aria-labelledby="h-${slug(cat)}">
    <div class="cat__head"><h3 id="h-${slug(cat)}">${esc(cat)}</h3><span>${list[0][0]}–${list[list.length - 1][0]}</span></div>
    ${note ? `<p class="cat__note">${esc(note)}</p>` : ""}
    <div class="rows">${list.map(([no]) => {
      const it = ITEMS[no];
      const thumb = it.img ? `<img class="row__thumb" src="${it.img}" alt="" loading="lazy" width="64" height="48">` : `<span class="row__thumb row__thumb--none" aria-hidden="true">${it.no}</span>`;
      return `<div class="row" id="no-${it.no}">
        ${thumb}
        <div><div class="row__name">${it.img ? `<span class="row__no">${it.no}</span>` : ""}${esc(it.name)}</div>
          ${(it.peanut || it.opts) ? `<div class="row__meta">${it.peanut ? '<span class="tag">Peanut</span>' : ""}${optSelect(it)}</div>` : ""}</div>
        <span class="row__price">${money(it.price)}</span>
        ${addBtn(it)}
      </div>`;
    }).join("")}</div>
  </section>`).join("");

// category scroll-spy
const links = $$("#catlinks a");
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.id;
    links.forEach(a => {
      const on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("on", on);
      if (on) { const bar = a.parentElement; bar.scrollTo({left: a.offsetLeft - bar.clientWidth / 2 + a.offsetWidth / 2}); }
    });
  });
}, {rootMargin:"-45% 0px -50% 0px"});
$$(".cat, #combo, #dinners").forEach(s => spy.observe(s));

// go to number
const findMsg = $("#find-msg");
$("#finder").addEventListener("submit", e => {
  e.preventDefault();
  const v = $("#find-no").value.trim().replace(/^0+/, "");
  const row = document.getElementById("no-" + v);
  findMsg.classList.remove("show");
  if (!row) { findMsg.textContent = v ? `No. ${v} isn’t on the menu` : "Type a number, 1–110"; findMsg.classList.add("show"); setTimeout(() => findMsg.classList.remove("show"), 2200); return; }
  row.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block:"center"});
  row.classList.remove("flash"); void row.offsetWidth; row.classList.add("flash");
  row.querySelector(".add").focus({preventScroll:true});
});
document.addEventListener("keydown", e => {
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); $("#find-no").focus(); }
});

// ---------- combo ----------
$("#picks").innerHTML = D.COMBO_PICKS.map(p => `<label class="pick"><input type="checkbox" value="${esc(p)}"><span>${esc(p)}</span></label>`).join("");
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
  return `<article class="dcard">
    <div class="dcard__head"><h3>${esc(d.name).replace(/(\d+–\d+|\d+)$/, '<span class="nowrap">$1</span>')}</h3><span class="dcard__price">${money(d.price)}</span></div>
    <ul>${d.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
    <div class="dcard__foot">${optSelect(it) || "<span></span>"}${addBtn(it, " labelled")}</div>
  </article>`;
}).join("");

// ---------- cart ----------
const cart = createCart("gbh-option-1");
const drawer = $("#drawer");
const pill = $(".pill");
let lastAdded = null;

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    const sel = add.closest(".row, .dcard, .fav, .newitem")?.querySelector(`[data-opt-for="${id}"]`);
    cart.add(id, sel ? sel.value : (ITEMS[id].opts ? ITEMS[id].opts[0] : ""));
    add.classList.remove("bump"); void add.offsetWidth; add.classList.add("bump");
    setTimeout(() => add.classList.remove("bump"), 250);
    return;
  }
  if (e.target.closest("[data-open-cart]")) { drawer.showModal(); return; }
  if (e.target.closest("[data-close-cart]")) { drawer.close(); return; }
  const ctl = e.target.closest("[data-inc],[data-dec],[data-rm]");
  if (ctl) {
    if (ctl.dataset.inc) cart.inc(ctl.dataset.inc);
    else if (ctl.dataset.dec) cart.dec(ctl.dataset.dec);
    else cart.remove(ctl.dataset.rm);
  }
});
drawer.addEventListener("click", e => { if (e.target === drawer) drawer.close(); });
$("#clear").addEventListener("click", () => cart.clear());

function render(evt){
  const t = cart.totals();
  document.body.classList.toggle("has-items", t.count > 0);
  $$("[data-count]").forEach(el => el.textContent = t.count);
  $$("[data-total]").forEach(el => el.textContent = money(t.total));
  $(".nav__bag").setAttribute("aria-label", `Your order, ${t.count} item${t.count === 1 ? "" : "s"}`);
  pill.hidden = !t.count;
  if (evt.type === "add") {
    lastAdded = evt.key;
    pill.classList.remove("bump"); void pill.offsetWidth; pill.classList.add("bump");
    setTimeout(() => pill.classList.remove("bump"), 350);
    $("#announce").textContent = `Added ${evt.name}. ${t.count} in your order.`;
  }

  // per-button quantities
  $$("[data-add]").forEach(b => {
    const q = cart.qtyOf(b.dataset.add);
    b.classList.toggle("in", q > 0);
    b.querySelector(".n").textContent = q || "";
    const name = ITEMS[b.dataset.add].name;
    b.setAttribute("aria-label", q ? `Add another ${name}, ${q} in order` : `Add ${name}`);
  });

  // drawer
  $("#lines").innerHTML = cart.lines.length ? cart.lines.map(l => `
    <div class="line${l.key === lastAdded && evt.type === "add" ? " enter" : ""}">
      <div class="line__name">${/^(\d+|N\d)$/.test(l.id) ? `<span class="line__no">${l.id}</span>` : ""}${esc(l.name)}${l.opt ? `<small>${esc(l.opt)}</small>` : ""}</div>
      <div class="line__amt">${money(l.price * l.qty)}</div>
      <div class="line__ctl">
        <button type="button" data-dec="${esc(l.key)}" aria-label="One less ${esc(l.name)}"><svg><use href="#i-minus"/></svg></button>
        <span class="q" aria-label="Quantity">${l.qty}</span>
        <button type="button" data-inc="${esc(l.key)}" aria-label="One more ${esc(l.name)}"><svg><use href="#i-plus"/></svg></button>
        <button type="button" class="rm" data-rm="${esc(l.key)}">Remove</button>
      </div>
    </div>`).join("")
    : `<div class="empty"><b>Your order is empty</b>Tap + on any dish to add it.</div>`;
  $("#t-sub").textContent = money(t.sub);
  $("#t-gst").textContent = money(t.gst);
  $("#t-total").textContent = money(t.total);
  $("#clear").hidden = !t.count;
  $("#t-disc").innerHTML = !t.count ? "" : t.discount
    ? `Picking up and paying cash or debit? You save <b>${money(t.discount)}</b> (5%, family dinners excluded).`
    : `Add <b>${money(t.toDiscount)}</b> more (not counting family dinners) for 5% off pickup.`;
}
cart.on(render);
})();
