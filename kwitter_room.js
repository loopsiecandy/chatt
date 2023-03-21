
var firebaseConfig = {
      apiKey: "AIzaSyDoiEsme-frcwu_u7JYwhR4PNB3kZo61JY",
      authDomain: "chatapp-847f5.firebaseapp.com",
      databaseURL: "https://chatapp-847f5-default-rtdb.firebaseio.com",
      projectId: "chatapp-847f5",
      storageBucket: "chatapp-847f5.appspot.com",
      messagingSenderId: "877584767546",
      appId: "1:877584767546:web:a655f9f1372fd9324e3303"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";
function addroom(){
roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
purpose:"adding roomname"
});
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname - "+Room_names);
row="<div class='roomname'id="+Room_names+"onlcick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("username");
localStorage.romoveItem("roomname");
window.location="index.html";
}