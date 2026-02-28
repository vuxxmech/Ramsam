const baseEntries = [
  { tag: 'memory', text: 'You do not remember your childhood as it happened. You remember the final edit your adult mind was willing to archive.' },
  { tag: 'identity', text: 'Most people call themselves authentic when they finally find a mask that gets rewarded.' },
  { tag: 'time', text: 'The future is terrifying because it keeps arriving with your name already on the paperwork.' },
  { tag: 'agency', text: 'You call it free will because admitting you are predictable would collapse your pride.' },
  { tag: 'loneliness', text: 'No one can meet you where you actually think; they can only visit the summary you publish.' },
  { tag: 'death', text: 'Death is not only an ending. It is the exposure of every excuse that required infinite tomorrows.' },
  { tag: 'language', text: 'Language is a shared hallucination that lets strangers coordinate grief.' },
  { tag: 'work', text: 'A salary is often hush money paid in installments so you do not scream at the architecture of your week.' },
  { tag: 'love', text: 'Love feels safe until you realize the other person is memorizing where to cut if they ever leave.' },
  { tag: 'technology', text: 'Your phone is not stealing your attention; it is leasing your nervous system by the hour.' },
  { tag: 'ethics', text: 'Morality becomes convenient whenever your comfort is seated at the jury table.' },
  { tag: 'regret', text: 'Regret is intelligence arriving late with perfect hindsight and no bargaining power.' },
  { tag: 'body', text: 'Your body keeps score in muscle, gut, and pulse long after your narrative claims you moved on.' },
  { tag: 'faith', text: 'Many prayers are negotiations with silence, hoping the silence mishears your terms.' },
  { tag: 'society', text: 'Civilization is a truce between appetites, enforced by people one panic away from violating it.' },
  { tag: 'truth', text: 'Truth does not care whether you can survive knowing it.' },
  { tag: 'parenthood', text: 'Every parent eventually notices their fear speaking through their child in first person.' },
  { tag: 'guilt', text: 'Guilt is memory refusing to dissolve just because the calendar changed.' },
  { tag: 'aging', text: 'Aging is waking up inside a body that still answers to your name but no longer takes your orders.' },
  { tag: 'choice', text: 'Most life decisions are made once emotionally, then defended intellectually for years.' },
  { tag: 'grief', text: 'Grief is love forced to continue in a room where the door has been removed.' },
  { tag: 'shame', text: 'Shame is the internal crowd you carry after the actual crowd has gone home.' },
  { tag: 'history', text: 'History is not what happened; it is what power managed to footnote convincingly.' },
  { tag: 'control', text: 'Control is usually panic wearing a tailored suit.' },
  { tag: 'anxiety', text: 'Anxiety is your imagination proving it can generate disasters faster than reality can.' },
  { tag: 'justice', text: 'Justice delayed does not only injure victims. It educates bystanders to stay quiet.' },
  { tag: 'family', text: 'Family can be where you first learned devotion and where you first learned to disappear.' },
  { tag: 'capital', text: 'Markets price scarcity, not meaning; that is why your best moments are financially inefficient.' },
  { tag: 'mortality', text: 'Every plan secretly assumes your organs will continue honoring their contract.' },
  { tag: 'self', text: 'You are partly a biography and partly an emergency response system trained by old weather.' },
  { tag: 'attention', text: 'What you repeatedly notice becomes what you eventually call your personality.' },
  { tag: 'violence', text: 'Violence begins in language long before it reaches bone.' },
  { tag: 'intimacy', text: 'Intimacy is terrifying because someone finally gains audit access to your contradictions.' },
  { tag: 'capitalism', text: 'Late capitalism monetizes your loneliness, then sells you productivity advice as treatment.' },
  { tag: 'hope', text: 'Hope is dangerous because it keeps reopening cases your despair already closed.' },
  { tag: 'ritual', text: 'Ritual is memory with choreography, repeated until fear learns the steps.' },
  { tag: 'forgiveness', text: 'Forgiveness is not absolution; it is refusing to lease your future to an old offense.' },
  { tag: 'silence', text: 'Silence is rarely empty. It is usually crowded with what people decided was unsafe to say.' },
  { tag: 'power', text: 'Power is the privilege of having your panic interpreted as policy.' },
  { tag: 'desire', text: 'Desire does not ask whether an object is good for you; it only asks if it can possess your pulse.' },
  { tag: 'betrayal', text: 'Betrayal hurts because trust handed someone your map and they used it to target the foundation.' },
  { tag: 'legacy', text: 'Legacy is what remains when your explanations expire.' },
  { tag: 'conscience', text: 'Conscience is the witness in you that cannot be cross-examined into silence.' },
  { tag: 'digital', text: 'The internet does not forget; it just waits for a new context to weaponize old fragments.' },
  { tag: 'meaning', text: 'Meaning is handmade under pressure; there is no factory model for a human life.' },
  { tag: 'suffering', text: 'Suffering asks questions no classroom can grade honestly.' },
  { tag: 'despair', text: 'Despair sounds rational because it never has to propose a next step.' },
  { tag: 'responsibility', text: 'Responsibility is heavy because reality does not accept intent as payment.' },
  { tag: 'memory', text: 'You fear being forgotten, yet most days you are forgetting yourself in real time.' },
  { tag: 'culture', text: 'Culture is collective habit plus selective amnesia.' },
  { tag: 'existence', text: 'Existence is not a question you solve. It is a sentence you serve.' }
];

const apertures = [
  'hospital waiting room at 3:12 a.m.',
  'courtroom where nobody says the victim’s name correctly',
  'empty office lit by one vending-machine glow',
  'kitchen sink after the argument ended but not resolved',
  'childhood bedroom kept untouched as a shrine',
  'airport terminal full of delayed departures and quiet panic',
  'group chat after someone says “we need to talk”',
  'nursing home hallway that smells like antiseptic and old perfume',
  'police report written in passive voice',
  'graduation stage where debt is smiling in every photo',
  'funeral line where everyone asks how you are doing',
  'parking lot after a midnight shift',
  'bedside monitor beeping a little too steadily',
  'apartment with thin walls and no private grief',
  'school reunion where success is performed like theater'
];

const fractures = [
  'you realize relief and numbness have started to feel identical',
  'you hear your own voice and recognize your parent’s unresolved fear',
  'you understand apology without repair is just reputation maintenance',
  'you notice everyone discussing outcomes and nobody discussing harm',
  'you remember that being needed is not the same thing as being loved',
  'you watch laughter become a legal strategy to avoid accountability',
  'you discover your discipline was mostly fear with better branding',
  'you sense that certainty is often grief refusing to update',
  'you see how quickly convenience can impersonate morality',
  'you feel your identity tighten around what strangers can applaud',
  'you realize your best trait was once a survival adaptation',
  'you admit your schedule has become an alibi against intimacy',
  'you learn that closure is mostly a story told by exhausted people',
  'you notice memory keeps editing out details that threaten your innocence',
  'you finally say the truth and lose the room anyway'
];

const consequences = [
  'and the ceiling suddenly feels lower.',
  'and your chest starts negotiating with gravity.',
  'and every future plan sounds like a legal disclaimer.',
  'and your reflection looks like a witness, not a friend.',
  'and the room gets quieter than your heartbeat can tolerate.',
  'and time starts moving like wet concrete.',
  'and you understand why denial is a thriving industry.',
  'and your hands remember old tremors your mind had renamed discipline.',
  'and mercy sounds expensive for the first time.',
  'and hope becomes a muscle that burns when used.',
  'and sleep feels like a temporary ceasefire instead of rest.',
  'and your pulse writes a confession your mouth won’t sign.',
  'and the word “later” loses legal force.',
  'and your compassion grows teeth.',
  'and you leave knowing innocence is unrecoverable.'
];

const feed = document.querySelector('#entryFeed');
const savedFeed = document.querySelector('#savedFeed');
const template = document.querySelector('#entryTemplate');
const entryCount = document.querySelector('#entryCount');
const savedCount = document.querySelector('#savedCount');
const loadMoreBtn = document.querySelector('#loadMoreBtn');
const modeBtn = document.querySelector('#modeBtn');

let rendered = 0;
const seen = new Set();
const saved = new Map();

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeSyntheticEntry() {
  const text = `In the ${randomPick(apertures)}, ${randomPick(fractures)}, ${randomPick(consequences)}`;
  return { tag: 'procedural', text };
}

function nextEntry() {
  if (rendered < baseEntries.length) {
    return baseEntries[rendered];
  }

  let candidate = makeSyntheticEntry();
  let attempts = 0;
  while (seen.has(candidate.text) && attempts < 10) {
    candidate = makeSyntheticEntry();
    attempts += 1;
  }
  return candidate;
}

function updateStats() {
  entryCount.textContent = rendered.toLocaleString();
  savedCount.textContent = saved.size.toString();
}

function addSavedCard(entry) {
  if (saved.has(entry.text)) return;
  saved.set(entry.text, entry);

  const card = document.createElement('article');
  card.className = 'saved-card';
  card.innerHTML = `<p class="entry-text">${entry.text}</p><small class="entry-tag">${entry.tag}</small>`;
  savedFeed.prepend(card);
  updateStats();
}

function buildCard(entry) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.querySelector('.entry-text').textContent = entry.text;
  node.querySelector('.entry-tag').textContent = entry.tag;

  const saveButton = node.querySelector('.save-btn');
  saveButton.addEventListener('click', () => addSavedCard(entry));

  node.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
      addSavedCard(entry);
    }
  });

  return node;
}

function renderBatch(size = 18) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < size; i += 1) {
    const entry = nextEntry();
    seen.add(entry.text);
    rendered += 1;
    fragment.append(buildCard(entry));
  }

  feed.append(fragment);
  updateStats();
}

function maybeRenderOnScroll() {
  const threshold = document.documentElement.scrollHeight - window.innerHeight * 1.4;
  if (window.scrollY > threshold) {
    renderBatch(12);
  }
}

loadMoreBtn.addEventListener('click', () => renderBatch(18));
modeBtn.addEventListener('click', () => document.body.classList.toggle('cold'));
window.addEventListener('scroll', maybeRenderOnScroll);

renderBatch(30);
