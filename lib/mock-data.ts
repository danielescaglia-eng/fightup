export type Discipline =
  | "Boxing"
  | "Kickboxing"
  | "Muay Thai"
  | "MMA"
  | "BJJ"
  | "Wrestling"
  | "Karate"
  | "Taekwondo"
  | "Judo";

export type RankTier =
  | "Iron"
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Crown";

export interface Fighter {
  id: string;
  name: string;
  username: string;
  avatar: string;
  country: string;
  city: string;
  gym: string;
  discipline: Discipline;
  weightClass: string;
  elo: number;
  tier: RankTier;
  wins: number;
  losses: number;
  draws: number;
  koWins: number;
  xpLevel: number;
  isChampion?: boolean;
  achievements: string[];
  winStreak: number;
}

export interface Fight {
  id: string;
  fighterA: Fighter;
  fighterB: Fighter;
  discipline: Discipline;
  status: "SCHEDULED" | "LIVE" | "COMPLETED";
  scheduledAt: string;
  winnerId?: string;
  result?: string;
  viewCount: number;
  comments: number;
}

export const DISCIPLINE_ICONS: Record<Discipline, string> = {
  Boxing: "\uD83E\uDD4A",
  Kickboxing: "\uD83E\uDDB5",
  "Muay Thai": "\uD83D\uDC32",
  MMA: "\uD83E\uDD3C",
  BJJ: "\uD83D\uDD77\uFE0F",
  Wrestling: "\uD83E\uDD3C",
  Karate: "\uD83E\uDD4B",
  Taekwondo: "\uD83E\uDD4B",
  Judo: "\uD83E\uDD4B",
};

export const TIER_CONFIG: Record<
  RankTier,
  { color: string; label: string; eloRange: string }
> = {
  Iron: { color: "#888888", label: "Newcomer", eloRange: "0-999" },
  Bronze: { color: "#CD7F32", label: "Contender", eloRange: "1000-1199" },
  Silver: { color: "#C0C0C0", label: "Fighter", eloRange: "1200-1399" },
  Gold: { color: "#F5A623", label: "Warrior", eloRange: "1400-1599" },
  Platinum: { color: "#E5E4E2", label: "Elite", eloRange: "1600-1799" },
  Diamond: { color: "#00D4FF", label: "Champion", eloRange: "1800-1999" },
  Crown: { color: "#F5A623", label: "King/Queen", eloRange: "2000+" },
};

// Realistic fighter portraits via randomuser.me
const portraits: Record<string, string> = {
  marco: "https://randomuser.me/api/portraits/men/32.jpg",
  yuki: "https://randomuser.me/api/portraits/men/11.jpg",
  sofia: "https://randomuser.me/api/portraits/women/44.jpg",
  dmitri: "https://randomuser.me/api/portraits/men/45.jpg",
  liam: "https://randomuser.me/api/portraits/men/22.jpg",
  aisha: "https://randomuser.me/api/portraits/women/68.jpg",
  lucas: "https://randomuser.me/api/portraits/men/67.jpg",
  soojin: "https://randomuser.me/api/portraits/women/29.jpg",
  ahmed: "https://randomuser.me/api/portraits/men/53.jpg",
  emma: "https://randomuser.me/api/portraits/women/17.jpg",
  takeshi: "https://randomuser.me/api/portraits/men/91.jpg",
  ryu: "https://randomuser.me/api/portraits/men/18.jpg",
};

const avatarUrl = (seed: string) => portraits[seed] || `https://randomuser.me/api/portraits/men/1.jpg`;

export const FIGHTERS: Fighter[] = [
  {
    id: "1",
    name: "Marco 'The Hammer' Rossi",
    username: "hammerfist",
    avatar: avatarUrl("marco"),
    country: "IT",
    city: "Milan",
    gym: "Tiger Boxing Club",
    discipline: "Boxing",
    weightClass: "Welterweight",
    elo: 2120,
    tier: "Crown",
    wins: 48,
    losses: 3,
    draws: 1,
    koWins: 31,
    xpLevel: 42,
    isChampion: true,
    achievements: ["FIRST_BLOOD", "ON_FIRE", "LIGHTNING", "CENTURY_CLUB"],
    winStreak: 12,
  },
  {
    id: "2",
    name: "Yuki Tanaka",
    username: "yukistrike",
    avatar: avatarUrl("yuki"),
    country: "JP",
    city: "Tokyo",
    gym: "Evolve MMA",
    discipline: "MMA",
    weightClass: "Lightweight",
    elo: 1920,
    tier: "Diamond",
    wins: 35,
    losses: 7,
    draws: 0,
    koWins: 18,
    xpLevel: 36,
    achievements: ["FIRST_BLOOD", "ON_FIRE", "SNIPER"],
    winStreak: 5,
  },
  {
    id: "3",
    name: "Sofia 'Venom' Costa",
    username: "venomkick",
    avatar: avatarUrl("sofia"),
    country: "BR",
    city: "Sao Paulo",
    gym: "Chute Boxe",
    discipline: "Muay Thai",
    weightClass: "Featherweight",
    elo: 1830,
    tier: "Diamond",
    wins: 29,
    losses: 5,
    draws: 2,
    koWins: 20,
    xpLevel: 33,
    isChampion: true,
    achievements: ["FIRST_BLOOD", "ON_FIRE", "LIGHTNING"],
    winStreak: 8,
  },
  {
    id: "4",
    name: "Dmitri Volkov",
    username: "beargrip",
    avatar: avatarUrl("dmitri"),
    country: "RU",
    city: "Moscow",
    gym: "Sambo Academy",
    discipline: "Wrestling",
    weightClass: "Heavyweight",
    elo: 1750,
    tier: "Platinum",
    wins: 22,
    losses: 6,
    draws: 1,
    koWins: 5,
    xpLevel: 28,
    achievements: ["FIRST_BLOOD", "BROTHERHOOD"],
    winStreak: 3,
  },
  {
    id: "5",
    name: "Liam O'Brien",
    username: "irishthunder",
    avatar: avatarUrl("liam"),
    country: "IE",
    city: "Dublin",
    gym: "SBG Ireland",
    discipline: "Boxing",
    weightClass: "Middleweight",
    elo: 1680,
    tier: "Platinum",
    wins: 19,
    losses: 4,
    draws: 0,
    koWins: 14,
    xpLevel: 25,
    achievements: ["FIRST_BLOOD", "SNIPER"],
    winStreak: 4,
  },
  {
    id: "6",
    name: "Aisha Rahman",
    username: "flowqueen",
    avatar: avatarUrl("aisha"),
    country: "US",
    city: "New York",
    gym: "Renzo Gracie Academy",
    discipline: "BJJ",
    weightClass: "Bantamweight",
    elo: 1950,
    tier: "Diamond",
    wins: 40,
    losses: 8,
    draws: 3,
    koWins: 0,
    xpLevel: 38,
    isChampion: true,
    achievements: ["FIRST_BLOOD", "ON_FIRE", "SPIDER", "CENTURY_CLUB"],
    winStreak: 7,
  },
  {
    id: "7",
    name: "Lucas Fernandez",
    username: "elrelampago",
    avatar: avatarUrl("lucas"),
    country: "ES",
    city: "Barcelona",
    gym: "Kickboxing Barcelona",
    discipline: "Kickboxing",
    weightClass: "Lightweight",
    elo: 1540,
    tier: "Gold",
    wins: 15,
    losses: 6,
    draws: 1,
    koWins: 9,
    xpLevel: 20,
    achievements: ["FIRST_BLOOD", "LIGHTNING"],
    winStreak: 2,
  },
  {
    id: "8",
    name: "Kim Soo-jin",
    username: "tkdqueen",
    avatar: avatarUrl("soojin"),
    country: "KR",
    city: "Seoul",
    gym: "Kukkiwon Elite",
    discipline: "Taekwondo",
    weightClass: "Featherweight",
    elo: 1620,
    tier: "Platinum",
    wins: 21,
    losses: 5,
    draws: 0,
    koWins: 12,
    xpLevel: 26,
    achievements: ["FIRST_BLOOD", "ON_FIRE"],
    winStreak: 6,
  },
  {
    id: "9",
    name: "Ahmed El-Sayed",
    username: "pharaoh",
    avatar: avatarUrl("ahmed"),
    country: "EG",
    city: "Cairo",
    gym: "Egyptian Boxing Federation",
    discipline: "Boxing",
    weightClass: "Light Heavyweight",
    elo: 1450,
    tier: "Gold",
    wins: 12,
    losses: 4,
    draws: 2,
    koWins: 8,
    xpLevel: 18,
    achievements: ["FIRST_BLOOD"],
    winStreak: 1,
  },
  {
    id: "10",
    name: "Emma 'Ice' Lindgren",
    username: "icequeen",
    avatar: avatarUrl("emma"),
    country: "SE",
    city: "Stockholm",
    gym: "Allstars Training Center",
    discipline: "MMA",
    weightClass: "Strawweight",
    elo: 1380,
    tier: "Silver",
    wins: 10,
    losses: 5,
    draws: 1,
    koWins: 4,
    xpLevel: 15,
    achievements: ["FIRST_BLOOD", "WARRIORS_PATH"],
    winStreak: 2,
  },
  {
    id: "11",
    name: "Takeshi Honda",
    username: "judoflip",
    avatar: avatarUrl("takeshi"),
    country: "JP",
    city: "Osaka",
    gym: "Kodokan Osaka",
    discipline: "Judo",
    weightClass: "Middleweight",
    elo: 1710,
    tier: "Platinum",
    wins: 25,
    losses: 8,
    draws: 0,
    koWins: 0,
    xpLevel: 27,
    isChampion: true,
    achievements: ["FIRST_BLOOD", "ON_FIRE", "BROTHERHOOD"],
    winStreak: 4,
  },
  {
    id: "12",
    name: "Ryu Nakamura",
    username: "karatekid",
    avatar: avatarUrl("ryu"),
    country: "JP",
    city: "Tokyo",
    gym: "JKA Headquarters",
    discipline: "Karate",
    weightClass: "Welterweight",
    elo: 1580,
    tier: "Gold",
    wins: 18,
    losses: 5,
    draws: 1,
    koWins: 10,
    xpLevel: 22,
    achievements: ["FIRST_BLOOD", "LIGHTNING"],
    winStreak: 3,
  },
];

export const FIGHTS: Fight[] = [
  {
    id: "f1",
    fighterA: FIGHTERS[0],
    fighterB: FIGHTERS[4],
    discipline: "Boxing",
    status: "LIVE",
    scheduledAt: "Now",
    viewCount: 1243,
    comments: 89,
  },
  {
    id: "f2",
    fighterA: FIGHTERS[1],
    fighterB: FIGHTERS[9],
    discipline: "MMA",
    status: "SCHEDULED",
    scheduledAt: "Tomorrow, 18:00",
    viewCount: 0,
    comments: 12,
  },
  {
    id: "f3",
    fighterA: FIGHTERS[2],
    fighterB: FIGHTERS[7],
    discipline: "Muay Thai",
    status: "COMPLETED",
    scheduledAt: "Yesterday",
    winnerId: "3",
    result: "WIN_KO",
    viewCount: 3420,
    comments: 234,
  },
  {
    id: "f4",
    fighterA: FIGHTERS[5],
    fighterB: FIGHTERS[3],
    discipline: "BJJ",
    status: "COMPLETED",
    scheduledAt: "2 days ago",
    winnerId: "6",
    result: "WIN_SUBMISSION",
    viewCount: 2100,
    comments: 156,
  },
  {
    id: "f5",
    fighterA: FIGHTERS[6],
    fighterB: FIGHTERS[8],
    discipline: "Kickboxing",
    status: "SCHEDULED",
    scheduledAt: "Sat, 20:00",
    viewCount: 0,
    comments: 8,
  },
];

export const ACHIEVEMENTS = [
  {
    code: "FIRST_BLOOD",
    name: "First Blood",
    icon: "\uD83E\uDD4A",
    description: "Complete your first fight",
    rarity: "COMMON",
  },
  {
    code: "ON_FIRE",
    name: "On Fire",
    icon: "\uD83D\uDD25",
    description: "3 wins in a row",
    rarity: "RARE",
  },
  {
    code: "LIGHTNING",
    name: "Lightning",
    icon: "\u26A1",
    description: "Win in under 60 seconds",
    rarity: "EPIC",
  },
  {
    code: "SNIPER",
    name: "Sniper",
    icon: "\uD83C\uDFAF",
    description: "5 wins by KO/Submission",
    rarity: "RARE",
  },
  {
    code: "CENTURY_CLUB",
    name: "Century Club",
    icon: "\uD83C\uDFC6",
    description: "100 fights completed",
    rarity: "LEGENDARY",
  },
  {
    code: "KING_SLAYER",
    name: "King Slayer",
    icon: "\uD83D\uDC51",
    description: "Beat the Crown Champion",
    rarity: "LEGENDARY",
  },
  {
    code: "SPIDER",
    name: "Spider",
    icon: "\uD83D\uDD77\uFE0F",
    description: "Reach Gold in BJJ",
    rarity: "EPIC",
  },
  {
    code: "BROTHERHOOD",
    name: "Brotherhood",
    icon: "\uD83E\uDD1D",
    description: "10 different sparring partners",
    rarity: "COMMON",
  },
  {
    code: "WARRIORS_PATH",
    name: "Warrior's Path",
    icon: "\uD83D\uDDD3\uFE0F",
    description: "Fight every week for 4 weeks",
    rarity: "RARE",
  },
  {
    code: "HYPE_MACHINE",
    name: "Hype Machine",
    icon: "\uD83D\uDCE2",
    description: "10 fights with 50+ viewers",
    rarity: "EPIC",
  },
];

export const DISCIPLINES: Discipline[] = [
  "Boxing",
  "Kickboxing",
  "Muay Thai",
  "MMA",
  "BJJ",
  "Wrestling",
  "Karate",
  "Taekwondo",
  "Judo",
];
