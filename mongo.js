
{// Create a database called "contact"
    use contact
}

{// Create a collection called "contactlist" + Insert these documents in "contactlist"
    db.contactlist.insert([{Last name:" Ben Lahmer", First name: "Fares", Email: "fares@gmail.com", age:26},
        {Last name: "Kefi", First name: "Seif", Email: "kefi@gmail.com", age:15},
        {Last name:" Fatnassi", First name:" Sarra", Email: "sarra.f@gmail.com", age:40},
        {Last name: "Ben Yahia", First name: "Rym", age:4},
       { Last name: "Cherif", First name: "Sami", age:3} ])
   
}

{//Display all of the contacts list
    db.contactlist.find()
}

{//Display all the information about only one person using his ID.
    db.contactlist.findOne({_id: ObjectId("621f728ec694ad7cafef8b73")})
}

{//Display all the contacts with an age >18.
    db.contactlist.find({age:{$gt:18}})
}

{//Display all the contacts with an age>18 and name containing "ah".
    db.contactlist.find({$and:[{age:{$gt:18}},{'$expr':{'$regexMatch':{'input':{'$concat':['$firstName',' ', '$lastName']}, 'regex': 'ah', 'options': 'i' } }}]})
}

{//Change the contact's first name from"Kefi Seif" to "Kefi Anis".
    db.contactlist.update({lastName: 'kefi'},{$set:{firstName: 'Anis'}})
}

{//Delete the contacts that are aged under <5.
    db.contactlist.remove({age:{$lt: 5}})
}

{//Display all of the contacts list
    db.contactlist.find()
}