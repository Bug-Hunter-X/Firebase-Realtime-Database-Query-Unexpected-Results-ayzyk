```javascript
// Incorrect usage of Firebase Realtime Database query
db.ref('users').orderByChild('name').equalTo('John').once('value', function(snapshot) {
  if (snapshot.exists()) {
    console.log(snapshot.val()); // This will print the entire user object
  } else {
    console.log('User not found');
  }
});
```