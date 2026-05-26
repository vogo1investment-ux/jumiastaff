import { initializeApp }

from

"https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {

getAuth

}

from

"https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {

getFirestore

}

from

"https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig={

apiKey:"AIzaSyBp3K3gJtK2XqIm-eVI1osP-Vma3wj1lTs",

authDomain:

"jumiastaff-83757.firebaseapp.com",

projectId:

"jumiastaff-83757",

storageBucket:

"jumiastaff-83757.firebasestorage.app",

messagingSenderId:

"1018307795636",

appId:

"1:1018307795636:web:6e2dc2cbf41cb88e1ad5e1",

measurementId:

"G-KJM4KLH6ZJ"

};

const app=

initializeApp(

firebaseConfig

);

export const auth=

getAuth(app);

export const db=

getFirestore(app);