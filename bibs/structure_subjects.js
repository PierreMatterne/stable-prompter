const SUBJECTS = {
	"Portraits" : [
		"The portrait of a %adj_chara %character reading one %color book.",
		"The %color %material bust of an %adj_chara %character.",
		"The %adj_chara %character of a %color president.",
		"Portrait of a young %character with a %color hat and a big earing.",
		"An %adj_chara %material sculpture of the head of a %character.",
		"Portrait of a %adj_chara %character holding a baby %animal in her arms.",
		"Side portrait of a %adj_chara %character in rich clothes.",
		"Tilted head of a %adj_chara %character with long dark hair.",
		"Portrait of a %adj_chara %adj_chara %character, holding a purse, barely smiling.",
		"Portrait of a %character in ligh cloth, turning her back on us.",
		"Portrait of a %character wearing a %animal fur around neck.",
		"Royal portrait of a %character, well dressed, posing in the garden.",
		"Picture of a family of %adj_chara %character.",
		"Picture of %adj_chara friends.",
		"Picture of a %character celebrity.",
		"Picture of an historical figure.",
		"Picture of a %adj_chara pet.",
		"Picture of an elderly %character.",
		"Picture of a %adj_chara musician.",
		"Picture of a %character artist.",
		"Picture of a %adj_chara political leader.",
		"Picture of a business leader.",
		"Picture of a %character teacher.",
		"Picture of a %adj_chara sports figure.",
		"Picture of a %adj_chara writer.",
		"Picture of an actor or actress.",
		"Picture of a military personnel.",
		"Picture of a %adj_chara religious figure.",
		"Picture of a %adj_chara scientist.",
		"Picture of a %adj_chara philosopher.",
		"Picture of a %adj_chara royalty.",
		"Picture of a %adj_chara activist.",
		"Picture of a %adj_chara %character children.",
		"Picture of a %character environmentalist.",
		"Picture of a %adj_chara performer.",
		"Picture of a mythical %character.",
		"Close-up of a %material and %material sculpture of a %adj_chara %character.",
		"A crying bereaved %adj_chara %character, with black %cloth, holding a dying child.",
		"%adj_chara warrior %character, %hair, gorgeous, juicy, curvy, voluptuous, bending over.",
		"Gorgeous %adj_chara %adj_chara %character in 3D.",
		"An %adj_chara %color %character clothed, %color skin %character with %color eyes.", 
		"portrait of a %adj_chara %color skin punk %adj_chara %character, ruffled collar, long hair.",
		"Portrait of a %adj_chara %adj_chara %character with bare shoulders holding a %color %material flower.",
		"Portrait of a %adj_chara %character.", 
		"Full body design in relief of the %adj_chara %character.",
		"Detailed picture of a %adj_chara %character with %cloth.",
		"Portrait painting of a posing %character %character hybird.",
		"A pirate %character holding cutlass and posing with a parrot on shoulder.",
		"Ancient %adj_chara %character wearing %cloth with %cloth with straight ruby red hair on a sunny day. ",
		"Traditionnal portrait of a %character living underwater.",
		"A candid portrait of an old %material %character.",
		"Face of a winged angel and devil brother.",
		"A %color and %color %character.",
		"Self-portrait of a %character holding a white %material stick in hand.",
		"Close-up portrait of a %character eating a candy",
		"The portrait of a young blonde %character, with %cloth, %hair, a %color streak of hair.",
		"Small %character with dusty %color hair and large, shining %color eyes.",
		"The bust of a %character with %color %cloth, %hair.",
		"Submissive %character, fetish model, bizarre, taboo, leather, latex, rubber",
		"Egyptian %character dressed in %color and %color fabric.",
		"%character dressed for halloween, long orange hair.",
		"Seductive young %character. Hollow dark eyes, missing limb, ripped clothes, cheekbones.",
		"Profile portrait of a %character with %cloth, and earrings.",
		"Portrait of a %adj_chara %character with %cloth and skull.",
		"Two sapphic lesbian %character in light %color robes, in the clouds.",
		"Front face, visage cut in half, part %character, part %character.",
		"Closeup on face of an half %character with peeling skin. Few hair.",
		"Portrait art of cyberpunk dark %character with cyberglasses, suggestive outfit design.",
		"Teatcher %character in a mysterious class room, sitting with closed eyes.",
		"Young %actor as a graphic novel female protagonist.",
		"A time traveller %character in a futuristic suit.",
		"A portrait of a shy, blushing %character wearing bikini bottom with ripped shorts.",
		"The face of a dirty %character during the day. Wrench and Tools.",
		"Biomechanical young female %character with a %material face.",
		"Face of a short-haired %character in an elaborate %cloth. She's in and observatory with telescope and microscopes.",
		"Portrait of a %character in a plant conservatory like Kew Garden. Exotic plants, impressive foliage.",
		"Unhappy %adj_chara %character, standing in a desert.", 
		"%adj_chara %character wearing rich %cloth on his %material throne, with a holy artefact.",
		"Portrait of a young fallen %character with %color and %color long hair.",
		"Native exotic country %character, innocently erotic, %color hair, big bosom, sitting on rice terraces, stripped skirt, bead neaklace.",
		"Gothic %character face with golden glowing eyes. Shiny hair, smooth pale skin, war facepaint.",
		"Goth female %character. Toned arms. Dressed like a Valkyrie.",
		"A portrait of a african %character, ottoman empire, plump lips, royal clothes with golden jewelry.",
		"%adj_chara %adj_chara %character with %hair, wearing %cloth with %cloth on a sunny day.",
		"Lovely curvy %adj_chara %character with ample bosom.",
		"A young %character in ballet leotard. She's svelte, slender. Nose bleeding.",
		"%character in %cloth wearing a gothic mask.",
		"%color oil paiting portrait of a %character in %cloth.",
		"In a %place, a female %character with antlers, covered in mud and entrails",
		"%character with big %color eyes. Sad smile. %cloth.",
		"%adj_chara %character with big belly showing. %cloth letting the bely visible.",
		"Extravagant dark fantasy %adj_chara %character girl model with bright %color %hair.",
		"A noble %character posing in front of %color pattern wall.",
		"Photo of a %adj_chara %character with %hair wearing %cloth.",
		"A %adj_chara %character in a %material %place.",
		"Portrait of a %adj_chara %adj_chara %character with %hair",
		"A %material %character on stage. %color and %color lights. %character in suggestive suits.",
		"Profile portrait %character wearing %cloth.",
		"Portrait of a %character underwater, in a swimming pool made of %material and %material.",
		"A %adj_chara %color %character with %hair. A fireball in hands.",
		"Viewed through a %adj_chara window, a %character standing on a railing.",
		"A %adj_chara %adj_chara %character with big eyes and pregnant wet %character twins on the ground.",
		"%adj_chara %character with fireflies and dust and glitter and sun ray in air.",
		"A picture of an %adj_chara %color woman with %hair, observing the city from a window.",
		"Fine %adj_chara %adj_chara %character. Dressed with %cloth and %cloth.",
		"Portrait of an %adj_chara %character in a %cloth with dark %color hair %color skin.",
		"Portrait of two kissing %adj_chara %character with %hair wearing wedding %cloth.",
		"Portrait of two expressive %adj_chara %character in %cloth hand in hand.",
		"Group photo of sport swim team wearing %cloth",
		"Stained Glass portrait of a %character girl",
		"Two %adj_chara %character with %hair wearing %cloth",
		"A young boy and girl, prince and princess in a %place.",
		"A cute %character, creature of darkness with big cutes cat eyes.",
		"A erotic oil painting of a %adj_chara %adj_chara %character ",
		],

"Scene": [
	"An %adj_chara %character %action.",
	"A %adj_chara %character %action in a %adj_chara watered temple.",
	"Two %adj_chara %character %action.",
	"A %character in a suit %action in a crowded street.",
	"A %adj_chara %character %action, smiling.",
	"A %adj_chara %character %action while his following %character %action.",
	"An %adj_chara %character %action.",
	"Three %character %action, while a fourth is sitting, listening to them.",
	"%character %action. Some %animal running around them.",
	"%adj_chara %character %action. Some %character behind them.",
	"Two %character, %action. Some light on the ground.",
	"A night scene with a group of %adj_chara %character %action next to a big illuminated building.",
	"A %character %action.",
	"A %character is standing in front of the %building. It had %hair, %color eyes, and %adj_chara characteristics.",
	"A %character is sitting under the shade of a %plant in %place. It had %color hair, %adj_chara personality, and is wearing %cloths.",
	"A %adj_chara %character lost in a %adj_object %building.",
	"A %adj_chara %character praying in a %place.",
	"A sporty %character crawling in a narrow %place",
	"A female %character %action in a %adj_object %building",
	"A %character in the center of a %place, on television set.",
	"A black and white photography in a newspaper of a %character %action.",
	"A %character %action in a television studio.",
	"In a %place, some %adj_chara %character are %action",
	"A small group of %adj_chara %character, %action.",
	"A large groupe of %adj_chara %character, %action.",
	"A dining table of %character, enjoying a meal.",
	"Four %character, praying in circle.",
	"Acting as one, three %adj_chara %character are %action",
	"A %character in an artificial womb, some %character cleaning the place.",
	"A frighteningly horrific %adj_chara %character %action.",
	"A group of %adj_chara %character.",
	"Two %adj_chara %adj_chara %character %action.",
	"Some skelettons of dead warriors %action.",
	"Sport swim %character team wearing %cloth %action.",
	"%adj_chara %character in %cloth %action.",
	"A %character with %hair %action.",
	"%adj_chara %character with long %color %hair %action.",
	"A %character in a suit %action.",
	"A %character %action.",
	"Two %character %action.",
	"Three angry %character %action.",
	"Four %character, %action.",
	"Blonde %character in %color dress %action.",
	"A %adj_chara %character smiling, %action.",
	"Love couple %adj_chara %character %action.",
	"A %adj_chara %adj_chara %character with %hair %action.",
	"Silhouette of a %character and a %character %action.",
	"two %adj_chara %character, egyptian gods, ankh staff, %action.",
	"Two %adj_chara %character %action.",
	"A hugging couple of %character in a crowd.",
	"A silly smiling %character, %action. She's intense.",
	"A group of %adj_chara %character in a cave, fighting.",
	"A %character in %color clothes %action.",
	"A %color %character %action.",
	"A flock of young puppy %character %action.",
	"Four %character in the center of a %place, cerned by crowd of armed %character, %material weapons ready.",
	"Two young %character %action. They are in a dark forest %action.",
	"A %character %action, in a room full of people watching.",
	"A %character %action. A panicked young %character behind.",
	"Some %character %action. Blood on the wall. Bruise and ripped clothes.",
	"A nude %character in an artistic painter workshop. Men with mustaches talking.",
	"Celestial dark %character, %action.",
	"A %character %action, over a giant %material mushroom.",
	"A young %character, %action, under a ray of light in the dark ruin of a church.",
	"A %adj_chara %character, grotesque and horrifying, %action.",
	"Two %character wearing %color %cloth %action.",
	"Black african %character in the %place, %action.",
	"Tall and large angelic blonde %character %action.",
	"An albino %character in black bride robe %action.",
	"A young %character %action. He seems in shock. There is blood on his face.",
	"A %character, %color long coat, %color scarf, %action, near a haunted house.",
	"A %character, a %character and a %character are on a boat. One of them fall in the water…",
	],

"Landscapes": [
	"Two %character on a roof. In a distance, a %material tower partially masked by the fog.",
	"A huge %nameplace with giant %plant tree.",
	],

"Vehicule": [
	"A car made of %material, exposed in a place.",
	"A concept drawing of a vegetal hovering vehicule.",
	"An old rusted iron locomotive, buried under vegetation. Light is working.",
	],

"Animal": [
	"A prehistoric %adj_chara %animal lurking in a cave",
	"A demonic %animal, invoqued in a %place by a %adj_chara %animal",
	"A fantastic %adj_chara %adj_chara flying in the night",
	"A mechanical %animal and a %adj_chara %animal",
	"A fantastical %adj_chara %animal in a %place",
	"A medieval %adj_chara %animal beast, %action",
	"A %animal sleeping on a cushion.",
	"A %animal dying at the bottom of a fish tank.",
	"A %adj_chara %animal four-legged creature running in thermal waters sources.",
	"A furry though %animal missing one leg. Many scars. ",
	"A %adj_chara critter with shiny %color carapace.",
	"A %adj_chara %animal hunting a %animal prey.",
	"A %animal sleeping under a %plant.",
	"A %animal with blood on face, eating the guts of a %animal, cage rib open.",
	"A group of %adj_chara %animal drinking water on a lake.",
	"A flock of flying %animal.",
	"In a %place, a male %animal reproducing with a female %animal, under the shadow of a tree.",
	"A very old %animal walking in an animal cemetery. Bones dressed.",
	],

"Building": [
	"A %building with small doors and no window.",
	"A tower made of %material.",
	"A %building made of %material spheres connected by tubes.",
	"A flat %building with %color glass and %material columns.",
	"A high modern %building with round %color metal pieces.",
	"An ancient %building with %material decorations, covered by plants.",
	"It's night. A dark street with a spooky %building. A few lantern light at the windows.",
	"Some little house with %color roof. Colored small %adj_object windows.",
	"A %color %adj_object %building with clouds.",
	"A %material model of a %adj_object %building complex.",
	"A dark street with %adj_object appartment and shadows.",
	"An illuminated %adj_object %building in the street by night. %material columns.",
	"A heavy %color %building made of %material, lost in %place.",
	"A small %building alone in %place.",
	"A beach in %place with nice %building, except one dark %color %building.",
	"A %building, builded near %place.",
	"A %adj_object park next to %place.",
	"A %place with some %adj_object %building.",
	],

"Objects": [
	"A %material %object, decorated with a coat of arms, featuring a %animal.",
	"A shiny %object made of %material.",
	"A %object floating into trouble waters.",
	"A %object with bolts and nuts.",
	"A %object in a circle of %object. Priests flexing around it.",
	"An %object falling from a %place in fire.",
	"Schematic blueprint, sketch of a %object with the form of a %chara.",
	"Some old %object in a jar.",
	"A swarm of %object, %object and other %objects parts.",
	"Organic %object, necromechanics.",
	"Surreal mythological %chara %object %material bas relief.",
	"A %object with clothes, jar with liquids, masks, skulls.",
	"A %object with magic aura. Shiny %material.",
	"A %color and %material embroidered gothic medieval dress with elegant pattern.",
	"A %material %object with %object.",
	"Mythical %object in the form of a %chara.",
	"An old %adj_object book with %material finish.",
	"Illustration of a %adj_object %material %object.",
	"Female %adj_object %object.",
	"A small precious %object in a %adj_object box.",	
	],

"Medieval drawing": 
[
	"An illumination depicting a %building with several towers and battlements.",
	"An intricate drawing on a page yellowed with age. A knight on horseback, in full armor, holding a lance.",
	"An illumination in a codex. A woman bath in a bucket. A rabbit watches her.",
	"A drawing in black ink on a parchment or vellum surface.",
	"A wood gravure showing soldiers with spears and bows, and a group of people gathered outside the castle gates.",
	"A copper gravure, depicting a man holding a shield.",
	"A woodcarving, representing death dancing around a rich couple.",
	],
};




/*
--------------------------------
MAIN SUBJECTS
--------------------------------
A %adj_place %adj_place landscape of [geographic location].
A %adj_chara %character in a %adj_chara environment. 
A %adj_chara %character in its natural habitat. 
A %adj_chara %character wearing [clothing], 
A %adj_chara %character.
A %adj_chara %character, dressed in [clothing], standing in front of a %adj_chara background.
A %adj_chara %character, in a %adj_chara setting.
A %adj_chara %character, with %adj_chara details and %adj_chara features.
A design of a %adj_chara %character with %adj_chara accessories, in a %adj_chara environment.
A design of a %adj_chara %character.
A group of %adj_chara %adj_chara %character.
A landscape of a %adj_chara %adj_chara [setting].
A panoramic view of a %adj_chara %adj_chara [natural feature].
A portrait of a %adj_chara %character in a %adj_chara setting.
A portrait of a %adj_chara %character with %adj_chara features, in a %adj_chara setting.
A scene featuring a %adj_chara %character in a %adj_chara environment.


*/