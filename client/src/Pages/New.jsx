import React from 'react';

export default () => {
  return (
    <div>
      <h1>New Review</h1>
      <form action="">
        <div class="group_label_input">
          <label>Album:</label>
          <input name="album" type="text" />
        </div>
        {/* Reviewer info autofill based on login */}
        <div class="group_label_input">
          <label>Artist:</label>
          <input name="artist" type="text" />
        </div>

        <div class="group_label_input">
          <label>Review:</label>
          <textarea name="review_body" cols="40" rows="5"></textarea>
        </div>

        <div class="group_label_input">
          <span></span>
          <button name="submit_upload" type="submit">
            Add review
          </button>
        </div>
      </form>
    </div>
  );
};
