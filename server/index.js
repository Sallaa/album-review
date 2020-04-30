// Requires: input conforms to specifications in README
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://album-review-info1998.firebaseio.com'
});

const port = 8080;
const app = express();
app.use(bodyParser.json());
const db = admin.firestore();

const reviewsCollection = db.collection('reviews');

app.post('/createReview', function (req, res) {
  const post = req.body;
  reviewsCollection.add(post).then(function (docRef) {
    res.send(`Post created with ID ${docRef.id}`);
  });
});

app.get('/getReviews', async function (req, res) {
  const sortedPosts = await reviewsCollection.orderBy('rating').get();
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

app.listen(port, () => console.log(`Listening on port ${port}...`));
