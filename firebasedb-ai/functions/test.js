o={z:2,a:{x:1},c:false}

Object.getOwnPropertyDescriptor(o,"a",{enumerable:false});
Object.getOwnPropertyDescriptor(o,'z',{enumerable:false});

// console.log(Object.keys(o));


const functions = require('firebase-functions');
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pizzadelivery-d4ea0.firebaseio.com"
});

defaultAuth = admin.auth();
var database = admin.database();


var dref = admin.database().ref("/users");
dref.on("child_added", function(datasnapshot) {
    var data = datasnapshot.val();
    var fcm = data.fcm;
    var type = data.type; 
    var uid = data.uid;
    ;
    if(fcm!==undefined){
    // fcm = Object.keys(fcm).map(key => Object.assign({}, { key: key }, fcm[key]));
    // console.log(fcm);
    getFcm = firebase.database().ref('/users/' + uid + '/fcm/');
    console.log(getFcm);
    // getFcm.on('value', function(snapshot){
    // snapshot.forEach(function(child){
    //     // var device = child.device;
    //     console.log(child);
    // });
    // console.log(snapshot);
});
}
});