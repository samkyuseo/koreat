import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBaiDInMhLqVmA0QSgxhgi_2WvFIYVDKIQ',
  authDomain: 'koreats-cb1c1.firebaseapp.com',
  projectId: 'koreats-cb1c1',
  storageBucket: 'koreats-cb1c1.appspot.com',
  messagingSenderId: '755265620042',
  appId: '1:755265620042:web:c29e9b28b2f69c160abeb3',
  measurementId: 'G-BBHNXFBD0B',
};

// Initialize Firebase
export function initFirebase() {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase connected...');
}
