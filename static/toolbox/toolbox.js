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
  {name:"Angel",type:"fabled",summary:"Something bad might happen to whoever is most responsible for the death of a new player."},
  {name:"Buddhist",type:"fabled",summary:"For the first 2 minutes of each day, veteran players may not talk."},
  {name:"Deus ex Fiasco",type:"fabled",summary:"At least once per game, the Storyteller will make a mistake, correct it, and publicly admit to it."},
  {name:"Djinn",type:"fabled",summary:"Use the Djinn's special rule. All players know what it is."},
  {name:"Doomsayer",type:"fabled",summary:"If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies."},
  {name:"Duchess",type:"fabled",summary:"Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info."},
  {name:"Ferryman",type:"fabled",summary:"On the final day, all dead players regain their vote token."},
  {name:"Fibbin",type:"fabled",summary:"Once per game, 1 good player might get incorrect information."},
  {name:"Fiddler",type:"fabled",summary:"Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win."},
  {name:"Hell's Librarian",type:"fabled",summary:"Something bad might happen to whoever talks when the Storyteller has asked for silence."},
  {name:"Revolutionary",type:"fabled",summary:"2 neighboring players are known to be the same alignment. Once per game, 1 of them registers falsely."},
  {name:"Sentinel",type:"fabled",summary:"There might be 1 extra or 1 fewer Outsider in play."},
  {name:"Spirit of Ivory",type:"fabled",summary:"There can't be more than 1 extra evil player."},
  {name:"Toymaker",type:"fabled",summary:"The Demon may choose not to attack & must do this at least once per game."},
  {name:"Big Wig",type:"loric",summary:"Each nominee chooses a player: until voting, only they may speak & they are mad the nominee is good or they might die."},
  {name:"Bootlegger",type:"loric",summary:"This script has homebrew characters or rules."},
  {name:"Gardener",type:"loric",summary:"The Storyteller assigns all players' characters."},
  {name:"God of Ug",type:"loric",summary:"One Ug hat. When wear Ug hat, must speak one sound at a time but vote twice."},
  {name:"God of Ug (Ug Mode)",type:"loric",summary:""},
  {name:"Hindu",type:"loric",summary:"The first 4 players to die are immediately reincarnated as Travellers of the same alignment."},
  {name:"Knaves",type:"loric",summary:"There are 2 Storytellers: one lies & one tells the truth. Once per game, at dusk, they might switch."},
  {name:"Pope",type:"loric",summary:"There are duplicate good characters in play. They might also be bluffs."},
  {name:"Storm Catcher",type:"loric",summary:"Name a good character. If in play, they can only die by execution, but evil players learn which player it is."},
  {name:"Tor",type:"loric",summary:"Players don't know their character or alignment. They learn them when they die."},
  {name:"Ventriloquist",type:"loric",summary:"If a player is mad as a fresh character during their nomination, they might not die if executed today."},
  {name:"Zenomancer",type:"loric",summary:"One or more players each have a goal. When achieved, that player learns a piece of true info."},
  // LG - Personnages
  {name:"Abominable Sectaire",type:"minion",edition:"lg-personnages"},
  {name:"Ange",type:"solo",edition:"lg-personnages"},
  {name:"Chevalier à l'épée rouillée",type:"townsfolk",edition:"lg-personnages"},
  {name:"Chien-Loup",type:"werewolf",edition:"lg-personnages"},
  {name:"Comédien",type:"townsfolk",edition:"lg-personnages"},
  {name:"Deux Sœurs",type:"townsfolk",edition:"lg-personnages"},
  {name:"Enfant Sauvage",type:"townsfolk",edition:"lg-personnages"},
  {name:"Grand Méchant Loup",type:"werewolf",edition:"lg-personnages"},
  {name:"Infect Père des Loups",type:"werewolf",edition:"lg-personnages"},
  {name:"Juge Bègue",type:"townsfolk",edition:"lg-personnages"},
  {name:"Loup-Garou Alpha",type:"werewolf",edition:"lg-personnages"},
  {name:"Magicien",type:"townsfolk",edition:"lg-personnages"},
  {name:"Montreur d'Ours",type:"townsfolk",edition:"lg-personnages"},
  {name:"Renard",type:"townsfolk",edition:"lg-personnages"},
  {name:"Servante Dévouée",type:"townsfolk",edition:"lg-personnages"},
  {name:"Trois Frères",type:"townsfolk",edition:"lg-personnages"},
  // LG - Le Village
  {name:"Barbier",type:"townsfolk",edition:"lg-le-village"},
  {name:"Bavard",type:"townsfolk",edition:"lg-le-village"},
  {name:"Bouffon",type:"outsider",edition:"lg-le-village"},
  {name:"Boulanger",type:"townsfolk",edition:"lg-le-village"},
  {name:"Châtelain",type:"townsfolk",edition:"lg-le-village"},
  {name:"Corbeau",type:"townsfolk",edition:"lg-le-village"},
  {name:"Institutrice",type:"townsfolk",edition:"lg-le-village"},
  {name:"Loup-Garou Blanc",type:"werewolf",edition:"lg-le-village"},
  {name:"Pyromane",type:"minion",edition:"lg-le-village"},
  {name:"Rebouteux",type:"townsfolk",edition:"lg-le-village"},
  // LG - Nouvelle Lune
  {name:"Bouc Émissaire",type:"solo",edition:"lg-nouvelle-lune"},
  {name:"Idiot du Village",type:"solo",edition:"lg-nouvelle-lune"},
  {name:"Joueur de Flûte",type:"solo",edition:"lg-nouvelle-lune"},
  {name:"Salvateur",type:"townsfolk",edition:"lg-nouvelle-lune"},
  // LG - Pour une nuit
  {name:"Apprentie Voyante",type:"townsfolk",edition:"lg-pour-une-nuit"},
  {name:"Doppelgänger",type:"outsider",edition:"lg-pour-une-nuit"},
  {name:"Insomniaque",type:"townsfolk",edition:"lg-pour-une-nuit"},
  {name:"Maçon",type:"townsfolk",edition:"lg-pour-une-nuit"},
  {name:"Noiseuse",type:"outsider",edition:"lg-pour-une-nuit"},
  {name:"Saoul",type:"outsider",edition:"lg-pour-une-nuit"},
  {name:"Sbire",type:"werewolf",edition:"lg-pour-une-nuit"},
  {name:"Simple Villageois",type:"townsfolk",edition:"loup-garou,lg-pour-une-nuit"},
  {name:"Tanneur",type:"outsider",edition:"lg-pour-une-nuit"},
  // LG - Pour un crepuscule
  {name:"Apprenti Sbire",type:"werewolf",edition:"lg-pour-un-crepuscule"},
  {name:"Chasseur de Monstres",type:"townsfolk",edition:"lg-pour-un-crepuscule"},
  {name:"Conservateur",type:"townsfolk",edition:"lg-pour-un-crepuscule"},
  {name:"Enquêteur du Paranormal",type:"townsfolk",edition:"lg-pour-un-crepuscule"},
  {name:"Idiote du Village",type:"outsider",edition:"lg-pour-un-crepuscule"},
  {name:"Loup Mystique",type:"werewolf",edition:"lg-pour-un-crepuscule"},
  {name:"Rêveur",type:"townsfolk",edition:"lg-pour-un-crepuscule"},
  {name:"Sentinelle",type:"townsfolk",edition:"lg-pour-un-crepuscule"},
  // Loup-Garou de Thiercelieux
  {name:"Capitaine",type:"townsfolk",edition:"loup-garou"},
  {name:"Le Couple",type:"solo",edition:"loup-garou"},
  {name:"Petite Fille",type:"townsfolk",edition:"loup-garou"},
  // Vampire
  {name:"Apprenti Assassin",type:"vampire",edition:"vampire-pour-une-nuit"},
  {name:"Chasseur de Vampires",type:"townsfolk",edition:"vampire-pour-une-nuit"},
  {name:"Chauve-souris",type:"vampire",edition:"vampire-pour-une-nuit"},
  {name:"Greffier",type:"townsfolk",edition:"vampire-pour-une-nuit"},
  {name:"Le Comte",type:"vampire",edition:"vampire-pour-une-nuit"},
  {name:"Prêtre",type:"townsfolk",edition:"vampire-pour-une-nuit"},
  {name:"Renégat",type:"vampire",edition:"vampire-pour-une-nuit"},
  {name:"Vampire",type:"vampire",edition:"vampire-pour-une-nuit"},
  {name:"Victime",type:"outsider",edition:"vampire-pour-une-nuit"},
  // Divers
  {name:"Tavernier",type:"townsfolk",edition:""}
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
  {id:"registered-good",label:"Reg. as Good",emoji:"😇"},
  {id:"registered-as",label:"Registered as",emoji:"🏷️"},
  {id:"believe-is",label:"Believes they are",emoji:"💭"}
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
    notes: "",
    modificators: []
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
    townsfolk:'#3498db', outsiders:'#1a237e', minions:'#8e44ad',
    demons:'#e74c3c', travellers:'#6b5e4e', fabled:'#f39c12', loric:'#27ae60',
    solo:'#607d8b', werewolf:'#2d5016', vampire:'#8b0000'
  };
  return map[type] || '#999';
}

function getCharSummary(name) {
  const c = CHARACTERS.find(c => c.name === name);
  return c ? (c.summary || '') : '';
}

function getCharTypeLabel(type) {
  const map = {
    townsfolk:'Townsfolk', outsiders:'Outsider', minions:'Minion',
    demons:'Demon', travellers:'Traveller', fabled:'Fabled', loric:'Loric',
    solo:'Solo', werewolf:'Werewolf', vampire:'Vampire'
  };
  return map[type] || type;
}

function getStatusObj(sid) {
  return STATUSES.find(st => st.id === (typeof sid === 'string' ? sid : sid.id));
}

function getStatusDisplay(sid) {
  const s = getStatusObj(sid);
  if (!s) return '';
  if (typeof sid === 'object') {
    if (sid.char) return `${s.emoji} ${sid.char}`;
    if (sid.detail) return `${s.emoji} ${sid.detail}`;
  }
  return `${s.emoji} ${s.label}`;
}

function renderStatusToolbar() {
  const container = document.getElementById('status-toolbar-buttons');
  if (!container) return;
  container.innerHTML = '';

  const player = selectedPlayer !== null ? state.players[selectedPlayer] : null;

  STATUSES.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'status-btn';
    btn.dataset.statusId = s.id;
    btn.innerHTML = `<span class="status-emoji">${s.emoji}</span> ${s.label}`;

    // Show active + detail if selected player has this status
    if (player) {
      const existing = player.statuses.find(st => (typeof st === 'string' ? st : st.id) === s.id);
      if (existing) {
        btn.classList.add('active');
        if (typeof existing === 'object') {
          if (existing.char) btn.innerHTML += `: ${existing.char}`;
          if (existing.detail) btn.innerHTML += `: ${existing.detail}`;
        }
      }
    }

    btn.addEventListener('click', () => {
      if (selectedPlayer === null) return;
      handleStatusToggle(selectedPlayer, s.id);
      saveState();
      renderCircle();
      renderStatusToolbar();
    });
    container.appendChild(btn);
  });
}

function handleStatusToggle(index, statusId) {
  const player = state.players[index];
  if (!player.statuses) player.statuses = [];
  const existingIdx = player.statuses.findIndex(st => (typeof st === 'string' ? st : st.id) === statusId);

  if (statusId === 'registered-as' || statusId === 'believe-is') {
    if (existingIdx >= 0) {
      player.statuses.splice(existingIdx, 1);
      return;
    }
    pendingStatusPlayer = index;
    pendingStatusId = statusId;
    openCharModal(-1, 'status-picker');
    return;
  }

  if (statusId === 'mad') {
    if (existingIdx >= 0 && typeof player.statuses[existingIdx] === 'object') {
      player.statuses.splice(existingIdx, 1);
      return;
    }
    const detail = prompt('What are they mad about / claiming?', '');
    if (detail === null) return;
    if (existingIdx >= 0) player.statuses.splice(existingIdx, 1);
    if (detail.trim()) {
      player.statuses.push({id: 'mad', detail: detail.trim()});
    }
    return;
  }

  // Simple toggle
  if (existingIdx >= 0) {
    player.statuses.splice(existingIdx, 1);
  } else {
    player.statuses.push(statusId);
  }
}

// ---- Render ----
function renderAll() {
  renderCircle();
  renderStatusToolbar();
  renderJournal();
  renderModificators();
  document.getElementById('free-notes').value = state.notes || '';
  document.getElementById('player-count').value = state.playerCount;
}

function renderCircle() {
  const container = document.getElementById('circle-container');
  const total = state.playerCount + 1;
  const tokenWidth = 72;
  const tokenGap = 36;
  const spacing = tokenWidth + tokenGap;
  const circumference = total * spacing;
  const radius = Math.max(180, circumference / (2 * Math.PI));
  const halfToken = tokenWidth / 2;
  const containerPadding = 44;
  const size = Math.max(580, Math.ceil((radius + halfToken + containerPadding) * 2));
  const cx = size / 2;
  const cy = size / 2 - 10;

  container.style.width = size + 'px';
  container.style.height = size + 'px';
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
      const display = getStatusDisplay(sid);
      if (display) {
        const badge = document.createElement('span');
        badge.className = 'token-status';
        badge.textContent = display;
        const s = getStatusObj(sid);
        badge.title = s ? s.label : '';
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
  if (count > 30) { document.getElementById('player-count').value = 30; return; }
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

// ---- Modificators (Fabled / Loric) ----
function renderModificators() {
  const container = document.getElementById('modificator-list');
  if (!container) return;
  container.innerHTML = '';

  if (!state.modificators) state.modificators = [];

  let migrated = false;
  state.modificators.forEach((mod, i) => {
    if (!mod.charName && mod.name) {
      mod.charName = mod.name;
      mod.name = 'NPC ' + (i + 1);
      mod.summary = getCharSummary(mod.charName);
      migrated = true;
    }

    if (!mod.name) mod.name = 'NPC ' + (i + 1);

    const token = document.createElement('div');
    token.className = 'modificator-token type-' + mod.type;

    const charName = mod.charName || mod.name;
    const summary = mod.summary || getCharSummary(charName) || '';
    const summaryEl = document.createElement('div');
    summaryEl.className = 'modificator-summary';
    summaryEl.textContent = summary;
    token.appendChild(summaryEl);

    const charNameEl = document.createElement('div');
    charNameEl.className = 'modificator-char-name';
    charNameEl.textContent = charName;
    token.appendChild(charNameEl);

    const typeLabel = document.createElement('div');
    typeLabel.className = 'modificator-type-label';
    typeLabel.textContent = getCharTypeLabel(mod.type);
    token.appendChild(typeLabel);

    const nameEdit = document.createElement('div');
    nameEdit.className = 'modificator-name-edit';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = mod.name || 'NPC ' + (i + 1);
    nameInput.maxLength = 20;
    nameInput.placeholder = 'NPC ' + (i + 1);
    nameInput.addEventListener('input', () => {
      mod.name = nameInput.value;
      saveState();
    });
    nameInput.addEventListener('click', e => { e.stopPropagation(); });
    nameEdit.appendChild(nameInput);
    token.appendChild(nameEdit);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'modificator-remove';
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', e => {
      e.stopPropagation();
      removeModificator(i);
    });
    token.appendChild(removeBtn);

    token.addEventListener('click', e => {
      if (e.target.tagName === 'INPUT') return;
      openCharModal(i, 'modificator');
    });

    container.appendChild(token);
  });
  if (migrated) saveState();
}

function addModificator() {
  openCharModal(-1, 'modificator');
}

function removeModificator(index) {
  state.modificators.splice(index, 1);
  saveState();
  renderModificators();
}

// ---- Character Modal ----
let modalTargetIndex = -1;
let modalMode = 'player'; // 'player' | 'modificator' | 'status-picker'
let pendingStatusPlayer = -1;
let pendingStatusId = '';

function openCharModal(index, mode) {
  modalTargetIndex = index;
  modalMode = mode || 'player';
  const modal = document.getElementById('char-modal');
  modal.classList.remove('hidden');
  document.getElementById('char-search').value = '';
  document.getElementById('char-type-filter').value = '';
  renderCharList();
}

function closeCharModal() {
  document.getElementById('char-modal').classList.add('hidden');
  modalTargetIndex = -1;
  modalMode = 'player';
  pendingStatusPlayer = -1;
  pendingStatusId = '';
  renderCircle();
  renderStatusToolbar();
  renderModificators();
}

function renderCharList() {
  const search = document.getElementById('char-search').value.toLowerCase();
  const typeFilter = document.getElementById('char-type-filter').value;

  let chars = CHARACTERS;

  if (modalMode === 'player') {
    chars = chars.filter(c => c.type !== 'fabled' && c.type !== 'loric');
  } else if (modalMode === 'modificator') {
    chars = chars.filter(c => c.type === 'fabled' || c.type === 'loric');
  }
  // status-picker shows all types

  if (typeFilter) {
    chars = chars.filter(c => c.type === typeFilter);
  }
  if (search) {
    chars = chars.filter(c => c.name.toLowerCase().includes(search));
  }

  // Sort by type, then name
  const typeOrder = ['townsfolk','outsiders','minions','demons','travellers','fabled','loric','solo','werewolf','vampire'];
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
  if (modalMode === 'status-picker') {
    const player = state.players[pendingStatusPlayer];
    if (!player.statuses) player.statuses = [];
    const existingIdx = player.statuses.findIndex(st => (typeof st === 'string' ? st : st.id) === pendingStatusId);
    if (existingIdx >= 0) player.statuses.splice(existingIdx, 1);
    player.statuses.push({id: pendingStatusId, type: char.type, char: char.name});
    pendingStatusPlayer = -1;
    pendingStatusId = '';
  } else if (modalMode === 'modificator') {
    if (index >= 0 && index < state.modificators.length) {
      state.modificators[index].charName = char.name;
      state.modificators[index].type = char.type;
      state.modificators[index].summary = char.summary || '';
    } else {
      const npcNum = state.modificators.length + 1;
      state.modificators.push({
        charName: char.name,
        type: char.type,
        summary: char.summary || '',
        name: 'NPC ' + npcNum
      });
    }
  } else {
    state.players[index].character = {name:char.name, type:char.type};
    state.players[index].statuses = state.players[index].statuses || [];
  }
  saveState();
  if (modalMode === 'modificator') {
    renderModificators();
  } else if (modalMode === 'status-picker') {
    renderCircle();
    renderStatusToolbar();
  } else {
    renderCircle();
  }
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
    const existing = player.statuses.find(st => (typeof st === 'string' ? st : st.id) === s.id);
    if (existing) {
      item.classList.add('active');
    }
    let label = `${s.emoji} ${s.label}`;
    if (typeof existing === 'object') {
      if (existing.char) label += `: ${existing.char}`;
      if (existing.detail) label += `: ${existing.detail}`;
    }
    item.innerHTML = `<span class="status-indicator"></span>${label}`;
    item.addEventListener('click', () => {
      handleStatusToggle(index, s.id);
      saveState();
      renderCircle();
      hideStatusMenu();
      renderStatusToolbar();
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

// ---- Journal ----
function getPhaseLabel(idx) {
  if (idx === 0) return { day: 0, isNight: true, label: 'Day 0 - Night' };
  if (idx % 2 === 1) {
    const day = (idx + 1) / 2;
    return { day, isNight: false, label: `Day ${day} - Day` };
  }
  const day = idx / 2;
  return { day, isNight: true, label: `Day ${day} - Night` };
}

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

    // Actions
    const fields = document.createElement('div');
    fields.className = 'phase-fields';

    const actionsLabel = document.createElement('div');
    actionsLabel.className = 'field-label';
    actionsLabel.textContent = 'Actions / What happened';
    fields.appendChild(actionsLabel);

    const actionsArea = document.createElement('textarea');
    actionsArea.value = entry.actions || '';
    actionsArea.rows = 1;
    const autoResize = () => {
      actionsArea.style.height = 'auto';
      actionsArea.style.height = actionsArea.scrollHeight + 'px';
    };
    actionsArea.addEventListener('input', () => {
      entry.actions = actionsArea.value;
      saveState();
      autoResize();
    });
    autoResize();
    fields.appendChild(actionsArea);
    div.appendChild(fields);

    // Entries (executions for day, kills for night)
    const entriesLabel = document.createElement('div');
    entriesLabel.className = 'field-label';
    entriesLabel.textContent = entry.isNight ? 'Killed' : 'Executed';
    div.appendChild(entriesLabel);

    if (!entry.entries) entry.entries = [];

    entry.entries.forEach((ent, ei) => {
      const row = document.createElement('div');
      row.className = 'journal-entry-row';

      const info = document.createElement('span');
      info.className = 'journal-entry-info';
      info.textContent = `${ent.playerName} (${ent.role || '?'})`;
      row.appendChild(info);

      if (entry.isNight) {
        const byText = document.createElement('span');
        byText.textContent = ' by ';
        row.appendChild(byText);
        const byContainer = document.createElement('span');
        byContainer.className = 'journal-killed-by-list';
        if (!Array.isArray(ent.killedBy)) ent.killedBy = [];
        ent.killedBy.forEach((kb, ki) => {
          const tag = document.createElement('span');
          tag.className = 'journal-killed-by-tag';
          tag.textContent = kb.playerName || `Player ${kb.playerIdx + 1}`;
          const tagRemove = document.createElement('button');
          tagRemove.className = 'journal-killed-by-remove';
          tagRemove.textContent = '✕';
          tagRemove.addEventListener('click', e => {
            e.stopPropagation();
            ent.killedBy.splice(ki, 1);
            saveState();
            renderJournal();
          });
          tag.appendChild(tagRemove);
          byContainer.appendChild(tag);
        });
        // Add killer button
        const addKillerSel = document.createElement('select');
        addKillerSel.className = 'journal-killer-add';
        const blankK = document.createElement('option');
        blankK.value = '';
        blankK.textContent = ent.killedBy.length ? '+ add killer' : '+ who?';
        addKillerSel.appendChild(blankK);
        state.players.forEach((p, pi) => {
          const opt = document.createElement('option');
          opt.value = pi;
          opt.textContent = `Player ${pi + 1}${p.name ? ' (' + p.name + ')' : ''}`;
          addKillerSel.appendChild(opt);
        });
        addKillerSel.addEventListener('change', () => {
          const pi = parseInt(addKillerSel.value);
          if (isNaN(pi)) return;
          ent.killedBy.push({playerIdx: pi, playerName: state.players[pi].name || `Player ${pi + 1}`});
          addKillerSel.value = '';
          saveState();
          renderJournal();
        });
        byContainer.appendChild(addKillerSel);
        row.appendChild(byContainer);
      }

      const removeBtn = document.createElement('button');
      removeBtn.className = 'journal-entry-remove';
      removeBtn.textContent = '✕';
      removeBtn.title = 'Remove';
      removeBtn.addEventListener('click', () => {
        entry.entries.splice(ei, 1);
        saveState();
        renderJournal();
      });
      row.appendChild(removeBtn);

      div.appendChild(row);
    });

    // Add entry row
    const addRow = document.createElement('div');
    addRow.className = 'journal-add-row';
    const addSelect = document.createElement('select');
    addSelect.className = 'journal-player-select';
    const blankOpt = document.createElement('option');
    blankOpt.value = '';
    blankOpt.textContent = '+ Add player…';
    addSelect.appendChild(blankOpt);
    state.players.forEach((p, pi) => {
      const opt = document.createElement('option');
      opt.value = pi;
      const role = p.character ? p.character.name : '?';
      opt.textContent = `Player ${pi + 1}${p.name ? ' (' + p.name + ')' : ''} — ${role}`;
      addSelect.appendChild(opt);
    });
    addSelect.addEventListener('change', () => {
      const pi = parseInt(addSelect.value);
      if (isNaN(pi)) return;
      const player = state.players[pi];
      const role = player.character ? player.character.name : '?';
      entry.entries.push({
        playerIdx: pi,
        playerName: player.name || `Player ${pi + 1}`,
        role: role,
        killedBy: ''
      });
      // Auto-apply status
      if (!player.statuses) player.statuses = [];
      const statusId = entry.isNight ? 'dead' : 'executed';
      if (!player.statuses.includes(statusId)) {
        player.statuses.push(statusId);
      }
      addSelect.value = '';
      saveState();
      renderJournal();
      renderCircle();
      renderStatusToolbar();
    });
    addRow.appendChild(addSelect);
    div.appendChild(addRow);

    container.appendChild(div);
  });
}

function addPhase() {
  if (!state.journal) state.journal = [];
  const idx = state.journal.length;
  const { label, isNight } = getPhaseLabel(idx);
  state.journal.push({ label, isNight, actions: '', entries: [] });
  saveState();
  renderJournal();
}

function clearJournal() {
  if (!confirm('Clear the entire journal?')) return;
  state.journal = [];
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

  const btnAddMod = document.getElementById('btn-add-modificator');
  if (btnAddMod) btnAddMod.addEventListener('click', addModificator);

  document.getElementById('btn-add-phase').addEventListener('click', addPhase);
  document.getElementById('btn-clear-journal').addEventListener('click', clearJournal);

  // Char search/type filter in modal
  document.getElementById('char-search').addEventListener('input', renderCharList);
  document.getElementById('char-type-filter').addEventListener('change', renderCharList);
});
