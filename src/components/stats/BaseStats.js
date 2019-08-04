const classBonus = {
  druid: { str: 1, int: 2, spi: 2 },
  hunter: { agi: 3, sta: 1, spi: 1 },
  mage: { int: 3, spi: 2 },
  paladin: { str: 2, sta: 2, spi: 1 },
  priest: { int: 2, spi: 3 },
  rogue: { str: 1, agi: 3, sta: 1 },
  shaman: { str: 1, sta: 1, int: 1, spi: 1 },
  warlock: { sta: 1, int: 2, spi: 2 },
  warrior: { str: 3, sta: 2 }
};

const statsPerLevel = {
  druid: { agi: 0.68, int: 1.32, spi: 1.49, sta: 0.85, str: 0.75 },
  hunter: { agi: 1.73, int: 0.76, spi: 0.83, sta: 1.17, str: 0.59 },
  mage: { agi: 0.25, int: 1.73, spi: 1.66, sta: 0.42, str: 0.17 },
  paladin: { agi: 0.76, int: 0.85, spi: 0.92, sta: 1.32, str: 1.41 },
  priest: { agi: 0.34, int: 1.66, spi: 1.73, sta: 0.51, str: 0.25 },
  rogue: { agi: 1.81, int: 0.25, spi: 0.51, sta: 0.92, str: 1 },
  shaman: { agi: 0.59, int: 1.17, spi: 1.34, sta: 1.25, str: 1.08 },
  warlock: { agi: 0.51, int: 1.49, spi: 1.58, sta: 0.73, str: 0.42 },
  warrior: { agi: 1.02, int: 0.17, spi: 0.42, sta: 1.49, str: 1.64 }
};

const baseStats = {
  dwarf: { agi: 16, int: 19, spi: 19, sta: 23, str: 22 },
  gnome: { agi: 23, int: 23, spi: 20, sta: 19, str: 15 },
  human: { agi: 20, int: 20, spi: 21, sta: 20, str: 20 },
  nightelf: { agi: 25, int: 20, spi: 20, sta: 19, str: 17 },
  orc: { agi: 17, int: 17, spi: 23, sta: 22, str: 23 },
  tauren: { agi: 15, int: 15, spi: 22, sta: 22, str: 25 },
  troll: { agi: 22, int: 16, spi: 21, sta: 21, str: 21 },
  undead: { agi: 18, int: 18, spi: 25, sta: 21, str: 19 }
};

export { classBonus, statsPerLevel, baseStats };
