const STRUCT_FEATURES = [
	"Featuring %feature, natural %feature and %feature.",
	"The image should feature %adj_chara %feature.",
	"With details and %feature.",
	"With big %feature and small %feature.",
	"With %adj_chara %feature in the foreground.",
	"With %adj_chara %feature in the distance.",
	"The image contains lots of %feature.",
	];


const BIB_FEATURES = {
	"Small Objects" : ["keys", "fish", "cubes", "nails", "spikes", "mushrooms"],

	"Patterns" : ["spirals", "squares", "tiles", "circles", "scriptures"],

	"Marks" : ["spots", "splatter", "stains", "splashes", "drops", "drips", "spills", "scars", ],

	"Accessories" : ["glasses", "umbrella", "cane", "headphones", "gloves", "belt", "ring", "earrings", "necklace", "brooch", "scraf", "tie", "watch", "beret", "bowtie", "bracelet", "buttons", "hat", "cap", "helmet", "handbag", "backpack", "galaxy freckles","purse","wallet","sunglasses",	"scarf", ],

	"Anatomy": ["shoulder", "neck", "arms", "breast", "knees", "cheekbones", "sinews", "pale skin", "bones", "eyes", "teeth", "blood", "ankles", "feet", "intestine", "liver", "heart", "brain", "bladder", "lungs", "larynx", "muscles", "face", "hand", "finger", "leg", "hip", "ear", "nose", "tooth", "chest",
		"skeleton","lung","kidney","spleen","stomach","pancreas", "light complexion skin",],

	"Architecture" : ["modern", "nordic", "geodesic dome", "concrete", "tower", "skyscraper", "bunker", "gabled roof", "crowstepped gables", "shed roof", "mansard", "dormer window", "bell dome", "eyebrow dormer", "squint", "quoin blocks", "stone voussoirs", "chimney pot", "ventilation slit", "stone plinth", "square framing", "honeycomb",],

	"Background" : ["ornate background", "gold ornament", "tapestry", "bas-relief", "engraved stones", "bronze and stone walls", "mosaic wall", "tag graffiti", ],

	"Electronic" : ["flashlight", "cell tower", "console", "glitch", "keyboard", "wristwatch", "scanner","printer","cassette ","laserdisc","glowing screen","futuristic ","scsi adapter","ps2 connector", "keyboard", "transistor", "electic razor", "hair dryer", "calculator", "radio", "timer", "speaker", "circuit board", "gpu", "hard drive", ],

	"Horror" : ["horrifying", "rats", "skull", "plague", "dark", "death", "blood stain", "teeth", "arteries", "figure in darkness", "face in the shadow", "blood splatter", "skull mask", "spider", "haunted", "scarecrow", "spooky", "creepy", "cemetery", "tombstone", "frost", "coffin", "ghost shadow", "despair", "abomination", "banished", "calamity", "convulse", "crazed", "damned", "decay", "gloomy", "sinister", "doom", "flesh", "ghoulish", "malicious", "malevolent", "scream", "shriek", "soulless", "throat", "unholy", "plague", ],

	"Magic & Paranormal" : ["rainbow", "magic", "aura", "spell", "book of spells", "crystal ball", "angel feathers", "geometric magic", "energy line", "magic gem stones", "wand", "coven of witches", "potions", "charm", "mage guild",],

	"Mecanics" : ["gears", "pistons", "cylinder", "manifold", "exhaust", "pump", "oil", "filter", "vent", "fuel", "battery", "brake", "reservoir", "wheel",],

	"Math" : ["fractal", "geodesic", "sphere", "tetrahedron", "icosahedron", "triangle", "sinus", "cosinus", "infinity", "symbols", "function", "polygon",],

	"Medical" : ["operation room", "medical light", "chirurgical instruments", "tube", "beaker", "pills", "syringe", "stethoscope", "nurse", "thermometer", "antiseptic", "eye drops", "ambulance", "scissors", "wheelchair", "blood bag", "band-aid", "stretcher", "alcohol", "cotton swab", "crutch", "braces", "catheter", "caustic pencil", "eye chart", "first aid kit", "inhaler", "needle", "medical record", "medical clamps", "otoscope", "operating table",],

	"Musical" : ["model visuals", "music notes", "treble clef", "music", "spirit of the musical forest", "singer", "microphone", "piano", "violin", "guitar", "accordion", "drum", "cymbal", "flute", "harmonica", "keyboard", "maracas", "saxophone", "tambourine", "trumpet", "xylophone", "triangle",],

	"Nature": ["spruce trees", "pine cone", "dark forest", "moss", "mushrooms", "spores", "insects", "birds", "green grass", "leaves", "flowers", "roots", "bamboo", "flowers", "meditation", "tropical forest", "organic", "mycelia", "flowers", "beehives","bumblebees",],

	"Seasons & Weather" : ["storm", "lightning", "rain", "heavy rain", "mist", "fog", "sun", "sunny", "wind", "cloud", "snow", "heatwave", "blizzard", "flood", "cloudy", "overcast", "gloomy", "hail", "snowflake", "freezing", "breeze", "blustery", "gale", "hurricane", "drought", "lightning", "thunder", "rainbow", "leaf fall", "snow", "flower blooming", "insects", "orange leaf", "misty rain", "cherry blossom", "chestnut", "blizzard",],

	"Science fiction" : ["cyborg", "holographic plastic", "led", "electric wires", "floating device", "neon", "augmented reality", "artifical intelligence", "laser gun", "ray gun",],

	"Sea": ["nautilus", "seashell", "starfish", "corral", "shipwreck", "kraken", "waterfall", "whale", "coral", "wave", "ship", "harbour", "lighthouse", "island", "sunshade", "submarine", "battleship", "ferry", "barge", "catamaran", "canoe", "hovercraft", "sailboat", "schooner", "trawler", "buoy", "paper boat", "raft", "pirate ship", "bulk carrier",],

	"Tarot" : ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", "wand", "cup", "sword", "pentacle", "Ankh", "Horseshoe", "Infinity symbol", "Tree of life", "Sun and moon", "Stars", "Eye", "Lotus flower", "Serpent", "Phoenix", "Owl", "Butterfly", "Feather", "Crescent moon", "Dagger", "Compass", "Chain", "Anchor", "Scales", "Cross", "Rose", "Skull", "Hourglass", "Key", "Shield", "Sword", "Chalice", "Coins or pentacles", "Cups or chalices", "Wands or staffs", "Swords", "Mountains", "Bridges", "Castles", "Doors", "Windows", "Clouds", "Water", "Fire", "Earth", "Air", "Rainbows", "Horses", "Lions", "Wolves", "Dolphins", "Eagles", "Dragons.", ],

	"War" : ["spiky armour", "sword", "axe", "war hammer", "helmet", "buckler", "morningstar", "atomic bomb", "violence", "battle flag", "aircraft", "battlefield", "bomb", "catapult", "cavalry", "convoy", "destroyer", "gunner", "machete", "medal", "marksman", "mine", "missile", "parachute", "prisoner", "private", "squadron", "tank", "troops", "wound",],

	"Castle" : ["girders", "passageways", "tunnels", "caves", "cobblestone", "keep", "turrets", "moat", "portcullis", "guardroom", "drawbridge", "buttres", "curtain wall", "barbican", "tower", "gatehouse",],

	"Other" : ["glowing light", "smoke", "random", "chaotic", "origami", "crown", "book", "torch", "candle", "map","asphalt", "cracks", "pavement", "dirt", "slime mold", "long ribbons","torn paper", "origami", "burned paper", "vintage dress", "braids", "blood moon", "volcano", ],
};

