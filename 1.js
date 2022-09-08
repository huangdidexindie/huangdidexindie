const fs = require("fs")
const path = require("path")
var jsonexport = require('jsonexport')

let p = path.join(__dirname, "test.json")
let result = JSON.parse(fs.readFileSync(p).toString('utf8'))

jsonexport(result,function(err, csv){
    if(err) return console.log(err)
    console.log(csv)
    fs.writeFileSync("test2.csv", csv, { encoding: "utf8" })
})