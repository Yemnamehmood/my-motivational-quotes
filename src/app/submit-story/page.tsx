'use client'; // Enables Client Components for this file

import React, { useState } from 'react';

const SubmitStory = () => {
  const [story, setStory] = useState<string>(''); // Keep this line

  const handleStoryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStory(event.target.value);
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
            
            <button className="submitButton">Submit</button>
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
