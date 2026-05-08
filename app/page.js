export default function Home() {
  return (
    <main>

      <section className="hero">

        <div className="heroLeft">
          <p className="eyebrow">Women’s Wellness • Pilates • Sydney</p>

          <h1>
            Feel Stronger.
            <br />
            Move Better.
            <br />
            Connect Together.
          </h1>

          <p className="heroText">
            Pilates Her Australia helps women across Sydney discover Pilates studios,
            stay motivated, share experiences and build confidence together.
          </p>

          <div className="heroButtons">
            <a
              href="https://www.google.com/maps/search/pilates+Ryde+Sydney"
              target="_blank"
            >
              Find Pilates Near Ryde
            </a>

            <a
              href="https://www.google.com/search?q=women+pilates+sydney"
              target="_blank"
              className="outline"
            >
              Explore Community
            </a>
          </div>
        </div>

        <div className="heroRight">
          <div className="mainPhoto">
            ADD MAIN PHOTO
          </div>

          <div className="smallPhotos">
            <div>PHOTO</div>
            <div>PHOTO</div>
          </div>
        </div>

      </section>

      <section className="onboarding">

        <p className="sectionTag">Personalised Wellness</p>

        <h2>What are your goals?</h2>

        <div className="goalsGrid">

          <div className="goalCard">
            <h3>Build Confidence</h3>
            <p>Feel stronger mentally and physically.</p>
          </div>

          <div className="goalCard">
            <h3>Improve Flexibility</h3>
            <p>Move better and feel healthier daily.</p>
          </div>

          <div className="goalCard">
            <h3>Reduce Stress</h3>
            <p>Find calm through movement and wellness.</p>
          </div>

          <div className="goalCard">
            <h3>Join Community</h3>
            <p>Connect with women across Australia.</p>
          </div>

        </div>

      </section>

      <section className="localStudios">

        <p className="sectionTag">Sydney Pilates</p>

        <h2>Popular Searches</h2>

        <div className="studioButtons">

          <a
            href="https://www.google.com/maps/search/reformer+pilates+Ryde+Sydney"
            target="_blank"
          >
            Reformer Pilates
          </a>

          <a
            href="https://www.google.com/maps/search/beginner+pilates+Ryde+Sydney"
            target="_blank"
          >
            Beginner Pilates
          </a>

          <a
            href="https://www.google.com/maps/search/womens+pilates+Sydney"
            target="_blank"
          >
            Women’s Pilates
          </a>

          <a
            href="https://www.google.com/maps/search/wellness+studios+Sydney"
            target="_blank"
          >
            Wellness Studios
          </a>

        </div>

      </section>

      <section className="community">

        <p className="sectionTag">Community Stories</p>

        <h2>Women Supporting Women</h2>

        <div className="storiesGrid">

          <div className="storyCard">
            <h3>Sarah • Ryde</h3>
            <p>
              “Pilates helped me rebuild confidence after a difficult year.”
            </p>
          </div>

          <div className="storyCard">
            <h3>Emma • Sydney</h3>
            <p>
              “I finally found a wellness routine that actually feels sustainable.”
            </p>
          </div>

          <div className="storyCard">
            <h3>Olivia • Parramatta</h3>
            <p>
              “The motivation from other women keeps me consistent every week.”
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
