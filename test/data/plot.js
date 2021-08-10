
db.createCollection('plot', { capped: false })

db.plot.createIndex({ name: 1 }, { unique: true })

db.plot.insert([
	{
		_id : ObjectId("60f8ceabbf81baf60871e8da"),
		name: "The Death Cure 1 (Wake Me Up Inside / Cards for Humanity)",
		priority: 2,
		size: 2,
		timing: 1,
		duration: 0,
		synopsis: "[CORE PLOT] The Death Cure - Part 1 of 6\n\nChapter 2 commences with the players waking up from torpor (Due to the intense necromantic energy of the Harvestwind™) in the Hearthfire Hall with their last memories being of what happened at the end of Chapter 1. In order to exit the Hall they need to piece together information they have so far gathered and fill-in the red-string murder board in order to revive themselves. The Quartermaster will guide them in the process, and Tempus will brief them on how they died, and what they need to do next.\nNote: There should be a particular emphasis on getting the players to examine their undead states and the nature of the Harvestwind, thereby setting them up for developing the cure.\n\nAdditionally, there will also be some new notes scattered around the hall belonging to one of the 'Temple Guard' that they killed in front of the Wellspring. In it the writer(s) describe how they had identified a possible means of innoculating or even curing those affected by the Harvestwind, and if they had synthesised a quantity of this that they would now attempt to feed into the Wellspring before the Harvestwind was unleashed. They make it quite clear that they intended to use time travel to go back to a point before the Harvestwind. The player corresponding to this writer will also have a lockbox in their pack containing even more illuminating notes.\nNote: The wellsprings effectively act as lures in the veins of Talos, and this one in Wycstraithe was deemed the most likely to work.",
		objectives: [
			{
				description: "Get players back up to speed with the game after a long break, and outlay to them what they need to do to create a cure for the Harvestwind, and why, setting them up for the next 5 parts of the plot-arc.",
				tags: [
					"puzzle",
					"social"
				]
			}
		],
		locations: [
			{
				reference: {
					id: ObjectId("60f8d25a7f0e43cf4b5e069b")
				},
				relevance: ""
			}
		],
		participants: [
			{
				reference: {
					id: ObjectId("60f8d25a1e284ddb936d044b")
				},
				relevance: ""
			},
			{
				reference: {
					id: ObjectId("60f8d25a1e284ddb936d044c")
				},
				relevance: ""
			},
			{
				reference: {
					id: ObjectId("60f8d25a1e284ddb936d044d")
				},
				relevance: "",
				required: true
			}
		],
		resources: [
			{
				reference: {
					id: ObjectId("60f8d25ac2190599ce6fd269")
				},
				relevance: ""
			},
			{
				reference: {
					id: ObjectId("60f8d25ac2190599ce6fd26a")
				},
				relevance: ""
			},
			{
				reference: {
					id: ObjectId("60f8d25ac2190599ce6fd26b")
				},
				relevance: ""
			},
			{
				reference: {
					id: ObjectId("60f8d25ac2190599ce6fd26c")
				},
				relevance: ""
			}
		],
		outcomes: [
			{
				description: "The players recall enough of what they found and did in Chapter 1 to properly engage with Chapter 2 plot.",
				result: 1
			},
			{
				description: "The players are still at a loss when they are able to leave the Hearthfire Hall.",
				result: -1
			},
			{
				description: "They fuck it up buy using people who drank from the wellspring.",
				result: -2
			}
		],
		updates: [
			{
				status: "proposed",
				notes: "",
				time: ""
			},
			{
				status: "writing",
				notes: "",
				time: ""
			},
			{
				status: "ready",
				notes: "",
				time: ""
			},
			{
				status: "running",
				notes: "",
				time: ""
			},
			{
				status: "complete",
				notes: "",
				time: ""
			}
		]
	}
])
