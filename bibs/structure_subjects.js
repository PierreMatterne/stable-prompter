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
		],
	"Scene": [
		"An %adj_chara %character dancing in a %plant garden.",
		"A %adj_chara %character meditating between two %adj_chara oak trees in a %adj_chara watered temple.",
		"Two %adj_chara %character playing cards around a fire.",
		"A %character in a suit kissing a %character in %color in a crowded street.",
		"A %adj_chara %character holding his beloved %animal in his arm, smiling.",
		"A %adj_chara %character walking while his following servant hold her umbrella.",
		"An %adj_chara %character turning around of his model, lying nude in the sand.",
		"Three %character standing and talking, while a fourth is sitting, listening to them.",
		"%character playing on the %material beach. Some %animal running around them.",
		"%adj_chara %character running and crying. Some %character behind them.",
		"Two %character, walking away under the rain. Some light on the ground.",
		"A night scene with a group of %adj_chara %character talking next to a big illuminated building.",
		"A %character sleeping under a %adj_chara %plant.",
		],
	"Landscapes": [
		"Two %character on a roof. In a distance, a %material tower partially masked by the fog."
		],
	"Vehicule": [
		"A car made of %material, exposed in a place.",
		"A concept drawing of a vegetal hovering vehicule.",
		"An old rusted iron locomotive, buried under vegetation. Light is working.",
		],
	"Building": [
		"A %building with small doors and no window.",
		"A tower made of %material.",
		],
	"Objects": [
		"A %material %object, decorated with a coat of arms, featuring a %animal.",
		"A shiny %object made of %material.",
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

---------------------------------------------
ADDITIONAL FEATURES
---------------------------------------------
featuring [adjective 3] [natural feature] and [adjective 4] [natural feature 2].
The image should feature [adjective 3] [noun 2].
with [adjective 2] details and [adjective 3] features. 
with [adjective 2] features and [adjective 3] details.
with [adjective 3] [natural feature 2] in the foreground. 
with [adjective 3] [natural feature] in the distance. 


---------------------------------------------
TECHNIQUES
---------------------------------------------
The image should highlight its [technique] features.
The image should showcase its [technique] qualities.
with a focus on [adjective 3] use of [technique].

let techniques = ["lighting", "color", color and texture", "light and shadow", "atmospheric effects"];

-----------------------------------------
INSPIRATION FROM
-----------------------------------------
Draw inspiration from architectural designs by [architect 1], [architect 2], 
Draw inspiration from artists like [artist 1], [artist 2], and [artist 3], 
Draw inspiration from artists such as [artist 1], [artist 2], and [artist 3], 
Draw inspiration from designs by [designer 1], [designer 2], and [designer 3], 
Look to artists like [artist 1], [artist 2], and [artist 3] for inspiration, 
-----------------------------------------------
INFLUENCE
-----------------------------------------
It aim to capture the essence of [influence].
It aim to capture the feeling of [influence].
It is a representation of [influence].
The [subject] is a representation of [influence].
It is under the influence of [influence].
It has been influenced by [influence].
Influenced by [influence].
*/