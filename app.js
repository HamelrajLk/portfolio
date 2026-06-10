/* ===== Hamelraj portfolio — app ===== */
(function () {
  const P = window.PORTFOLIO;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- NEURAL NETWORK CANVAS ---------- */
  const canvas = document.getElementById('neural');
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], DPR = Math.min(window.devicePixelRatio || 1, 2);
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width = innerWidth * DPR;
    H = canvas.height = innerHeight * DPR;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    const count = Math.min(96, Math.floor((innerWidth * innerHeight) / 16000));
    nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28 * DPR,
        vy: (Math.random() - 0.5) * 0.28 * DPR,
        r: (Math.random() * 1.6 + 0.8) * DPR
      });
    }
  }
  resize();
  addEventListener('resize', resize);
  addEventListener('mousemove', e => { mouse.x = e.clientX * DPR; mouse.y = e.clientY * DPR; });
  addEventListener('mouseleave', () => { mouse.x = mouse.y = -9999; });

  const LINK = 130 * DPR, MOUSE_R = 180 * DPR;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      // gentle mouse attraction
      const mdx = mouse.x - n.x, mdy = mouse.y - n.y;
      const md = Math.hypot(mdx, mdy);
      if (md < MOUSE_R) {
        n.x += (mdx / md) * 0.5;
        n.y += (mdy / md) * 0.5;
      }
    }
    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          const op = (1 - d / LINK) * 0.5;
          ctx.strokeStyle = `rgba(110,231,255,${op})`;
          ctx.lineWidth = DPR * 0.6;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    // nodes
    for (const n of nodes) {
      const md = Math.hypot(mouse.x - n.x, mouse.y - n.y);
      const near = md < MOUSE_R;
      ctx.fillStyle = near ? 'rgba(110,231,255,0.95)' : 'rgba(150,200,220,0.55)';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      if (near) {
        ctx.fillStyle = 'rgba(110,231,255,0.12)';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2); ctx.fill();
      }
    }
    raf = requestAnimationFrame(draw);
  }
  let raf;
  if (!reduce) draw();
  else { // static render once
    draw(); cancelAnimationFrame(raf);
  }

  /* ---------- NAV SCROLL ---------- */
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', scrollY > 40);
  });

  /* ---------- ROLE TYPEWRITER ---------- */
  const roleEl = document.getElementById('role');
  let ri = 0, ci = 0, deleting = false;
  function typeRole() {
    const full = P.roles[ri];
    if (!deleting) {
      roleEl.textContent = full.slice(0, ++ci);
      if (ci === full.length) { deleting = true; return setTimeout(typeRole, 1900); }
    } else {
      roleEl.textContent = full.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % P.roles.length; }
    }
    setTimeout(typeRole, deleting ? 38 : 70);
  }
  if (reduce) roleEl.textContent = P.roles[0]; else typeRole();

  /* ---------- TERMINAL (hero variant) ---------- */
  const termLines = [
    { html: '<span class="cmt"># whoami</span>' },
    { html: '<span class="pr">hamelraj@dev</span> <span class="v">Full-Stack &amp; AI Engineer</span>' },
    { html: '<span class="cmt"># core_stack</span>' },
    { html: '<span class="k">languages</span> = [<span class="s">"PHP"</span>, <span class="s">"Python"</span>, <span class="s">"TypeScript"</span>]' },
    { html: '<span class="k">frameworks</span> = [<span class="s">"Laravel"</span>, <span class="s">"Vue"</span>, <span class="s">"FastAPI"</span>]' },
    { html: '<span class="cmt"># now_building</span>' },
    { html: '<span class="k">ai</span> = [<span class="s">"RAG"</span>, <span class="s">"Agents"</span>, <span class="s">"Custom GPT"</span>]' },
    { html: '<span class="pr">$</span> <span class="v">experience --years</span> <span class="s">11+</span>' }
  ];
  let termStarted = false;
  function runTerminal() {
    if (termStarted) return; termStarted = true;
    const body = document.getElementById('termBody');
    body.innerHTML = '';
    let li = 0;
    function next() {
      if (li >= termLines.length) {
        const c = document.createElement('span'); c.className = 'cursor'; c.style.marginLeft = '2px';
        body.appendChild(document.createElement('br')); body.appendChild(c);
        return;
      }
      const d = document.createElement('div');
      d.innerHTML = termLines[li].html;
      d.style.opacity = 0; d.style.transition = '.3s';
      body.appendChild(d);
      requestAnimationFrame(() => d.style.opacity = 1);
      li++;
      setTimeout(next, reduce ? 0 : 320);
    }
    next();
  }

  /* ---------- HERO SWITCHER ---------- */
  const savedHero = localStorage.getItem('hr_hero') || 'split';
  setHero(savedHero);
  document.querySelectorAll('#heroSwitch button').forEach(b => {
    b.addEventListener('click', () => setHero(b.dataset.h));
  });
  function setHero(h) {
    document.body.dataset.hero = h;
    localStorage.setItem('hr_hero', h);
    document.querySelectorAll('#heroSwitch button').forEach(b => b.classList.toggle('on', b.dataset.h === h));
    if (h === 'terminal') { termStarted = false; runTerminal(); }
  }

  /* ---------- RENDER STACK ---------- */
  document.getElementById('stackGrid').innerHTML = P.stack.map(s => `
    <div class="stack-card ${s.ai ? 'ai' : ''}" data-tilt>
      <h3>${s.ai ? '&#x2728; ' : ''}${s.title}<span class="num">${s.num}</span></h3>
      <div class="chips">${s.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
    </div>`).join('');
  // cursor glow follow
  document.querySelectorAll('.stack-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- RENDER TIMELINE ---------- */
  document.getElementById('timeline').innerHTML = P.experience.map(x => `
    <div class="tl-item ${x.current ? 'cur' : ''}">
      <div class="tl-dot"></div>
      <div class="tl-head">
        <span class="tl-role">${x.role}</span>
        <span class="tl-when">${x.when}</span>
      </div>
      <div class="tl-co">${x.company}<span class="badge">${x.country}</span></div>
      <ul class="tl-list">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('');

  /* ---------- RENDER PROJECTS ---------- */
  document.getElementById('projGrid').innerHTML = P.projects.map(p => `
    <a class="proj" href="${p.url}" target="_blank" rel="noopener">
      <div class="proj-top">
        <span class="proj-idx">${p.idx}</span>
        <span class="proj-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg></span>
      </div>
      <div class="proj-body">
        <div class="domain">${p.domain}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="proj-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </a>`).join('');

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- CHATBOT ---------- */
  const panel = document.getElementById('chatPanel');
  const fab = document.getElementById('chatFab');
  const msgs = document.getElementById('chatMsgs');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const suggWrap = document.getElementById('chatSugg');
  const statusEl = document.getElementById('chatStatus');
  let greeted = false;
  const hasLiveAI = !!(window.claude && typeof window.claude.complete === 'function');
  statusEl.textContent = hasLiveAI ? '● live AI · powered by Claude' : 'trained on my CV';

  window.openChat = function () {
    panel.classList.add('open'); fab.style.display = 'none';
    if (!greeted) {
      greeted = true;
      addMsg('bot', "Hi! I'm Hamelraj's AI assistant. Ask me anything about his <b>experience, skills, AI work or projects</b> — I'll answer instantly.");
      renderSugg();
    }
    setTimeout(() => input.focus(), 300);
  };
  window.closeChat = function () { panel.classList.remove('open'); fab.style.display = 'flex'; };

  function addMsg(who, html) {
    const d = document.createElement('div');
    d.className = 'msg ' + who; d.innerHTML = html;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    return d;
  }
  function renderSugg() {
    suggWrap.innerHTML = P.suggestions.map(s => `<button>${s}</button>`).join('');
    suggWrap.querySelectorAll('button').forEach(b =>
      b.addEventListener('click', () => { input.value = b.textContent; form.requestSubmit(); }));
  }
  function showTyping() {
    const d = document.createElement('div');
    d.className = 'msg bot typing'; d.id = '__typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
  }
  function hideTyping() { const t = document.getElementById('__typing'); if (t) t.remove(); }

  // static keyword fallback (works on GitHub Pages with no server)
  function localAnswer(q) {
    const s = q.toLowerCase();
    let best = null, bestScore = 0;
    for (const item of P.faq) {
      let score = 0;
      for (const kw of item.k) if (s.includes(kw)) score += kw.length;
      if (score > bestScore) { bestScore = score; best = item; }
    }
    return best ? best.a : P.fallbackDefault;
  }

  // build context for live AI
  function buildPrompt(q) {
    const ctxText = [
      "You are the AI assistant for Hamelraj Rajendran's portfolio website. Answer questions about him in first-person-adjacent, warm, concise (2-4 sentence) form. Use ONLY the facts below. If asked something unrelated, gently steer back to his work. Never invent facts.",
      "",
      "FACTS:",
      "- Full-Stack Software Engineer, 11+ years (PHP, Laravel, Vue.js, modern JS).",
      "- Now specialises in AI: RAG pipelines, AI agents, Custom GPTs using OpenAI, Claude, LangChain; VectorDB (Pinecone).",
      "- Stack: PHP, Python, Node.js, TypeScript; Laravel, FastAPI, Symfony; Vue, React, Next.js; MySQL, PostgreSQL, MongoDB, Redis; AWS, GCP, Docker, Kubernetes, CI/CD.",
      "- Current role: Senior Web Developer at Effective Consumable Solutions (UK), Sep 2025–present (WordPress, Lead Forensics/Mailchimp APIs, GrapeJS builder).",
      "- Mad Paws (Australia, 2023-2024): RESTful APIs, payment system, sprint planning, New Relic/Kibana.",
      "- Opus Xenta (2019-2023): Associate Tech Lead, Byondcloud product, Digital Mapping & Memorialization feature owner, led team & code reviews.",
      "- Multiblity (2016-2019): Skyplan aviation APIs, Swagger/Apidoc, XML data pipelines.",
      "- Prudential Shipping Line (2014-2016): logistics web apps, supply-chain modules.",
      "- Education: MSc Advanced Computer Science, University of Chester UK (completed 2026); BSc IT, Aquinas College Sri Lanka. Java SE 6 Certified.",
      "- Based in United Kingdom. Contact: hamelraj89@gmail.com, +44 740 501 4119. GitHub: HamelrajLk, LinkedIn: hamelraj.",
      "- Projects: Byondcloud Cemetery Mapping, Skyplan aviation platform, Mad Paws marketplace.",
      "",
      "QUESTION: " + q
    ].join("\n");
    return ctxText;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    addMsg('user', q.replace(/</g, '&lt;'));
    input.value = ''; suggWrap.innerHTML = '';
    showTyping();

    if (hasLiveAI) {
      try {
        const res = await window.claude.complete(buildPrompt(q));
        hideTyping();
        addMsg('bot', (res || localAnswer(q)).replace(/\n/g, '<br>'));
      } catch (err) {
        hideTyping();
        addMsg('bot', localAnswer(q));
      }
    } else {
      // simulate a short think for the static fallback
      setTimeout(() => { hideTyping(); addMsg('bot', localAnswer(q)); }, 480);
    }
  });
})();
