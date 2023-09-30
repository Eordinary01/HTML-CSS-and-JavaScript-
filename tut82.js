// Searching for  data in mongo db
use Emart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating:3.5})
db.items.find({rating:{$gte: 3.5}})
// db.items.find({rating:{$gt: 3.5}})
// And Operator
db.items.find({rating: {$gt:4.5}, price:{$gt:5200}, sold:{$gt:700}})

// db.items.find({rating: {$gt:6.5}, price:{$gt:7200}, sold:{$gt:7000}})

db.items.find({$or:[{rating:{$lt: 5.5}}, {price:{$gt: 690000}}]})

db.items.find({rating: {$gt: 3.5}}, {rating: 1})


db.items.find({price: {$gt: 690}}, {price: 1})

db.items.find({qty: {$gt: 69}}, {price: 1})
