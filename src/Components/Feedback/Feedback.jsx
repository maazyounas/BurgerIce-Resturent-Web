import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <div className='feedbackpage'>
    <div className="feedback-container">
      <div className="feedback-box">
        <h2>We Value Your Feedback!</h2>
        <p>Please share your experience with us.</p>
        <form className="feedback-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <select required>
            <option value="">Rate Your Experience</option>
            <option value="5">Excellent (5⭐)</option>
            <option value="4">Very Good (4⭐)</option>
            <option value="3">Good (3⭐)</option>
            <option value="2">Fair (2⭐)</option>
            <option value="1">Poor (1⭐)</option>
          </select>
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Feedback;
