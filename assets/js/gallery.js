(async () => {
  const root = document.querySelector('#gallery');
  if (!root) return;
  const search = document.querySelector('#search');
  const fields = {
    people: document.querySelector('#people'),
    type: document.querySelector('#type'),
    location: document.querySelector('#location'),
    period: document.querySelector('#period'),
    status: document.querySelector('#status')
  };
  const counter = document.querySelector('#gallery-count');
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr');
  const fill = (select, values) => {
    if (!select) return;
    const unique = [...new Set(values.filter(Boolean))].sort((a,b) => a.localeCompare(b, 'fr'));
    for (const value of unique) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.append(option);
    }
  };
  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };
  try {
    const response = await fetch('./data/illustrations.json');
    if (!response.ok) throw new Error('catalogue inaccessible');
    const result = await response.json();
    const items = (result.items || []).filter(it => it.universe === 'battlecry' && it.spoilers === 'public');
    for (const key of ['people', 'type', 'location', 'period']) fill(fields[key], items.map(it => it[key]));
    const render = () => {
      root.replaceChildren();
      const term = normalize(search.value.trim());
      let shown = 0;
      for (const it of items) {
        if (['people','type','location','period','status'].some(key => fields[key] && fields[key].value && fields[key].value !== (it[key] || ''))) continue;
        if (term && !normalize([it.title,it.description,it.people,it.type,it.location,it.period,it.trigger].join(' ')).includes(term)) continue;
        shown++;
        const card = make('article', 'card');
        const thumb = make('div', 'thumb');
        if (it.status === 'ready' && it.file) {
          const img = document.createElement('img');
          img.src = it.file;
          img.alt = it.title;
          img.loading = 'lazy';
          img.addEventListener('error', () => { thumb.textContent = 'Image indisponible'; }, {once:true});
          thumb.append(img);
        } else {
          thumb.textContent = 'Illustration à préparer';
        }
        const tag = make('div', 'tag', [it.people,it.type].filter(Boolean).join(' · '));
        const h = make('h3', '', it.title);
        const p = make('p', 'small', it.description);
        card.append(thumb,tag,h,p);
        if (it.period) card.append(make('p','small','Période : '+it.period));
        if (it.trigger) card.append(make('p','small','À montrer : '+it.trigger));
        if (it.status === 'ready' && it.file) {
          const link = make('a','', "Ouvrir l'image");
          link.href = it.file;
          card.append(link);
        }
        root.append(card);
      }
      if (counter) counter.textContent = shown + ' illustration' + (shown === 1 ? '' : 's') + ' dans cette sélection';
      if (!shown) root.append(make('div','empty','Aucune illustration dans cette sélection.'));
    };
    search.addEventListener('input',render);
    for (const field of Object.values(fields)) if (field) field.addEventListener('change',render);
    render();
  } catch (error) {
    root.textContent = 'Le catalogue ne peut pas être chargé pour le moment.';
    if (counter) counter.textContent = '';
  }
})();
