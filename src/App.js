import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={process.env.PUBLIC_URL + '/my profile picture.png'} alt="Profile" className="profile-picture" />

        <h1>Chamila Dilani</h1>
        <p>Frontend Developer</p>
      </header>
      <section className="contact">
        <p>Phone: +818039091648</p>
        <p>Email: miyurayan2013@gmail.com</p>
        <p>Location: Chiba, Japan</p>
      </section>
      <section className="links">
        <a href="https://www.linkedin.com/in/dilani-jayasiri-b59402224/">LinkedIn</a>
        <a href="https://github.com/Chamiladilani">GitHub</a>
      </section>
      <section className="skills">
        <h2>Skills:</h2>
        <ul>
          <li>Front-end development</li>
          <li>React.js</li>
          <li>Responsive development</li>
        </ul>
      </section>
      <section className="tools">
        <h2>Tools:</h2>
        <ul>
          <li>Git</li>
          <li>VSCode</li>
          <li>NPM</li>
        </ul>
      </section>
      <section className="languages">
        <h2>Programming Languages:</h2>
        <ul>
          <li>HTML + CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>
      <section className="spoken-languages">
        <h2>Spoken Languages:</h2>
        <ul>
          <li>English (Fluent)</li>
          <li>Japanese (Fluent)</li>
          <li>Sinhala</li>
        </ul>
      </section>
      <section className="experience">
        <h2>Experience:</h2>
        <p>3 years at Sayuri International</p>
      </section>
      <section className="hobbies">
        <h2>Hobbies:</h2>
        <p>Travel</p>
      </section>
      <section className="application">
  <h2>Application:</h2>
  <div className="application-email">
    <div className="letter-header">
      <p>From: [Your Name]</p>
      <p>Date: [Current Date]</p>
      <p>To: [Recipient's Name]</p>
    </div>
    <div className="letter-body">
      <p>Subject: React Developer Position at [Company Name]</p>
      <p>Hello [Recipient's Name],</p>
      <p>I hope this email finds you well. I understand you're likely immersed in your daily tasks, but I wanted to express my keen interest in the React Developer position at [Company Name]. I've long admired the work that [Company Name] does, particularly the innovative approaches taken in areas like [mention specific aspects that impress you].</p>
      <p>With a strong foundation in React.js and a passion for creating impactful web applications, I've completed a range of projects that showcase my skills. You can explore some of my work in my portfolio here: [Your Portfolio URL]</p>
      <p>I believe [Company Name] has a vision that aligns well with my own professional aspirations. I am currently working as a Junior Front-End Developer at [Current Company], where I've honed my skills and developed a solid understanding of modern web development practices.</p>
      <p>If you have availability, I'd greatly appreciate a brief call sometime this week. This would provide an opportunity for us to discuss how my experience and enthusiasm could contribute to your team's success.</p>
      <p>For further insight into my background and expertise, please find attached my resume.</p>
      <p>Thank you for considering my application. I'm eager to learn more about [Company Name]'s goals and how I might contribute to achieving them.</p>
      <p>Looking forward to your response.</p>
      <blockquote>Best regards,</blockquote>
      <p>[Your Name]</p>
      <p>[Your Contact Information]</p>
    </div>
  </div>
</section>

  
  



  

 
    </div>
  );
}

export default App;
