// // admin-panel/lib/firebase.ts
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// // import { getStorage } from "firebase/storage"
// // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yN",
//   authDomain: "islamic-books-7b70a.firebaseapp.com",
//   projectId: "islamic-books-7b70a",
//   storageBucket: "islamic-books-7b70a.appspot.com",
//   messagingSenderId: "1091480978052",
//   appId: "1:1091480978052:web:946524cb5fa8efecc9b8d1",
//   measurementId: "G-Q23ZXF3N0M"
// }

// const app = initializeApp(firebaseConfig)

// export const db = getFirestore(app)
// // export const storage = getStorage(app)





// // lib/firebase.ts

// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// import { getAuth } from "firebase/auth"
// import { initializeAppCheck, ReCaptchaV3Provider, DebugProvider } from "firebase/app-check";

// // Use DebugProvider in development
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

// const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new DebugProvider(),
//   isTokenAutoRefreshEnabled: true,
// });

// // ✅ Tumhara Firebase Project ka Config
// const firebaseConfig = {
//   apiKey: "AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yNpoe8Mc",
//   authDomain: "islamic-books-7b70a.firebaseapp.com",
//   projectId: "islamic-books-7b70a",
//   storageBucket: "islamic-books-7b70a.appspot.com",
//   messagingSenderId: "1091480978052",
//   appId: "1:1091480978052:web:946524cb5fa8efecc9b8d1",
//   measurementId: "G-Q23ZXF3N0M"
// }

// // ✅ Firebase App Initialize
// const app = initializeApp(firebaseConfig)

// // ✅ Services Get
// export const db = getFirestore(app)
// export const storage = getStorage(app)
// export const auth = getAuth(app) // 🔐 Auth Service Export






// lib/firebase.ts

// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// import { getAuth } from "firebase/auth"
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

// // ✅ Firebase Config
// const firebaseConfig = {
//   apiKey: "AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yNpoe8Mc",
//   authDomain: "islamic-books-7b70a.firebaseapp.com",
//   projectId: "islamic-books-7b70a",
//   storageBucket: "islamic-books-7b70a.appspot.com",
//   messagingSenderId: "1091480978052",
//   appId: "1:1091480978052:web:946524cb5fa8efecc9b8d1",
//   measurementId: "G-Q23ZXF3N0M"
// }

// // ✅ Initialize App
// const app = initializeApp(firebaseConfig)

// // ✅ Enable App Check Debug Token in Dev
// if (typeof window !== 'undefined') {
//  ;(self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;


//   initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider('abcd1234...xyz'),
//     isTokenAutoRefreshEnabled: true,
//   })
// }

// // ✅ Export Firebase Services
// export const db = getFirestore(app)
// export const storage = getStorage(app)
// export const auth = getAuth(app)


// import { initializeApp, getApps } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }


// // Check if we have real Firebase config
// const hasRealConfig =
//   process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "demo-project"

// if (!hasRealConfig) {
//   console.warn("🔥 Firebase: Using demo configuration. Please add your Firebase environment variables.")
//   console.info("📝 Create a .env.local file in your project root with:")
//   console.info(`
// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yN
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=islamic-books-7b70a.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=islamic-books-7b70a
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=islamic-books-7b70a.appspot.com
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1091480978052
// NEXT_PUBLIC_FIREBASE_APP_ID=1:1091480978052:web:946524cb5fa8efecc9b8d1
//   `)
// }

// // Initialize Firebase app (only once)
// const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

// // Initialize services
// export const db = getFirestore(app)
// export const storage = getStorage(app)

// // Export config status
// export const isFirebaseConfigured = hasRealConfig

// console.log("🔥 Firebase initialized:", {
//   projectId: firebaseConfig.projectId,
//   configured: hasRealConfig,
// })










// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://shazsabir6:<db_password>@cluster0.h4mfogb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("book library").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};


