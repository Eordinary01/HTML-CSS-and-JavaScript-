db.items.find({price: 6900})

// Deleting items from the Mongo Database
db.items.deleteOne({price:69000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match..