'use client'; // Enables Client Components for this file

import React from 'react';
import Link from 'next/link';



const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best way to predict the future is to invent it. - Alan Kay",
  "You miss 100% of the shots you don't take. - Wayne Gretzky"
];

const stories = [
  "🌟 **Sarah's Journey:** Sarah was an ordinary girl with an **extraordinary dream**. Growing up in a small town, she always felt a spark inside her, a calling to achieve something bigger. Despite facing numerous **setbacks** and **difficulties**, from financial struggles to personal challenges, her **determination** never wavered. She spent countless nights working on her goal, and every failure only fueled her drive to succeed. Her story is a powerful testament to the **strength of perseverance**. Today, Sarah stands as a beacon of hope, showing us that with **hard work** and **passion**, even the loftiest dreams can become reality. 🚀",
  "🔥 **John’s Triumph:** John began with nothing but a **small idea** and an **unwavering spirit**. Coming from humble beginnings, he had a vision that many doubted. Undeterred by skepticism, John poured his heart and soul into his project. With relentless effort, **innovation**, and a **positive mindset**, he transformed his idea into a thriving business. His journey was not without obstacles, but his ability to see challenges as opportunities helped him overcome them. John's story inspires us to believe in our ideas, keep pushing forward, and embrace every challenge as a step toward success. 🌟"
];

const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/submit-story">Submit Your Story</Link>
        </nav>
        <h1 className="title">Welcome to Motivational Stories</h1>
      </header>

      <main className="main">
        <section className="quotesSection">
          <h2>Inspirational Quotes</h2>
          <div className="quoteBox">
            {quotes.map((quote, index) => (
              <blockquote key={index} className="quote">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </section>

        <section className="storiesSection">
          <h2>Short Motivational Stories</h2>
          <div className="storyBox">
            {stories.map((story, index) => (
              <div key={index} className="story">
                {story}

                
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Motivational Stories. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

