'use client'; // Enables Client Components for this file

import React, { useState } from 'react';

const SubmitStory = () => {
  const [story, setStory] = useState<string>('');

  const handleStoryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStory(event.target.value);
  };

  const handleSubmit = () => {
    if (story.trim()) {
      // Here, you can add your submission logic (e.g., sending the story to a server)
      console.log('Story submitted:', story); // For now, just log it
      setStory(''); // Clear the textarea after submission
    } else {
      alert('Please write a story before submitting!'); // Alert if the textarea is empty
    }
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/submit-story">Submit Your Story</a>
        </nav>
        <h1 className="title">Submit Your Story</h1>
      </header>

      <main className="main">
        <section className="submitStorySection">
          <h2>Share Your Motivational Story</h2>
          <div className="storyForm">
            <textarea
              value={story}
              onChange={handleStoryChange}
              placeholder="Write your story here..."
              rows={12}
            />
            <button className="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Motivational Stories. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SubmitStory;
