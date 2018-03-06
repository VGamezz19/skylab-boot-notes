const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/cats')

const Cat = mongoose.model('Cat', {name: String})


const kiti = new Cat({name: "cicuta"})

kiti.save().then(console.log)

Cat.find({ }, { "name": 1,"_id": 0 } , (err,data) => {
    console.log(data)
})