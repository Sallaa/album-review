/** @jsx jsx */
import {useState, useEffect} from 'react';
import {jsx} from '@emotion/core';
import Card from './Card';

export default () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    fetch("https://whispering-brook-67084.herokuapp.com/getReviews")
      .then((res) => res.json())
      .then((json) => setReviews(json));
  };

  useEffect(() => fetchReviews(), []);

  return (
    <div>
      {reviews.map((review) => (
        <Card key={review.id} {...review} />
      ))}
    </div>
  );
};
