/* ═══════════════════════════════════════════════════════════
   PIZZARIA PG NINA – app.js
   ═══════════════════════════════════════════════════════════ */

// ── DADOS ────────────────────────────────────────────────────
const tamanhos = [
  { id: 'pequena', nome: 'Pizza Pequena', diametro: '25cm', fatias: 6,  slots: 2, preco: 30 },
  { id: 'media',   nome: 'Pizza Média',   diametro: '35cm', fatias: 8,  slots: 3, preco: 60 },
  { id: 'grande',  nome: 'Pizza Grande',  diametro: '40cm', fatias: 12, slots: 4, preco: 75 },
  { id: 'extra',   nome: 'Pizza Extra',   diametro: '45cm', fatias: 16, slots: 4, preco: 80 },
  { id: 'big',     nome: 'Pizza Big',     diametro: '50cm', fatias: 20, slots: 4, preco: 90 },
];

const sabores = [
  { nome: 'Alcatra Alho e Óleo',       desc: 'Molho, mussarela, alcatra ao alho e óleo, cebola e orégano',                          plus: 5 },
  { nome: 'Bacon',                     desc: 'Molho, mussarela, bacon, azeitona e orégano',                                          plus: 0 },
  { nome: 'Baiana',                    desc: 'Molho, mussarela, carne moída, pimentão, milho, tomate e orégano',                     plus: 0 },
  { nome: 'Caipira',                   desc: 'Molho, mussarela, calabresa, ovo, bacon, cebola e orégano',                            plus: 0 },
  { nome: 'Calabresa',                 desc: 'Molho, mussarela, calabresa, milho e orégano',                                         plus: 0 },
  { nome: 'Cheddar',                   desc: 'Molho, mussarela, cheddar cremoso e orégano',                                          plus: 0 },
  { nome: 'Da Casa',                   desc: 'Molho, mussarela, calabresa, bacon, milho, palmito e orégano',                         plus: 0 },
  { nome: 'Especial',                  desc: 'Molho, mussarela, lombo, bacon, champignon, catupiry e orégano',                       plus: 0 },
  { nome: 'Escondidinho da Casa',      desc: 'Molho, mussarela, frango, calabresa, champignon, tomate, queijo prato e orégano',      plus: 5 },
  { nome: 'Frango c/ Catupiry',        desc: 'Molho, mussarela, frango, catupiry e orégano',                                         plus: 0 },
  { nome: 'Lombo c/ Abacaxi',          desc: 'Molho, mussarela, lombo, abacaxi e orégano',                                           plus: 5 },
  { nome: 'Lombo c/ Catupiry',         desc: 'Molho, mussarela, lombo, catupiry e orégano',                                          plus: 0 },
  { nome: 'Marguerita',                desc: 'Molho, mussarela, tomate, parmesão e orégano',                                         plus: 0 },
  { nome: 'Mexicana',                  desc: 'Molho, mussarela, calabresa, palmito, pimentão e orégano',                             plus: 0 },
  { nome: 'Milho',                     desc: 'Molho, mussarela, milho, tomate e orégano',                                            plus: 0 },
  { nome: 'Minas',                     desc: 'Molho, mussarela, bolonhesa, presunto, calabresa, ovos e orégano',                    plus: 0 },
  { nome: 'Mussarela',                 desc: 'Molho, mussarela, tomate, azeitona e orégano',                                         plus: 0 },
  { nome: 'Napolitano',                desc: 'Molho, mussarela, presunto, tomate em rodelas e orégano',                              plus: 0 },
  { nome: 'Brócolis com Bacon',        desc: 'Molho, mussarela, brócolis, bacon e orégano',                                          plus: 0 },
  { nome: 'Romana',                    desc: 'Molho, mussarela, milho, palmito, tomate em cubos, catupiry e orégano',                plus: 0 },
  { nome: 'Portuguesa',                desc: 'Molho, mussarela, presunto, milho, ervilha, ovos, azeitona, cebola e orégano',        plus: 0 },
  { nome: 'Quatro Queijos',            desc: 'Molho, mussarela, queijo, parmesão, queijo prato e catupiry',                          plus: 0 },
  { nome: 'Strogonoff de Carne',       desc: 'Molho, mussarela, strogonoff de carne, batata palha e orégano',                       plus: 5 },
  { nome: 'Mista',                     desc: 'Molho, mussarela, presunto, lombo, calabresa, bacon, cheddar e orégano',               plus: 5 },
  { nome: 'Strogonoff de Frango',      desc: 'Molho, mussarela, strogonoff de frango, batata palha e orégano',                      plus: 5 },
  { nome: 'Vegetariana',               desc: 'Molho, mussarela, milho, brócolis, champignon, palmito, tomate e orégano',             plus: 0 },
  { nome: 'Atum',                      desc: 'Molho, mussarela, atum com cebola ou sem, orégano',                                    plus: 5 },
  { nome: 'Siciliana',                 desc: 'Molho, mussarela, bacon, champignon e orégano',                                        plus: 0 },
  { nome: 'Quatro Queijos c/ Cheddar', desc: 'Molho, mussarela, parmesão, queijo prato, catupiry e cheddar',                        plus: 0 },
  { nome: 'Calabresa c/ Catupiry',     desc: 'Molho, mussarela, calabresa, catupiry e orégano',                                      plus: 0 },
  { nome: 'Bacon Crocante',            desc: 'Molho, mussarela, bacon, orégano e batata palha',                                      plus: 0 },
  { nome: 'Alho e Óleo',               desc: 'Molho, mussarela, alho e óleo e orégano',                                              plus: 0 },
  { nome: 'Diferentão',                desc: 'Molho, mussarela, presunto, milho, palmito, lombo e tomate e orégano',                 plus: 0 },
  { nome: 'Delícia',                   desc: 'Molho, mussarela, frango, champignon, azeitona, tomate, cheddar, catupiry e orégano',  plus: 0 },
  { nome: '🍫 Beijinho',               desc: 'Leite condensado, mussarela, doce de leite cremoso e coco ralado',                     plus: 5 },
  { nome: '🍫 Dois Amores',            desc: 'Leite condensado, mussarela, chocolate preto e chocolate branco',                      plus: 5 },
  { nome: '🍫 Chocolate Branco',       desc: 'Leite condensado, mussarela e chocolate branco',                                       plus: 5 },
  { nome: '🍫 Chocolate Preto',        desc: 'Leite condensado, mussarela e chocolate preto',                                        plus: 5 },
  { nome: '🍫 Formigueiro',            desc: 'Leite condensado, mussarela, chocolate branco e granulado',                            plus: 5 },
  { nome: '🍫 Mesclado',               desc: 'Leite condensado, doce de leite e chocolate preto',                                    plus: 5 },
  { nome: '🍫 Sensação',               desc: 'Leite condensado, chocolate preto e morangos frescos',                                  plus: 5 },
  { nome: '🍫 Prestígio',              desc: 'Leite condensado, mussarela, chocolate preto e coco',                                   plus: 5 },
  { nome: '🍫 Confete',                desc: 'Leite condensado, mussarela, chocolate preto ou branco e confete',                     plus: 5 },
  { nome: '🍫 Brigadeiro',             desc: 'Leite condensado, mussarela, chocolate preto ou branco e granulados',                  plus: 5 },
];

const bebidas = [
  { nome: 'Coca-Cola 2L',             sub: 'Garrafa Pet', preco: 15, emoji: '🥤' },
  { nome: 'Coca-Cola 600ml',          sub: 'Garrafa Pet', preco: 8,  emoji: '🥤' },
  { nome: 'Guaraná Antárctica 1,5L',  sub: 'Garrafa Pet', preco: 10, emoji: '🥤' },
  { nome: 'Guaraná Antárctica 600ml', sub: 'Garrafa Pet', preco: 7,  emoji: '🥤' },
  { nome: 'Guaraná Kuat 2L',          sub: 'Garrafa Pet', preco: 10, emoji: '🥤' },
  { nome: 'Brahma Lata Chopp',        sub: '350ml',       preco: 5,  emoji: '🍺' },
  { nome: 'Fanta Laranja 2L',         sub: 'Garrafa Pet', preco: 13, emoji: '🥤' },
];

// ── CONFIGURAÇÃO PIX ─────────────────────────────────────────
const PIX_CHAVE      = '(42) 99874-7570';
const PIX_CHAVE_TIPO = 'Telefone';

// ── ESTADO ───────────────────────────────────────────────────
let tamIdx     = null;
let selSabores = [];
let carrinho   = [];
let estaAberto = false;

// ── STATUS / BLOQUEIO ────────────────────────────────────────
function mensagemFechado(dia, min) {
  if (dia === 2) {
    return 'Hoje estamos fechados. Voltamos na quarta às 18h30.';
  }

  if (min < 18 * 60 + 30) {
    return 'Ainda não abrimos hoje. Abrimos às 18h30, volte logo!';
  }

  return 'Já encerramos por hoje. Voltamos amanhã às 18h30.';
}

function verificarStatus() {
  const now = new Date();
  const dia = now.getDay();
  const min = now.getHours() * 60 + now.getMinutes();
  estaAberto = dia !== 2 && min >= 18 * 60 + 30 && min < 23 * 60 + 30;

  const badge = document.getElementById('statusBadge');
  badge.className = 'status-badge ' + (estaAberto ? 'aberto' : 'fechado');
  document.getElementById('statusTexto').textContent = estaAberto
    ? 'Aberto agora'
    : 'Fechado no momento';

  const avisoFaixa = document.getElementById('aviso-fechado');
  if (avisoFaixa) {
    avisoFaixa.classList.remove('visivel');
  }

  const popupTexto = document.getElementById('popup-fechado-texto');
  if (popupTexto) popupTexto.textContent = mensagemFechado(dia, min);

  const ids = ['l-dom', 'l-seg', 'l-ter', 'l-qua', 'l-qui', 'l-sex', 'l-sab'];
  document.querySelectorAll('.horarios-table tr').forEach(tr => tr.classList.remove('hoje'));
  const linhaHoje = document.getElementById(ids[dia]);
  if (linhaHoje) linhaHoje.classList.add('hoje');
}

// ── TABS ─────────────────────────────────────────────────────
function mostrarSecao(s, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  document.getElementById('secao-pizzas').classList.toggle('hidden', s !== 'pizzas');
  document.getElementById('secao-bebidas').classList.toggle('hidden', s !== 'bebidas');
}

// ── RENDER TAMANHOS ──────────────────────────────────────────
function renderTamanhos() {
  document.getElementById('tamanhos-grid').innerHTML = tamanhos
    .map((t, i) => `
      <div class="tamanho-card" id="tc-${i}" data-idx="${i}">
        <div class="tam-nome">${t.nome}</div>
        <div class="tam-info">${t.diametro} · ${t.fatias} fatias · ${t.slots} sabor${t.slots > 1 ? 'es' : ''}</div>
        <div class="tam-preco">R$ ${fmt(t.preco)}</div>
      </div>`)
    .join('');

  document.getElementById('tamanhos-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.tamanho-card');
    if (card) selecionarTam(Number(card.dataset.idx));
  });
}

function selecionarTam(i) {
  tamIdx     = i;
  selSabores = [];
  document.querySelectorAll('.tamanho-card').forEach((c, j) =>
    c.classList.toggle('selecionado', j === i));
  document.getElementById('area-sabores').classList.remove('hidden');
  renderSabores();
  atualizarBtnPizza();
  setTimeout(() =>
    document.getElementById('area-sabores').scrollIntoView({ behavior: 'smooth', block: 'start' })
  , 100);
}

// ── RENDER SABORES ───────────────────────────────────────────
function renderSabores() {
  const t     = tamanhos[tamIdx];
  const total = selSabores.length;

  document.getElementById('sabores-instrucao').innerHTML =
    `Escolha <strong>${t.slots}</strong> sabor${t.slots > 1 ? 'es' : ''} — selecione o mesmo sabor várias vezes para cobrir mais fatias.`;

  let prg = '';
  for (let i = 0; i < t.slots; i++) {
    prg += `<div class="prog-slot ${i < total ? 'preenchido' : ''}"></div>`;
  }
  document.getElementById('sabores-progresso').innerHTML = prg;

  document.getElementById('sabores-grid').innerHTML = sabores
    .map((s, i) => {
      const qtd  = selSabores.filter(x => x === i).length;
      const cheio = total >= t.slots && qtd === 0;
      let cls    = 'sabor-card';
      if (qtd > 0)  cls += ' selecionado';
      if (cheio)    cls += ' bloqueado';
      const prcCls = s.plus > 0 ? 's-preco' : 's-preco gratis';
      const prcTxt = s.plus > 0 ? `+R$${s.plus},00` : 'Incluso';
      return `<div class="${cls}" data-idx="${i}">
        <div class="sabor-check">${qtd > 0 ? `${qtd}x` : ''}</div>
        <div class="sabor-info">
          <div class="s-nome">${s.nome}</div>
          <div class="s-desc">${s.desc}</div>
        </div>
        <div class="${prcCls}">${prcTxt}</div>
      </div>`;
    })
    .join('');
}

function toggleSabor(i) {
  const t   = tamanhos[tamIdx];
  const qtd = selSabores.filter(x => x === i).length;
  if (qtd > 0) {
    selSabores.splice(selSabores.lastIndexOf(i), 1);
  } else {
    if (selSabores.length >= t.slots) return;
    selSabores.push(i);
  }
  renderSabores();
  atualizarBtnPizza();
}

function atualizarBtnPizza() {
  const t   = tamanhos[tamIdx];
  const ok  = selSabores.length === t.slots;
  const btn = document.getElementById('btn-add-pizza');
  btn.disabled = !ok;
  if (ok) {
    btn.textContent = `🍕 Adicionar – R$ ${fmt(calcPreco())}`;
  } else {
    const faltam = t.slots - selSabores.length;
    btn.textContent = `Faltam ${faltam} sabor${faltam > 1 ? 'es' : ''} para adicionar`;
  }
}

function calcPreco() {
  const t  = tamanhos[tamIdx];
  let ac  = 0;
  selSabores.forEach(i => { ac += sabores[i].plus; });
  return t.preco + ac;
}

function adicionarPizza() {
  const t     = tamanhos[tamIdx];
  const preco = calcPreco();
  const cont  = {};
  selSabores.forEach(i => { cont[i] = (cont[i] || 0) + 1; });
  const desc = Object.entries(cont)
    .map(([i, q]) => {
      const nome = sabores[i].nome.replace(/🍫 /, '');
      return q === t.slots ? nome : `${q}/${t.slots} ${nome}`;
    })
    .join(' | ');

  carrinho.push({ tipo: 'pizza', nome: t.nome, detalhe: desc, preco });
  atualizarBadge();
  selSabores = [];
  renderSabores();

  const btn = document.getElementById('btn-add-pizza');
  btn.textContent = '✓ Pizza adicionada ao pedido!';
  btn.disabled    = true;
  setTimeout(atualizarBtnPizza, 1800);
}

// ── BEBIDAS ──────────────────────────────────────────────────
function renderBebidas() {
  document.getElementById('bebidas-grid').innerHTML = bebidas
    .map((b, i) => `
      <div class="bebida-card">
        <span class="b-emoji">${b.emoji}</span>
        <div class="b-nome">${b.nome}</div>
        <div class="b-sub">${b.sub}</div>
        <div class="b-preco">R$ ${fmt(b.preco)}</div>
        <button class="btn-beb" id="beb-${i}" data-idx="${i}">+ Adicionar</button>
      </div>`)
    .join('');

  document.getElementById('bebidas-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-beb');
    if (btn) addBebida(Number(btn.dataset.idx));
  });
}

function addBebida(i) {
  carrinho.push({ tipo: 'bebida', nome: bebidas[i].nome, detalhe: bebidas[i].sub, preco: bebidas[i].preco });
  atualizarBadge();
  const btn = document.getElementById('beb-' + i);
  btn.textContent = '✓ Adicionado!';
  setTimeout(() => { btn.textContent = '+ Adicionar'; }, 1200);
}

// ── CARRINHO ─────────────────────────────────────────────────
function atualizarBadge() {
  document.getElementById('fabBadge').textContent = carrinho.length;
}

function abrirCarrinho() {
  renderCarrinho();
  document.getElementById('overlay').classList.add('ativo');
}

function fecharCarrinho() {
  document.getElementById('overlay').classList.remove('ativo');
}

function fecharFora(e) {
  if (e.target === document.getElementById('overlay')) fecharCarrinho();
}

function renderCarrinho() {
  const el = document.getElementById('listaCarrinho');
  if (!carrinho.length) {
    el.innerHTML = '<div class="carr-vazio">Nenhum item ainda. Monte sua pizza! 🍕</div>';
    return;
  }
  const total = carrinho.reduce((a, i) => a + i.preco, 0);
  el.innerHTML = carrinho
    .map((it, i) => `
      <div class="item-carr">
        <div class="ic-info">
          <div class="ic-nome">${it.nome}</div>
          <div class="ic-det">${it.detalhe}</div>
        </div>
        <div class="ic-preco">R$ ${fmt(it.preco)}</div>
        <button class="ic-rem" data-idx="${i}">✕</button>
      </div>`)
    .join('')
    + `<div class="total-row"><span>Total</span><span>R$ ${fmt(total)}</span></div>`;

  el.querySelectorAll('.ic-rem').forEach(btn => {
    btn.addEventListener('click', () => {
      remItem(Number(btn.dataset.idx));
    });
  });
}

function remItem(i) {
  carrinho.splice(i, 1);
  atualizarBadge();
  renderCarrinho();
}

// ── PAGAMENTO ────────────────────────────────────────────────
function onPagamentoChange() {
  const val      = document.querySelector('input[name="pagamento"]:checked')?.value;
  const pixInfo  = document.getElementById('pix-info');
  pixInfo.classList.toggle('visivel', val === 'pix');
}

function copiarPix() {
  navigator.clipboard.writeText(PIX_CHAVE).then(() => {
    const btn = document.getElementById('btn-copiar-pix');
    btn.textContent = '✓ Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar chave'; }, 2000);
  });
}

// ── POPUP FECHADO (entrada no site) ──────────────────────────
function fecharPopupFechado() {
  document.getElementById('popup-fechado').classList.remove('visivel');
}

// ── MODAL FECHADO (ao tentar finalizar pedido) ──────────────
function mostrarModalFechado(msg) {
  const el = document.getElementById('modal-fechado-texto');
  if (el) el.textContent = msg;
  document.getElementById('modal-fechado').classList.add('ativo');
}

function fecharModalFechado() {
  document.getElementById('modal-fechado').classList.remove('ativo');
}

// ── WHATSAPP ─────────────────────────────────────────────────
function enviarWhatsApp() {
  if (!carrinho.length) {
    alert('Adicione pelo menos um item!');
    return;
  }

  if (!estaAberto) {
    const now = new Date();
    const msg = mensagemFechado(now.getDay(), now.getHours() * 60 + now.getMinutes());
    mostrarModalFechado(msg);
    return;
  }

  const tipo      = document.querySelector('input[name="tipo"]:checked').value;
  const pagamento = document.querySelector('input[name="pagamento"]:checked')?.value || 'nao_informado';
  const obs       = document.getElementById('obsInput').value.trim();
  const total     = carrinho.reduce((a, i) => a + i.preco, 0);

  const labelPagamento = {
    pix:     `💚 Pix (chave: ${PIX_CHAVE})`,
    debito:  '💳 Cartão de Débito (maquininha)',
    credito: '💳 Cartão de Crédito (maquininha)',
  }[pagamento] || 'Não informado';

  let msg = `🍕 *Pedido – Pizzaria PG Nina*\n\n`;
  carrinho.forEach(it => {
    msg += `• *${it.nome}* — R$ ${fmt(it.preco)}\n  _${it.detalhe}_\n`;
  });
  msg += `\n💰 *Total: R$ ${fmt(total)}*`;
  msg += `\n📦 *Tipo:* ${tipo === 'entrega' ? '🛵 Entrega' : '🏃 Retirada'}`;
  msg += `\n💳 *Pagamento:* ${labelPagamento}`;
  if (obs) msg += `\n📝 *Obs:* ${obs}`;
  msg += `\n\n_Pedido feito pelo site da Pizzaria PG Nina_ 🍕`;

  window.open(`https://wa.me/5542998345573?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── UTILITÁRIO ───────────────────────────────────────────────
const fmt = v => v.toFixed(2).replace('.', ',');

// ── INICIALIZAÇÃO ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTamanhos();
  renderBebidas();
  verificarStatus();
  setInterval(verificarStatus, 60_000);

  if (!estaAberto) {
    const now = new Date();
    const popupTexto = document.getElementById('popup-fechado-texto');
    if (popupTexto) {
      popupTexto.textContent = mensagemFechado(now.getDay(), now.getHours() * 60 + now.getMinutes());
    }
    document.getElementById('popup-fechado').classList.add('visivel');
  }

  document.querySelectorAll('input[name="pagamento"]').forEach(radio => {
    radio.addEventListener('change', onPagamentoChange);
  });

  const saboresGrid = document.getElementById('sabores-grid');
  if (saboresGrid) {
    saboresGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.sabor-card');
      if (card && !card.classList.contains('bloqueado')) {
        toggleSabor(Number(card.dataset.idx));
      }
    });
  }
});
