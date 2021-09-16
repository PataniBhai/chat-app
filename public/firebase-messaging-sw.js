/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDXypPm-ka6NpACJLo8JojS96R2qkYW3jQ",
  authDomain: "chat-app-5a77c.firebaseapp.com",
  databaseURL: "https://chat-app-5a77c-default-rtdb.firebaseio.com",
  projectId: "chat-app-5a77c",
  storageBucket: "chat-app-5a77c.appspot.com",
  messagingSenderId: "740678778384",
  appId: "1:740678778384:web:a626082f526b5d358d5495",
  measurementId: "G-6PS5QJXBV4"
});

firebase.messaging();
