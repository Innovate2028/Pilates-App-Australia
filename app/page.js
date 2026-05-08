export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroLeft">
          <p className="eyebrow">Pilates On Demand • Sydney</p>

          <h1>
            Book Pilates
            <br />
            Near You.
          </h1>

          <p className="heroText">
            Pilates Her connects women with trusted Pilates instructors,
            reformer studios and wellness classes nearby — starting in Ryde, Sydney.
          </p>

          <div className="heroButtons">
            <a href="#find">Find Pilates Now</a>
            <a href="#instructors" className="outline">Become an Instructor</a>
          </div>
        </div>

        <div className="heroRight">
          <div className="appCard">
            <h3>Find a Pilates Session</h3>
            <input placeholder="Enter suburb e.g. Ryde" />
            <select>
              <option>Reformer Pilates</option>
              <option>Mat Pilates</option>
              <option>Beginner Pilates</option>
              <option>Women-only Class</option>
              <option>Private Instructor</option>
            </select>
            <button>Search Nearby</button>
          </div>
        </div>
      </section>

      <section id="find" className="onboarding">
        <p className="sectionTag">How It Works</p>
        <h2>Pilates booking made simple</h2>

        <div className="goalsGrid">
          <div className="goalCard">
            <h3>1. Search Nearby</h3>
            <p>Find Pilates classes and instructors close to your suburb.</p>
          </div>

          <div className="goalCard">
            <h3>2. Compare Options</h3>
            <p>View class type, distance, reviews and availability.</p>
          </div>

          <div className="goalCard">
            <h3>3. Book Instantly</h3>
            <p>Reserve your spot or request a private instructor.</p>
          </div>

          <div className="goalCard">
            <h3>4. Stay Motivated</h3>
            <p>Track your journey and connect with other women.</p>
          </div>
        </div>
      </section>

      <section className="localStudios">
        <p className="sectionTag">Popular Searches</p>
        <h2>Find Pilates Around Sydney</h2>

        <div className="studioButtons">
          <a href="https://www.google.com/maps/search/reformer+pilates+Ryde+Sydney" target="_blank">
            Reformer Pilates Ryde
          </a>

          <a href="https://www.google.com/maps/search/pilates+Meadowbank+Sydney" target="_blank">
            Pilates Meadowbank
          </a>

          <a href="https://www.google.com/maps/search/pilates+Parramatta+Sydney" target="_blank">
            Pilates Parramatta
          </a>

          <a href="https://www.google.com/maps/search/womens+pilates+Sydney" target="_blank">
            Women’s Pilates Sydney
          </a>
        </div>
      </section>

      <section id="instructors" className="community">
        <p className="sectionTag">For Studios & Instructors</p>
        <h2>List your Pilates services</h2>

        <div className="storiesGrid">
          <div className="storyCard">
            <h3>Studios</h3>
            <p>Promote your classes and attract local women looking for Pilates.</p>
          </div>

          <div className="storyCard">
            <h3>Instructors</h3>
            <p>Offer private sessions, group sessions or mobile Pilates bookings.</p>
          </div>

          <div className="storyCard">
            <h3>Community</h3>
            <p>Build trust through reviews, stories and wellness connection.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
