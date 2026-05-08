export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Pilates • Wellness • Connection</p>
        <h1>Pilates Her Australia</h1>
        <p className="heroText">
          A supportive Australian community app for women to share Pilates journeys,
          find motivation, connect with others and feel stronger together.
        </p>

        <div className="heroButtons">
          <a href="#join">Join the Community</a>
          <a href="#stories" className="outline">Read Stories</a>
        </div>
      </section>

      <section className="intro">
        <h2>A safe space for women to move, heal and grow</h2>
        <p>
          Pilates Her Australia is designed for women who want more than workouts.
          It is about confidence, consistency, encouragement and connection.
        </p>
      </section>

      <section className="features">
        <div>
          <h3>Share Your Journey</h3>
          <p>Post your wins, challenges, progress and Pilates experiences.</p>
        </div>

        <div>
          <h3>Find Motivation</h3>
          <p>Read uplifting stories and daily encouragement from women like you.</p>
        </div>

        <div>
          <h3>Connect Australia-Wide</h3>
          <p>Meet women across Sydney, Melbourne, Brisbane, Perth and beyond.</p>
        </div>
      </section>

      <section id="stories" className="stories">
        <h2>Community Stories</h2>

        <div className="storyGrid">
          <article>
            <h3>Sarah from Sydney</h3>
            <p>“Pilates helped me rebuild strength, confidence and routine.”</p>
          </article>

          <article>
            <h3>Emma from Melbourne</h3>
            <p>“I finally found motivation through a community that understands.”</p>
          </article>

          <article>
            <h3>Olivia from Brisbane</h3>
            <p>“This feels like a positive space made for real women.”</p>
          </article>
        </div>
      </section>

      <section id="join" className="join">
        <h2>Ready to begin?</h2>
        <p>
          Join the movement and help build Australia’s most supportive Pilates
          community for women.
        </p>
        <button>Coming Soon</button>
      </section>
    </main>
  );
}
