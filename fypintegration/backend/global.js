/**
 * Created by Zul Qarnain on 4/21/2018.
 */

var process = require("process")

var question=[
    "What is your name?",
    "What is your favorate programming language?"
]
var answers=[]

function ask(i) {
    process.stdout.write(question[i])
    process.stdout.write(">")
}
process.stdin.on("data",function (data) {
    answers.push(data.toString().trim())

    if(answers.length<question.length){
        ask(answers.length)
    }
    else
    process.exit()

})

process.on("exit",function () {
    process.stdout.write("\n ");
    process.stdout.write("your name is  "+answers[0]+" and favorate language is "+answers[1]);
    process.stdout.write("\n ");
})
ask(0)

//var path = require("path")
//var hello="hello from node"
//var sliceMe=hello.slice(12)
//console.log(`hello ${sliceMe}`)

//console.log(__dirname)  //get the directory name
//console.log(__filename) //the filename

//console.log(`path of the file ${path.basename(__filename)}`)

/*
function grab(flag){
    var res  = process.argv.indexOf(flag)
    return (res===-1) ? null:process.argv[res+1]        //process would hold the data that exists golabally and want to use
}
var user= grab("--user")
var greeting = grab("--greeting")

if(!user||!greeting){
    console.log("data not exists")
}
else
    console.log(`the user detail is ${user} and ${greeting}`)*/
