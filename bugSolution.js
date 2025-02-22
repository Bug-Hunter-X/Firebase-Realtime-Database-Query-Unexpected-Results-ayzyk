```javascript
// Correct usage of Firebase Realtime Database query
db.ref('users').orderByChild('name').equalTo('John').once('value', function(snapshot) {
  if (snapshot.exists()) {
    snapshot.forEach(function(childSnapshot) {
      var user = childSnapshot.val();
      console.log(user); // This will print individual user data correctly
    });
  } else {
    console.log('User not found');
  }
});
```