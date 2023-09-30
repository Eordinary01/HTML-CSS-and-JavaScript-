// Inserting data in mongo db
use Emart

db.items.insertOne({name:"Samsung note 69", price:69000, rating:4.5, qty:69, sold:59})
db.items.insertMany([{name:"Samsung note 69", price: 69000, rating:4.5, qty:69, sold:59},{name: "Iphone69", price: 690000, rating: 5, qty: 690, sold: 690},{name:"Nokia 69", price:6900, rating:5.5, qty:6900, sold:5009}])

db.items.insertMany([{name:"Samsung", Model:"S69", price: 169000, rating: 5, qty:6900, sold:4000}, {name:" Iphone", Model:"I69", price: 269000, rating: 5, qty:690, sold:400},{ name:"One Plus", Model:"One69", price: 69000, rating: 4, qty:690000, sold:400000},{name:"Nokia", Model:"N69", price: 69999, rating: 3, qty:6900000, sold:400}])
