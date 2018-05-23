/**
 * Created by Zul Qarnain on 4/21/2018.
 */

var waitTime =3000
var currentTime =0
var waitInterval =100
var percentageWeighted=0

function writepercentage(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0)
    process.stdout.write("waiting.... "+p+"%")
}
var interval= setInterval(function () {

    currentTime =waitInterval+currentTime
    percentageWeighted = Math.floor((currentTime/waitTime)*100)
    writepercentage(percentageWeighted)

},waitInterval)

setTimeout(function () {
    clearInterval(interval)
    writepercentage(100)

},waitTime)