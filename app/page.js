const studios = [
  {
    name: "The Blissed Out Movement",
    area: "Ryde / Gladesville",
    type: "Reformer, Mat, Yoga & Barre",
    website: "https://www.theblissedoutmovement.com.au/"
  },
  {
    name: "Hi Pilates Ermington",
    area: "Ermington / West Ryde",
    type: "Reformer Pilates",
    website: "https://hipilates.com.au/pages/location-ermington"
  },
  {
    name: "Play Pilates Studio",
    area: "Macquarie Park / Ryde",
    type: "Reformer & Mat Pilates",
    website: "https://playpilatesstudio.com.au/"
  },
  {
    name: "Discover Pilates",
    area: "North Ryde",
    type: "Equipment-based Pilates",
    website: "https://rydenaturalhealthclinic.com.au/pilates-north-ryde/"
  }
];

export default function Home() {
  return (
    <main>
      <section className="premiumHero">
        <div>
          <p className="eyebrow">Pilates Marketplace • Sydney</p>
          <h1>Find & book Pilates near you.</h1>
          <p className="heroText">
            A premium discovery app connecting women with trusted Pilates studios,
            instructors and wellness spaces around Ryde and Sydney.
          </p>

          <div className="heroButtons">
            <a href="#studios">Explore Studios</a>
            <a className="outline" href="#partners">List Your Studio</a>
          </div>
        </div>

        <div className="searchPanel">
          <h3>Start your search</h3>
          <input placeholder="Suburb e.g. Ryde" />
          <select>
            <option>Reformer Pilates</option>
            <option>Beginner Pilates</option>
            <option>Women-only Pilates</option>
            <option>Private Instructor</option>
          </select>
          <button>Search Pilates</button>
        </div>
      </section>

      <section id="studios" className="studioSection">
        <p className="eyebrow">Featured Studios</p>
        <h2>Book trusted local Pilates</h2>

        <div className="studioGrid">
          {studios.map((studio) => (
            <article className="studioCard" key={studio.name}>
              <div className="studioImage">Studio Photo</div>
              <div className="studioInfo">
                <p className="badge">{studio.area}</p>
                <h3>{studio.name}</h3>
                <p>{studio.type}</p>

                <div className="cardButtons">
                  <a href={studio.website} target="_blank">
                    Visit Website
                  </a>
                  <a
                    className="outlineSmall"
                    href={`https://www.google.com/maps/search/${studio.name}`}
                    target="_blank"
                  >
                    View Map
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="partnerSection">
        <p className="eyebrow">For Studios & Instructors</p>
        <h2>Grow your Pilates bookings</h2>
        <p>
          List your studio, receive local leads and connect with women actively
          looking for Pilates in their area.
        </p>
        <a href="mailto:hello@pilatesher.com.au">Apply to be listed</a>
      </section>
    </main>
  );
}
