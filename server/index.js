// Requires: input conforms to specifications in README
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://album-review-info1998.firebaseio.com'
});

const app = express();
app.use(express.json());
app.use(cors());
const db = admin.firestore();

const reviewsCollection = db.collection('reviews');

app.post('/createReview', function (req, res) {
  const post = req.body;
  reviewsCollection.add(post).then(function (docRef) {
    res.send(`Post created with ID ${docRef.id}`);
  });
});

app.get('/getReviews', async function (req, res) {
  const sortedPosts = await reviewsCollection.orderBy('add_time', 'desc').get();
  const posts = [];
  for (const doc of sortedPosts.docs) {
    const post = doc.data();
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

app.post('/updateRating', function (req, res) {
  reviewsCollection.doc(req.body.id).update({rating: req.body.rating});
  res.send(`Updated rating of album with ID ${req.body.id}`);
});

app.delete('/deleteReview', function (req, res) {
  reviewsCollection.doc(req.query.id).delete();
  res.send(`Deleted review with ID ${req.query.id}`);
});


app.set('port', (process.env.PORT || 8080));

// Start node server
app.listen(app.get('port'), function () {
  console.log('Node server is running on port ' + app.get('port'));
});