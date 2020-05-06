/** @jsx jsx */
import {useState, useEffect} from 'react';
import {jsx} from '@emotion/core';
import Card from './Card';

export default () => {
  const [reviews, setReviews] = useState([]);

  // TODO: time stamp, sort by time added

  const fetchReviews = () => {
    fetch('/getReviews')
      .then((res) => res.json())
      .then((json) => setReviews(json));
  };
  useEffect(() => fetchReviews(), []);

  const updateRating = (id, rating) => {
    fetch(`/updateRating?id=${id}&rating=${rating}`, {
      method: 'POST'
    }).then((res) =>
      setReviews(reviews.map((review) => (review.id === id ? review : review)))
    ); // TODO replace
  };

  return (
    <div>
      {reviews.map((review) => (
        <Card key={review.id} {...review} updateRating={updateRating} />
      ))}
    </div>
  );
};
