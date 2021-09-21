const firebaseConfig = {
  apiKey: "AIzaSyDnJUG9SRcKWht2tJRtdXQ5gi5QMtGbosc",
  authDomain: "lets-chat-83bce.firebaseapp.com",
  databaseURL: "https://lets-chat-83bce-default-rtdb.firebaseio.com",
  projectId: "lets-chat-83bce",
  storageBucket: "lets-chat-83bce.appspot.com",
  messagingSenderId: "301575401517",
  appId: "1:301575401517:web:953a4f5b9159e98af188a4",
  measurementId: "G-DK0YG5W43Q"
};

function load()
{
  user_name=localStorage.getItem("user_name");
  document.getElementById("username").innerHTML=user_name;
}

function logout()
{
  window.location="index.html";
}

function addRoom()
{
  
}