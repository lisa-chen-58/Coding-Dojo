// COMMAND STEPS TO USING MONGODB

// cd c:/'Program Files'/MongoDB/Server/5.0/bin

// ./mongo

// use my_first_db
// db.createCollection('students')

// db.students.insert({name: 'Saria', home_state: 'WA', lucky_number: 3, birthday: {month: 10, day: 30, year: 1921}})

// db.students.insert({name: 'Catdog', home_state: 'FL', lucky_number: 2, birthday: {month: 11, day: 10, year: 1993}})

// db.students.insert({name: 'Peanut', home_state: 'CA', lucky_number: 7, birthday: {month: 4, day: 3, year: 1946}})

// db.students.insert({name: 'WhatsKickin', home_state: 'CA', lucky_number: 14, birthday: {month: 2, day: 3, year: 1946}})

// db.students.insert({name: 'MsChicken', home_state: 'WA', lucky_number: 6, birthday: {month: 6, day: 29, year: 1999}})

// db.students.insert({name: 'Wicken', home_state: 'CA', lucky_number: 1, birthday: {month: 8, day: 10, year: 2005}})

// db.students.find().pretty()

// db.students.find({$or: [{home_state: "CA"}, {home_state: "WA"}]}).pretty()

// db.students.find({lucky_number: {$gt: 3}}).pretty()

// db.students.find({lucky_number: {$lte: 10}}).pretty()

// db.students.updateMany({lucky_number: {$lte:21}},{$set: {interests: ["coding","brunch","MongoDB"]}})

// db.students.updateOne({name: {"Saria"}},{$set: {interests: ["eating,sleeping,more_eating"]}})

// db.students.update({name: 'Saria'},{$push: {interests: 'sniffing'}})

// db.students.update({name: 'MsChicken'},{$push: {interests: 'frying itself'}})

// db.students.update({name: 'Wicken'},{$push: {interests: 'horcrux'}})

// db.students.update({name: 'Peanut'},{$push: {interests: 'allergies'}})

// db.students.update({name: 'WhatsKickin'},{$push: {interests: 'Kicking'}})

// db.students.update({name: 'Catdog'},{$push: {interests: 'attaching at the hip'}})

// db.students.update({name: 'WhatsKickin'},{$push: {interests: 'taxes'}})

// db.students.update({name: 'WhatsKickin'},{$pull: {interests: 'taxes'}})

// db.students.remove({home_state: 'CA'})

// db.students.remove({name: 'MsChicken'})

// db.students.remove({lucky_number: {$gt: 5}}, true)

// db.students.updateMany({},{$set: {number_of_belts: 0}})

// db.students.updateMany({home_state: "WA"},{$inc: {number_of_belts: 1}})

// db.students.updateMany({},{$rename: {'number_of_belts': 'belts_earned'}})

// db.students.updateMany({},{$unset: {"lucky_number": ''}})

// db.students.updateMany({}, {$set: {'updated_on': Date()}})