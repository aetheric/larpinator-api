
db.createCollection('participant', { capped: false })

db.participant.createIndex({ name: 1 }, { unique: true })

db.participant.insert([
	{
		_id: ObjectId("60f8d25a1e284ddb936d044b"),
		name: "Tempus"
	},
	{
		_id: ObjectId("60f8d25a1e284ddb936d044c"),
		name: "Impus"
	},
	{
		_id: ObjectId("60f8d25a1e284ddb936d044d"),
		name: "Quartermaster"
	},
])
