import envKeys from '@/utils/envKeys';
import { FirebaseApp, initializeApp } from 'firebase/app';

let _firebaseAppInstance: FirebaseApp | null = null;

export const getFirebaseAppInstance = (): FirebaseApp => {
  if (_firebaseAppInstance === null) {
    _firebaseAppInstance = initializeApp({
      ...envKeys.firebase,
    });
  }

  return _firebaseAppInstance;
};
