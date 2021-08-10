
db.createCollection('location', { capped: false })

db.location.createIndex({ name: 1 }, { unique: true })

db.location.insert([
	{
		_id: ObjectId("60f8d25a7f0e43cf4b5e069b"),
		name: "Hearthfire Hall"
	},
])
