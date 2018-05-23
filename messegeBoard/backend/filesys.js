/**
 * Created by Zul Qarnain on 5/23/2018.
 */

var fs= require("fs")

fs.mkdir('node',function (error) {
    if(error){
        console.log("folder exist")
    }
    else
        fs.writeFile("./node/myfile.txt","mtmdfdfas")
})

fs.unlink("./node/myfile.txt",function (error) {  //remove files
    if(!error){
        fs.rmdir("node")
        console.log("file removed")

    }

})