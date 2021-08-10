
db.createCollection('resource', { capped: false })

db.resource.createIndex({ name: 1 }, { unique: true })

db.resource.insert([
	{
		_id: ObjectId("60f8d25ac2190599ce6fd269"),
		name: "Red-String Murder Board"
	},
	{
		_id: ObjectId("60f8d25ac2190599ce6fd26a"),
		name: "Lockbox"
	},
	{
		_id: ObjectId("60f8d25ac2190599ce6fd26b"),
		name: "Illuminating Notes"
	},
	{
		_id: ObjectId("60f8d25ac2190599ce6fd26c"),
		name: "Death Cure MB Notes"
	},
])
