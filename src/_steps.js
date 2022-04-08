/**
 * steps to use firebase
 * 1. Create a project on console.firebase.google.com
 * 2. npm install firebase
 * 3. Register web App in firebase
 * 4. copy firebase init with config from firebase project settings into a file firebase.init.js
 * 5. export default app from firebase.init.js
 * 6. import app firebase init.js into your app.js
 * 7. import getAuth from firebase/auth and Create auth = getAuth(app)
 * 8. turn on google authentication (firebase >authentication > enable google sign)
 * 9. Create google provider
 * 10. use signInWithPopup and pass auth and provider
 * 11. handle .then (if successful) and catch error (if error)
 */