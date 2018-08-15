var config = {
	races: [
		'human',
		'elf',
		'dark elf',
		'orc',
		'dwarf'
	],
	places: [
		'Aldlake',
		'Delllyn',
		'Fallrein',
		'Marblefay',
		'Mistmoor',
		'Raymoor',
		'Eastflower'
	],
	baseStats: [
		'patk',      // physical attack
		'matak',     // magical attack
		'pdef',      // physical def
		'mdef',      // magical def
		'sdef',      // shield def
		'pacc',      // physical accuracy
		'peva',      // physical evasion
		'pcrt',      // physical critical rate
		'mcrtdmg',   // physical critical damage
		'macc',      // magical accuracy
		'meva',      // magical evasion
		'mcrt',      // magical critical rate
		'mcrtdmg',   // magical critical damage
		'atkspd',    // attack speed
		'cspd',      // cast speed
		'speed'      // moviment speed
	],
	stats: [
		'STR',	// P.Атк., P.Crit.
		'DEX',	// P.Critical Rate, P.Accuracy, P.Evasion, Atk.Speed
		'CON',	// Max.HP, HP Recovery Bonus, Max.СР, Weight Limit, Breath Limit, underwater НР decrease, shield defense rate, Resistance to debuff attacks(stun, poison, bleeding)
		'LUC',	// Luck gives characters a greater chance for success when crafting, dodging, and even finding loot drops.If Luck triggers when spoil and sweep or plunder is used, players will receive double items.Additionally, players can dodge lethal blows with luck.If Luck triggers during hunting, you can obtain a Fortune Pocket - Stage 1 Fortune Pocket - Stage 1.
		'INT',	// M.Atk.and M.Crit.
		'WIT',	// M.Crit, Rate, M.Accuracy, M.Evasion, Casting Speed, Magic Resistance, amount of XP restored at resurrection.
		'MEN',	// Magic Resistance, Max.МР, МР restoration Spd, magic cancel rate, increases status resistance(debuffs, madness(Fear, Silence), paralysis, НР decrease, МР decrease magic, НР recovery decrease, skill usage timeout increase, recovery speed decrease)
		'CHA' 	// Increases main character stats: P.Atk., P.Def., Atk.Speed, M.Atk., M.Def., Casting Speed, Max.HP, Max.MP, Max.CP.
	],
	elements: [
		'fire',
		'wind',
		'water',
		'earth',
		'holy',
		'dark'
	],
	human: {
		baseSTR: 10,
		baseSTRup: 1.0,
		baseDEX: 10,
		baseDEXup: 1.0,
		baseCON: 10,
		baseCONup: 1.0,
		baseLUC: 10,
		baseLUCup: 1.0,
		baseINT: 10,
		baseINTup: 1.0,
		baseWIT: 10,
		baseWITup: 1.0,
		baseMEN: 10,
		baseMENup: 1.0,
	},
	elf: {
		baseSTR: 10,
		baseSTRup: 1.0,
		baseDEX: 10,
		baseDEXup: 1.0,
		baseCON: 10,
		baseCONup: 1.0,
		baseLUC: 10,
		baseLUCup: 1.0,
		baseINT: 10,
		baseINTup: 1.0,
		baseWIT: 10,
		baseWITup: 1.0,
		baseMEN: 10,
		baseMENup: 1.0,
	},
	darlElf: {
		baseSTR: 10,
		baseSTRup: 1.0,
		baseDEX: 10,
		baseDEXup: 1.0,
		baseCON: 10,
		baseCONup: 1.0,
		baseLUC: 10,
		baseLUCup: 1.0,
		baseINT: 10,
		baseINTup: 1.0,
		baseWIT: 10,
		baseWITup: 1.0,
		baseMEN: 10,
		baseMENup: 1.0,
	},
	orc: {
		baseSTR: 10,
		baseSTRup: 1.0,
		baseDEX: 10,
		baseDEXup: 1.0,
		baseCON: 10,
		baseCONup: 1.0,
		baseLUC: 10,
		baseLUCup: 1.0,
		baseINT: 10,
		baseINTup: 1.0,
		baseWIT: 10,
		baseWITup: 1.0,
		baseMEN: 10,
		baseMENup: 1.0,
	},
	dwarf: {
		baseSTR: 10,
		baseSTRup: 1.0,
		baseDEX: 10,
		baseDEXup: 1.0,
		baseCON: 10,
		baseCONup: 1.0,
		baseLUC: 10,
		baseLUCup: 1.0,
		baseINT: 10,
		baseINTup: 1.0,
		baseWIT: 10,
		baseWITup: 1.0,
		baseMEN: 10,
		baseMENup: 1.0,
	}

}