const BIB_CHARACTERS = {
	"Base" : ["boy","father","girl","child","grandfather","grandmother","man","mother","twins","widow","woman","teen","couple", "family", "people",],

	"Contemporary" : ["astronaut","ballerina","barmaid","bimbo","butcher","clown","detective","doctor","farmer","firefighter","fisherman","gangster","hiker","hunter","mechanic","merchant","model","nurse","park ranger","politician","rock band","scholar","schoolgirls","scientist","soldier","student","SWAT team","zookeeper", "photographer",],
	
	"Sports" : ["base jumper","BMX rider","bodybuilder","boxer","bungee jumper","cheerleader","dancer","deep sea diver","discus thrower","diver","freestyle motocross rider","gymnast","hammer thrower","high jumper","horseback rider","javelin thrower","long jumper","martial artist","mountain biker","parkour practitioner","pole vaulter ","racecar driver","rock climber","scuba diver","shot putter","skateboarder","skier","skier","snowboarder","stunt performer","surfer","trampolinist","triple jumper","wakeboarder","weightlifter",],

	"Medieval professions" : ["alchemist","apothecary","archer","armourer","artist","blacksmith","brewer","carpenter","cleric","cook","cooper","courtesan","dyer","emperor","empress","executioner","farmer","fisherman","fletcher","gladiator","hangman","healer","herbalist","hunter","innkeeper","jester","juggler","king","knight","lady","leatherworker","lord","mason","merchant","minstrel","noble","peasant","pirate","plague doctor","potter","prince","princesse","queen","scribe","scribe","seamstress","servant","servant", 
		"shinobi","shoemaker","slave","soldier","squire","tanner","tavern keeper","thief","tiler","torturer","trader","trapper","vestal","viking","vintner","weaver","woodcarver","woodcutter","woodsman","writer","yarn spinner","yeoman","zither player",],

	"Fairy Tales": ["king", "emperor", "empress", "knight", "princesse", "prince", "witch", "mage", "witch", "old man", "old lady", "poor farmer",],

	"Military, Soldiers": ["admiral","airborne","airman","archer","artillery","bombardier","captain","cavalry","CIA agent","co-pilot","colonel","commandos","corporal","crew chief","delta Force","FBI agent","field hospital","fighter pilot","general","green Berets","guard","gunner","infantry","lieutenant","loadmaster","major","marine","medic","military intelligence","military police","Mossad agent","navigator","Navy SEALs","ninja","NSA agent","pilot","policeman","private","quartermaster","rangers","sailor","samourai","scout","secret service agent","sergeant","sniper","soldier","soldier","special forces","swordsmith","tactical air control party","tank","thief","warbringer","warrior",],

	"Religious" : ["angel","archangel","bishop","cherubim","deacon","demon","pastor","devotee","friar","god","fates","graces","goddess","incubus","imp","monk","nun","pope","ophanim","priest","satan","seraphim","spirit","succubus","zealot",],

	"Pantheon" : ["Buddha","Jesus Christ","Krishna","Yahweh","Zeus","Apollo","Ares","Artemis","Athena","Dionysus","Hades","Hermes","Hestia","Poseidon","Thor","Vishnu","Adam","Eve","Abraham","Moses","Noah","Elijah","John the Baptist","Mary","Paul","Peter","Archangel Michael","Archangel Gabriel","Archangel Raphael",],

	"Paranormal" : ["mystic","oracle","psychic","shaman","mersmerist","prophet","alchemist","voodoo witch","warlock","witch","wizard","necromancer","seer","medium","tarot reader","astrologer","palm reader","psychic detective","ghost hunter","demon hunter","vampire hunter","werewolf hunter","monster hunter","witch hunter","alien hunter",],

	"Fantasy (creatures)" : [	"apparition","banshee","boggarts","brownies","changeling","cyclope","demon","dracula","dragon", 
		"fairy","fury","gargoyle","ghost","giant","gnome","goblin","golem","gorgon","gremlins","harpy","hobgoblins","imp","kelpie","leprechaun","lich","medusa","mermaid","monster","monstrosity","morrigan","mummy", 
		"nymph","ogre","ogres","orc","pegase","phantom","poltergeist","satyr","shade","snailman","specter","sphinx","sphinx","spirit","tengu","troll","unicorn","vampire","werewolf","White Knight","witch","wraith",],

	"Fantasy (character)" : [
		"amazon","barbarian","bard","battlemage","beastmaster","berserker","burglar","cleric","conjurer","death Knight","druid","dwarf","elementalist","elf","enchantress","faerie","goblin","healer","knight","mage","magician","necromancer","paladin","priest","psycho","pyromage","pyromancer","seeress","slayer","sorcerer","sorceress","summoner","swordmage","trickster","valkyrie","wanderer","warlock","witch","witchhunter","wizard",],

	"Mecanical Beeings": ["android","biomachine","computer","cyborg","drone","robot","transformers","truck","car","flight","rocket",],

	"Mythological creatures": ["angels","bigfoot","boggarts","brownies","centaurs","chimera","cockatrice","colchis bull","cyclops","demigod","demons","doppelganger","dragons","dryads","echidna","efreet","erinyes","fairies","fauns","gorgons","grendel","griffins","harpies","hippogriff","hydra","imps","jabberwock","kitsune","kraken","lamia","mermaids","minotaurs","mothman","nymphs","ogres","oni","orcs","ouroboros","pegasus","phoenixes","satyrs","sirens","sphinxes","succubus","tengu","triton","trolls","unicorns","valkyries","wights","will-o'-the-wisp","winged horse","wyvern","yara-ma-yha-who","yetis",],

	"Outerworld Creatures": [	"alien","Predator","extraterrestrial","xenomorph","E.T.","Grey","Reptilian","Insectoid","Mothman","Zorgon","Arcturian","Betelgeusian","Cygnian","Delphinian","Eltanin","Gliesian","Koldasian","Lyran","Orion","Sirian",],

	"Horror": ["cenobite","Cthulhu","draug","ghost","ghoul","great ancient","gremlin","living-dead","mummy","parasit","poltergeist","rat","skeleton","skull","worm","zombie",],

	"Animals": ["anaconda","ant","axolotl","bat","bird","bunny","camel","cat","crab","dog","dolphin", "donkey","dove","dragon","eagle","eel", "elephant", "fish","flamingo","fox","goat","gorilla","horse","insect","jelly fish","kangaroo","killer whale", "koala","lama","leech","linx","lobster", "meerkats","mouse","otter","owl","panda","paradise bird","penguin","pigs","raven","sea lion", "seahorse","seal","seashell","shark", "shrimp", "snake","spider","squid", "starfish", "toad","tuna","turtle","whale", 	"wolf","zebra",],

	"Plants, Vegetation": ["algae","aloe Vera","antarctic beech","azalea flower","banyan","baobab","birch","bonsai","bush","buttress roots tree","cactus","cedar","corn","dragon blood tree","lilies","mahogany","maple","mast tree","monkey puzzle tree","mushroom","oak tree","palm","papaya tree","poison ivy","ponderosa Pine","queensland bottle tree","sandbox trees","spruce","stone pine","sycamore tree","traveller’s tree","tree","vine","willow","yew tree",],

	"Others": ["acolyte","acrobat","adept","agent","alchemist","apothecary","archer","statue","assassin","bandit","blacksmith","bowman","brawler","captain","charmer","crusader","cutpurse","duelist","earth-shaker","fighter","fool","foreman","fortuneteller","gladiator","guard",
		"heavy tank","huntsman","hypnotist","illusionist","jumper","legatus","martial artist","matrona","mercenary","mountaineer","officer","paladin","paragon","patrol","pickpocket","pilgrim","pirate","potentates","protector","ranger","ringleader","rogue",],

	"Superheros and supervillain": ["Superman", "Batman", "Wonder Woman", "The Flash", "Aquaman", "Green Lantern", "Martian Manhunter", "Black Canary", "Green Arrow", "Hawkman", "Batgirl", "Supergirl", "Nightwing", "Robin", "Spider-Man", "Iron Man", "Thor", "Captain America", "Hulk", "Black Widow", "Hawkeye", "Doctor Strange", "Daredevil", "Jessica Jones", "Luke Cage", "Iron Fist", "Wolverine", "Storm", "Jean Grey", "Cyclops", "Gambit", "Deadpool", "Magneto", "Professor X", "The Punisher", "Black Panther", "Doctor Doom", "The Thing", "Mr. Fantastic", "Invisible Woman", "The Joker", "Lex Luthor", "Darkseid", "Harley Quinn", "Domino", "Catwoman", "Two-Face", "The Riddler", "Bane", "Poison Ivy", "Penguin", "Deathstroke", "Sinestro", "Black Adam", "Brainiac", "General Zod", "Mongul", "Captain Cold", "Gorilla Grodd", "Reverse-Flash", "Black Manta", "Thanos", "Loki", "Doctor Octopus", "Green Goblin", "Magneto", "Doctor Doom", "Venom", "Carnage", "Red Skull", "Ultron", "Mystique", "Apocalypse", "Juggernaut", "Kingpin", "Sabretooth", "The Mandarin", "Ra's al Ghul", "Bizarro", "Doomsday", "The Vulture"],

	'Dr Who bestiary': ["ood", "sontarans","weeping angels","daleks","cybermen","silence","vashta nerada","zygons","mire","ice warrior","adipose","tractators","emojibots","cloister wraiths","sea devils","judoon","silurians","sandmen","saturnyns","axons","clockwork droids","slitheen","pigmen",],

	"Strangest things": ["balderdash","cattywampus","collywobbles","fiddlesticks","flummox","gobbledygook","hodgepodge","hooligan","kerfuffle","lollygag","lollygagging","malarkey","noodleheaded","piffle","razzle-dazzle","dkedaddle","taradiddle","whippersnapper",],
};





