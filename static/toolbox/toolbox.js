// =====================================================================
// Blood on the Clocktower — Toolbox
// =====================================================================

const STORAGE_KEY = 'botc-toolbox-state';

// ---- Character Database ----
const CHARACTERS = [
  {name:"Acrobat",type:"townsfolk",edition:null,experimental:true},
  {name:"Alchemist",type:"townsfolk",edition:null,experimental:true},
  {name:"Alsaahir",type:"townsfolk",edition:null,experimental:true},
  {name:"Amnesiac",type:"townsfolk",edition:null,experimental:true},
  {name:"Artist",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Atheist",type:"townsfolk",edition:null,experimental:true},
  {name:"Balloonist",type:"townsfolk",edition:null,experimental:true},
  {name:"Banshee",type:"townsfolk",edition:null,experimental:true},
  {name:"Bounty Hunter",type:"townsfolk",edition:null,experimental:true},
  {name:"Cannibal",type:"townsfolk",edition:null,experimental:true},
  {name:"Chambermaid",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Chef",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Choirboy",type:"townsfolk",edition:null,experimental:true},
  {name:"Clockmaker",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Courtier",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Cult Leader",type:"townsfolk",edition:null,experimental:true},
  {name:"Dreamer",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Empath",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Engineer",type:"townsfolk",edition:null,experimental:true},
  {name:"Exorcist",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Farmer",type:"townsfolk",edition:null,experimental:true},
  {name:"Fisherman",type:"townsfolk",edition:null,experimental:true},
  {name:"Flowergirl",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Fool",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Fortune Teller",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Gambler",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"General",type:"townsfolk",edition:null,experimental:true},
  {name:"Gossip",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Grandmother",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Guard",type:"townsfolk",edition:"loup-garou",homemade:true},
  {name:"High Priestess",type:"townsfolk",edition:null,experimental:true},
  {name:"Hunter",type:"townsfolk",edition:"loup-garou",homemade:true},
  {name:"Huntsman",type:"townsfolk",edition:null,experimental:true},
  {name:"Innkeeper",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Investigator",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Juggler",type:"townsfolk",edition:"sects-and-violets"},
  {name:"King",type:"townsfolk",edition:null,experimental:true},
  {name:"Knight",type:"townsfolk",edition:null,experimental:true},
  {name:"Librarian",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Lycanthrope",type:"townsfolk",edition:null,experimental:true},
  {name:"Magician",type:"townsfolk",edition:null,experimental:true},
  {name:"Mathematician",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Mayor",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Minstrel",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Monk",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Nightwatchman",type:"townsfolk",edition:null,experimental:true},
  {name:"Noble",type:"townsfolk",edition:null,experimental:true},
  {name:"Oracle",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Pacifist",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Philosopher",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Pixie",type:"townsfolk",edition:null,experimental:true},
  {name:"Poppy Grower",type:"townsfolk",edition:null,experimental:true},
  {name:"Preacher",type:"townsfolk",edition:null,experimental:true},
  {name:"Princess",type:"townsfolk",edition:null,experimental:true},
  {name:"Professor",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Ravenkeeper",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Sage",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Sailor",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Savant",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Seamstress",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Seer",type:"townsfolk",edition:"loup-garou",homemade:true},
  {name:"Shugenja",type:"townsfolk",edition:null,experimental:true},
  {name:"Slayer",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Snake Charmer",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Soldier",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Steward",type:"townsfolk",edition:null,experimental:true},
  {name:"Tea Lady",type:"townsfolk",edition:"bad-moon-rising"},
  {name:"Town Crier",type:"townsfolk",edition:"sects-and-violets"},
  {name:"Undertaker",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Village Idiot",type:"townsfolk",edition:null,experimental:true},
  {name:"Virgin",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Washerwoman",type:"townsfolk",edition:"trouble-brewing"},
  {name:"Witch",type:"townsfolk",edition:"loup-garou",homemade:true},
  {name:"Barber",type:"outsiders",edition:"sects-and-violets"},
  {name:"Butler",type:"outsiders",edition:"trouble-brewing"},
  {name:"Damsel",type:"outsiders",edition:null,experimental:true},
  {name:"Drunk",type:"outsiders",edition:"trouble-brewing"},
  {name:"Elder",type:"outsiders",edition:"loup-garou",homemade:true},
  {name:"Golem",type:"outsiders",edition:null,experimental:true},
  {name:"Goon",type:"outsiders",edition:"bad-moon-rising"},
  {name:"Hatter",type:"outsiders",edition:null,experimental:true},
  {name:"Heretic",type:"outsiders",edition:null,experimental:true},
  {name:"Hermit",type:"outsiders",edition:null,experimental:true},
  {name:"Klutz",type:"outsiders",edition:"sects-and-violets"},
  {name:"Lunatic",type:"outsiders",edition:"bad-moon-rising"},
  {name:"Moonchild",type:"outsiders",edition:"bad-moon-rising"},
  {name:"Mutant",type:"outsiders",edition:"sects-and-violets"},
  {name:"Ogre",type:"outsiders",edition:null,experimental:true},
  {name:"Plague Doctor",type:"outsiders",edition:null,experimental:true},
  {name:"Politician",type:"outsiders",edition:null,experimental:true},
  {name:"Puzzlemaster",type:"outsiders",edition:null,experimental:true},
  {name:"Qutler",type:"outsiders",edition:null,experimental:true},
  {name:"Recluse",type:"outsiders",edition:"trouble-brewing"},
  {name:"Saint",type:"outsiders",edition:"trouble-brewing"},
  {name:"Snitch",type:"outsiders",edition:null,experimental:true},
  {name:"Sweetheart",type:"outsiders",edition:"sects-and-violets"},
  {name:"Tinker",type:"outsiders",edition:"bad-moon-rising"},
  {name:"Zealot",type:"outsiders",edition:null,experimental:true},
  {name:"Assassin",type:"minions",edition:"bad-moon-rising"},
  {name:"Baron",type:"minions",edition:"trouble-brewing"},
  {name:"Boffin",type:"minions",edition:null,experimental:true},
  {name:"Boomdandy",type:"minions",edition:null,experimental:true},
  {name:"Cerenovus",type:"minions",edition:"sects-and-violets"},
  {name:"Cupid",type:"minions",edition:"loup-garou",homemade:true},
  {name:"Devil's Advocate",type:"minions",edition:"bad-moon-rising"},
  {name:"Evil Twin",type:"minions",edition:"sects-and-violets"},
  {name:"Fearmonger",type:"minions",edition:null,experimental:true},
  {name:"Goblin",type:"minions",edition:null,experimental:true},
  {name:"Godfather",type:"minions",edition:"bad-moon-rising"},
  {name:"Harpy",type:"minions",edition:null,experimental:true},
  {name:"Marionette",type:"minions",edition:null,experimental:true},
  {name:"Mastermind",type:"minions",edition:"bad-moon-rising"},
  {name:"Mezepheles",type:"minions",edition:null,experimental:true},
  {name:"Organ Grinder",type:"minions",edition:null,experimental:true},
  {name:"Pit-Hag",type:"minions",edition:"sects-and-violets"},
  {name:"Poisoner",type:"minions",edition:"trouble-brewing"},
  {name:"Psychopath",type:"minions",edition:null,experimental:true},
  {name:"Scarlet Woman",type:"minions",edition:"trouble-brewing"},
  {name:"Spy",type:"minions",edition:"trouble-brewing"},
  {name:"Summoner",type:"minions",edition:null,experimental:true},
  {name:"Thief",type:"minions",edition:"loup-garou",homemade:true},
  {name:"Vizier",type:"minions",edition:null,experimental:true},
  {name:"Widow",type:"minions",edition:null,experimental:true},
  {name:"Witch",type:"minions",edition:"sects-and-violets"},
  {name:"Wizard",type:"minions",edition:null,experimental:true},
  {name:"Wraith",type:"minions",edition:null,experimental:true},
  {name:"Xaan",type:"minions",edition:null,experimental:true},
  {name:"Al-Hadikhia",type:"demons",edition:null,experimental:true},
  {name:"Fang Gu",type:"demons",edition:"sects-and-violets"},
  {name:"Imp",type:"demons",edition:"trouble-brewing"},
  {name:"Kazali",type:"demons",edition:null,experimental:true},
  {name:"Legion",type:"demons",edition:null,experimental:true},
  {name:"Leviathan",type:"demons",edition:null,experimental:true},
  {name:"Lil' Monsta",type:"demons",edition:null,experimental:true},
  {name:"Lleech",type:"demons",edition:null,experimental:true},
  {name:"Lord of Typhon",type:"demons",edition:null,experimental:true},
  {name:"No Dashii",type:"demons",edition:"sects-and-violets"},
  {name:"Ojo",type:"demons",edition:null,experimental:true},
  {name:"Po",type:"demons",edition:"bad-moon-rising"},
  {name:"Pukka",type:"demons",edition:"bad-moon-rising"},
  {name:"Riot",type:"demons",edition:null,experimental:true},
  {name:"Shabaloth",type:"demons",edition:"bad-moon-rising"},
  {name:"Vigormortis",type:"demons",edition:"sects-and-violets"},
  {name:"Vortox",type:"demons",edition:"sects-and-violets"},
  {name:"Werewolf",type:"demons",edition:"loup-garou",homemade:true},
  {name:"Yaggababble",type:"demons",edition:null,experimental:true},
  {name:"Zombuul",type:"demons",edition:"bad-moon-rising"},
  {name:"Apprentice",type:"travellers"},
  {name:"Barista",type:"travellers"},
  {name:"Beggar",type:"travellers"},
  {name:"Bishop",type:"travellers"},
  {name:"Bone Collector",type:"travellers"},
  {name:"Bureaucrat",type:"travellers"},
  {name:"Butcher",type:"travellers"},
  {name:"Cacklejack",type:"travellers"},
  {name:"Deviant",type:"travellers"},
  {name:"Gangster",type:"travellers"},
  {name:"Gnome",type:"travellers"},
  {name:"Gunslinger",type:"travellers"},
  {name:"Harlot",type:"travellers"},
  {name:"Judge",type:"travellers"},
  {name:"Matron",type:"travellers"},
  {name:"Scapegoat",type:"travellers"},
  {name:"Thief",type:"travellers"},
  {name:"Voudon",type:"travellers"},
  {name:"Angel",type:"fabled"},
  {name:"Buddhist",type:"fabled"},
  {name:"Deus ex Fiasco",type:"fabled"},
  {name:"Djinn",type:"fabled"},
  {name:"Doomsayer",type:"fabled"},
  {name:"Duchess",type:"fabled"},
  {name:"Ferryman",type:"fabled"},
  {name:"Fibbin",type:"fabled"},
  {name:"Fiddler",type:"fabled"},
  {name:"Hell's Librarian",type:"fabled"},
  {name:"Revolutionary",type:"fabled"},
  {name:"Sentinel",type:"fabled"},
  {name:"Spirit of Ivory",type:"fabled"},
  {name:"Toymaker",type:"fabled"},
  {name:"Big Wig",type:"loric"},
  {name:"Bootlegger",type:"loric"},
  {name:"Gardener",type:"loric"},
  {name:"God of Ug",type:"loric"},
  {name:"God of Ug (Ug Mode)",type:"loric"},
  {name:"Hindu",type:"loric"},
  {name:"Knaves",type:"loric"},
  {name:"Pope",type:"loric"},
  {name:"Storm Catcher",type:"loric"},
  {name:"Tor",type:"loric"},
  {name:"Ventriloquist",type:"loric"},
  {name:"Zenomancer",type:"loric"}
];

const STATUSES = [
  {id:"dead",label:"Dead",emoji:"💀"},
  {id:"executed",label:"Executed",emoji:"⚔️"},
  {id:"poisoned",label:"Poisoned",emoji:"🧪"},
  {id:"drunk",label:"Drunk",emoji:"🍺"},
  {id:"protected",label:"Protected",emoji:"🛡️"},
  {id:"mad",label:"Mad",emoji:"🤪"},
  {id:"no-ability",label:"No Ability",emoji:"🚫"},
  {id:"ability-used",label:"Ability Used",emoji:"✅"},
  {id:"registered-evil",label:"Reg. as Evil",emoji:"👿"},
  {id:"registered-good",label:"Reg. as Good",emoji:"😇"}
];

function getDefaultState(playerCount) {
  const players = [];
  for (let i = 0; i < playerCount; i++) {
    players.push({name:"",character:null,statuses:[]});
  }
  return {
    playerCount,
    players,
    narratorName: "",
    edition: "",
    journal: [],
    journalCounter: 0,
    notes: ""
  };
}

// ---- State ----
let state = getDefaultState(8);
let selectedPlayer = null;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch(e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed.playerCount === 'number' && Array.isArray(parsed.players)) {
        state = parsed;
        return true;
      }
    }
  } catch(e) {}
  return false;
}

function resetGame() {
  if (!confirm('Start a new game? This will clear all current data.')) return;
  const count = parseInt(document.getElementById('player-count').value) || 8;
  state = getDefaultState(count);
  saveState();
  renderAll();
}

// ---- Character helpers ----
function getCharColor(type) {
  const map = {
    townsfolk:'#3498db', outsiders:'#2c3e50', minions:'#8e44ad',
    demons:'#e74c3c', travellers:'#6b5e4e', fabled:'#f39c12', loric:'#27ae60'
  };
  return map[type] || '#999';
}

function getCharTypeLabel(type) {
  const map = {
    townsfolk:'Townsfolk', outsiders:'Outsider', minions:'Minion',
    demons:'Demon', travellers:'Traveller', fabled:'Fabled', loric:'Loric'
  };
  return map[type] || type;
}

function renderStatusToolbar() {
  const container = document.getElementById('status-toolbar-buttons');
  if (!container) return;
  container.innerHTML = '';

  STATUSES.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'status-btn';
    btn.dataset.statusId = s.id;
    btn.innerHTML = `<span class="status-emoji">${s.emoji}</span> ${s.label}`;

    // Show active if selected player has this status
    if (selectedPlayer !== null && state.players[selectedPlayer]) {
      if (state.players[selectedPlayer].statuses.includes(s.id)) {
        btn.classList.add('active');
      }
    }

    btn.addEventListener('click', () => {
      if (selectedPlayer === null) return;
      toggleStatus(selectedPlayer, s.id);
      saveState();
      renderCircle();
      renderStatusToolbar();
    });
    container.appendChild(btn);
  });
}

// ---- Render ----
function renderAll() {
  renderCircle();
  renderStatusToolbar();
  renderJournal();
  document.getElementById('free-notes').value = state.notes || '';
  document.getElementById('player-count').value = state.playerCount;
}

function renderCircle() {
  const container = document.getElementById('circle-container');
  const total = state.playerCount + 1;
  const size = 580;
  const radius = 220;
  const cx = size / 2;
  const cy = size / 2 - 10;

  container.innerHTML = '';

  for (let i = 0; i < total; i++) {
    const angle = (i / total) * Math.PI * 2 + Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);

    if (i === 0) {
      const el = document.createElement('div');
      el.className = 'player-token narrator-token';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      const narName = state.narratorName || 'Narrator';
      el.innerHTML = '<div class="token-char" style="font-size:1.2rem">📖</div><div class="token-name" style="color:#666;font-size:0.6rem">' + narName + '</div>';

      const narNameEdit = document.createElement('div');
      narNameEdit.className = 'player-name-edit';
      const narNameInput = document.createElement('input');
      narNameInput.type = 'text';
      narNameInput.placeholder = 'Narrator';
      narNameInput.value = state.narratorName || '';
      narNameInput.maxLength = 20;
      narNameInput.addEventListener('input', () => {
        state.narratorName = narNameInput.value;
        saveState();
      });
      narNameInput.addEventListener('click', e => { e.stopPropagation(); });
      narNameEdit.appendChild(narNameInput);
      el.appendChild(narNameEdit);

      container.appendChild(el);
    } else {
      const token = createTokenEl(i - 1);
      token.style.left = x + 'px';
      token.style.top = y + 'px';
      container.appendChild(token);
    }
  }
}

function createTokenEl(index) {
  const player = state.players[index];
  const token = document.createElement('div');
  token.className = 'player-token' + (selectedPlayer === index ? ' selected' : '');
  token.dataset.index = index;

  // Seat number
  const seatNum = document.createElement('div');
  seatNum.className = 'token-seat-num';
  seatNum.textContent = index + 1;
  token.appendChild(seatNum);

  // Statuses
  const statusesEl = document.createElement('div');
  statusesEl.className = 'token-statuses';
  if (player.statuses && player.statuses.length) {
    player.statuses.forEach(sid => {
      const s = STATUSES.find(st => st.id === sid);
      if (s) {
        const badge = document.createElement('span');
        badge.className = 'token-status';
        badge.textContent = s.emoji + ' ' + s.label;
        badge.title = s.label;
        statusesEl.appendChild(badge);
      }
    });
  }
  token.appendChild(statusesEl);

  // Character name
  const charEl = document.createElement('div');
  charEl.className = 'token-char';
  if (player.character) {
    const c = player.character;
    charEl.textContent = c.name;
    token.classList.add('has-char', 'type-' + c.type);
    if (c.type !== 'travellers') {
      token.style.borderColor = getCharColor(c.type);
    }
    charEl.style.color = getCharColor(c.type);

    // Remove char button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'token-remove-char';
    removeBtn.textContent = '✕';
    removeBtn.title = 'Remove character';
    removeBtn.addEventListener('click', e => {
      e.stopPropagation();
      player.character = null;
      saveState();
      renderCircle();
    });
    token.appendChild(removeBtn);
  } else {
    charEl.textContent = '?';
    charEl.style.color = '#ccc';
    const hint = document.createElement('div');
    hint.className = 'assign-hint';
    hint.textContent = 'click to assign';
    token.appendChild(hint);
  }
  token.appendChild(charEl);

  // Name label below token
  const nameEdit = document.createElement('div');
  nameEdit.className = 'player-name-edit';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Player ' + (index + 1);
  nameInput.value = player.name || '';
  nameInput.maxLength = 20;
  nameInput.addEventListener('input', () => {
    player.name = nameInput.value;
    saveState();
  });
  nameInput.addEventListener('click', e => { e.stopPropagation(); });
  nameEdit.appendChild(nameInput);
  token.appendChild(nameEdit);

  // Click to select and open character modal
  token.addEventListener('click', e => {
    if (e.target.tagName === 'INPUT') return;
    selectedPlayer = index;
    renderStatusToolbar();
    openCharModal(index);
  });

  // Right-click for status context menu
  token.addEventListener('contextmenu', e => {
    e.preventDefault();
    showStatusMenu(e.clientX, e.clientY, index);
  });

  // Touch long-press for status menu on mobile
  let longPressTimer = null;
  token.addEventListener('touchstart', e => {
    longPressTimer = setTimeout(() => {
      e.preventDefault();
      const touch = e.touches[0];
      showStatusMenu(touch.clientX, touch.clientY, index);
    }, 500);
  });
  token.addEventListener('touchend', () => { clearTimeout(longPressTimer); });
  token.addEventListener('touchmove', () => { clearTimeout(longPressTimer); });

  return token;
}

function renumberPlayers() {
  const count = parseInt(document.getElementById('player-count').value) || 8;
  if (count < 5) { document.getElementById('player-count').value = 5; return; }
  if (count > 15) { document.getElementById('player-count').value = 15; return; }
  if (count === state.playerCount) return;

  const oldPlayers = state.players;
  const newPlayers = [];
  for (let i = 0; i < count; i++) {
    if (i < oldPlayers.length) {
      newPlayers.push(oldPlayers[i]);
    } else {
      newPlayers.push({name:"",character:null,statuses:[]});
    }
  }
  state.playerCount = count;
  state.players = newPlayers;
  saveState();
  renderCircle();
}

// ---- Character Modal ----
let modalTargetIndex = -1;

function openCharModal(index) {
  modalTargetIndex = index;
  const modal = document.getElementById('char-modal');
  modal.classList.remove('hidden');
  document.getElementById('char-search').value = '';
  document.getElementById('char-type-filter').value = '';
  renderCharList();
}

function closeCharModal() {
  document.getElementById('char-modal').classList.add('hidden');
  modalTargetIndex = -1;
  renderCircle();
  renderStatusToolbar();
}

function renderCharList() {
  const search = document.getElementById('char-search').value.toLowerCase();
  const typeFilter = document.getElementById('char-type-filter').value;
  const editionFilter = document.getElementById('edition-filter').value;

  let chars = CHARACTERS;

  if (typeFilter) {
    chars = chars.filter(c => c.type === typeFilter);
  }
  if (editionFilter) {
    chars = chars.filter(c => c.edition === editionFilter);
  }
  if (search) {
    chars = chars.filter(c => c.name.toLowerCase().includes(search));
  }

  // Sort by type, then name
  const typeOrder = ['townsfolk','outsiders','minions','demons','travellers','fabled','loric'];
  chars.sort((a,b) => {
    const ta = typeOrder.indexOf(a.type);
    const tb = typeOrder.indexOf(b.type);
    if (ta !== tb) return ta - tb;
    return a.name.localeCompare(b.name);
  });

  const list = document.getElementById('char-list');
  list.innerHTML = '';
  chars.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card type-' + c.type;
    const nameSpan = document.createElement('span');
    nameSpan.textContent = c.name;
    card.appendChild(nameSpan);
    if (c.edition) {
      const edSpan = document.createElement('span');
      edSpan.className = 'char-edition';
      edSpan.textContent = ' — ' + c.edition;
      card.appendChild(edSpan);
    }
    if (c.experimental) {
      const edSpan = document.createElement('span');
      edSpan.className = 'char-edition';
      edSpan.textContent = ' — experimental';
      card.appendChild(edSpan);
    }
    card.addEventListener('click', () => {
      assignCharacter(modalTargetIndex, c);
      closeCharModal();
    });
    list.appendChild(card);
  });
}

function assignCharacter(index, char) {
  state.players[index].character = {name:char.name, type:char.type};
  state.players[index].statuses = state.players[index].statuses || [];
  saveState();
  renderCircle();
}

// ---- Status Context Menu ----
let statusMenuIndex = -1;

function showStatusMenu(x, y, index) {
  statusMenuIndex = index;
  const menu = document.getElementById('status-menu');
  const list = document.getElementById('status-list');
  const player = state.players[index];

  list.innerHTML = '';
  STATUSES.forEach(s => {
    const item = document.createElement('div');
    item.className = 'status-item';
    if (player.statuses.includes(s.id)) {
      item.classList.add('active');
    }
    item.innerHTML = `<span class="status-indicator"></span>${s.emoji} ${s.label}`;
    item.addEventListener('click', () => {
      toggleStatus(index, s.id);
      saveState();
      renderCircle();
      hideStatusMenu();
    });
    list.appendChild(item);
  });

  menu.classList.remove('hidden');
  // Position, keeping within viewport
  const mw = 160, mh = 300;
  const vw = window.innerWidth, vh = window.innerHeight;
  let px = Math.min(x, vw - mw);
  let py = Math.min(y, vh - mh);
  if (px < 0) px = 0;
  if (py < 0) py = 0;
  menu.style.left = px + 'px';
  menu.style.top = py + 'px';
}

function hideStatusMenu() {
  document.getElementById('status-menu').classList.add('hidden');
  statusMenuIndex = -1;
}

function toggleStatus(index, statusId) {
  const player = state.players[index];
  const idx = player.statuses.indexOf(statusId);
  if (idx >= 0) {
    player.statuses.splice(idx, 1);
  } else {
    player.statuses.push(statusId);
  }
}

// ---- Journal ----
function renderJournal() {
  const container = document.getElementById('journal-entries');
  container.innerHTML = '';

  if (!state.journal) state.journal = [];

  state.journal.forEach((entry, i) => {
    const div = document.createElement('div');
    div.className = 'journal-entry';

    const label = document.createElement('div');
    label.className = 'phase-label';
    label.textContent = entry.label;
    div.appendChild(label);

    const fields = document.createElement('div');
    fields.className = 'phase-fields';

    // Actions
    const actionsLabel = document.createElement('div');
    actionsLabel.className = 'field-label';
    actionsLabel.textContent = 'Actions / What happened';
    fields.appendChild(actionsLabel);

    const actionsArea = document.createElement('textarea');
    actionsArea.value = entry.actions || '';
    actionsArea.rows = 2;
    actionsArea.addEventListener('input', () => {
      entry.actions = actionsArea.value;
      saveState();
    });
    fields.appendChild(actionsArea);

    // Deaths
    const deathsLabel = document.createElement('div');
    deathsLabel.className = 'field-label';
    deathsLabel.textContent = 'Who died';
    fields.appendChild(deathsLabel);

    const deathsInput = document.createElement('input');
    deathsInput.type = 'text';
    deathsInput.value = entry.deaths || '';
    deathsInput.placeholder = 'e.g. Player 3, Player 7';
    deathsInput.addEventListener('input', () => {
      entry.deaths = deathsInput.value;
      saveState();
    });
    fields.appendChild(deathsInput);

    div.appendChild(fields);
    container.appendChild(div);
  });
}

function addPhase() {
  if (!state.journal) state.journal = [];
  const counter = state.journalCounter || 0;
  const phaseNum = Math.floor(counter / 2) + 1;
  const isNight = counter % 2 === 0;
  const label = isNight ? 'Night ' + phaseNum : 'Day ' + phaseNum;

  state.journal.push({label, actions:'', deaths:''});
  state.journalCounter = counter + 1;
  saveState();
  renderJournal();
}

function clearJournal() {
  if (!confirm('Clear the entire journal?')) return;
  state.journal = [];
  state.journalCounter = 0;
  saveState();
  renderJournal();
}

// ---- Notes ----
function initNotes() {
  const ta = document.getElementById('free-notes');
  ta.addEventListener('input', () => {
    state.notes = ta.value;
    saveState();
  });
}

// ---- Close modal on backdrop click ----
function initModalClose() {
  document.querySelector('.modal-backdrop').addEventListener('click', closeCharModal);
  document.getElementById('btn-close-modal').addEventListener('click', closeCharModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCharModal();
      hideStatusMenu();
    }
  });
  // Close status menu on outside click
  document.addEventListener('click', e => {
    const menu = document.getElementById('status-menu');
    if (!menu.classList.contains('hidden') && !menu.contains(e.target)) {
      hideStatusMenu();
    }
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  const hasSaved = loadState();
  if (!hasSaved) {
    state = getDefaultState(8);
    saveState();
  }

  document.getElementById('player-count').value = state.playerCount;

  // Set edition filter from state
  if (state.edition) {
    document.getElementById('edition-filter').value = state.edition;
  }

  renderAll();
  initNotes();
  initModalClose();

  // Deselect on empty area click
  document.getElementById('circle-container').addEventListener('click', e => {
    if (e.target === document.getElementById('circle-container')) {
      selectedPlayer = null;
      renderStatusToolbar();
      renderCircle();
    }
  });

  // Event listeners
  document.getElementById('player-count').addEventListener('change', renumberPlayers);

  document.getElementById('edition-filter').addEventListener('change', () => {
    state.edition = document.getElementById('edition-filter').value;
    saveState();
  });

  document.getElementById('btn-reset-game').addEventListener('click', resetGame);

  document.getElementById('btn-add-phase').addEventListener('click', addPhase);
  document.getElementById('btn-clear-journal').addEventListener('click', clearJournal);

  // Char search/type filter in modal
  document.getElementById('char-search').addEventListener('input', renderCharList);
  document.getElementById('char-type-filter').addEventListener('change', renderCharList);
});
