importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
         apiKey: "AIzaSyDr4ao_HK3IoXjTPIuzufWSn0AwA6eOER0",
           authDomain: "donee-cda0c.firebaseapp.com",
           projectId: "donee-cda0c",
           storageBucket: "donee-cda0c.firebasestorage.app",
           messagingSenderId: "803674483135",
           appId: "1:803674483135:web:16e94d45f7a1cabb87190a",
           measurementId: "G-F2P5VGY875"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});