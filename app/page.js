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

const products = [
  {
    name: "Pilates Starter Kit",
    price: "$49",
    text: "Grip socks, resistance band and beginner wellness guide."
  },
  {
    name: "Empowerment Journal",
    price: "$24",
    text: "Track your movement, mindset, goals and progress."
  },
  {
    name: "Premium Grip Socks",
    price: "$18",
    text: "Studio-ready socks for reformer and mat Pilates."
  },
  {
    name: "Her Movement Membership",
    price: "$9/month",
    text: "Motivation, challenges, studio offers and community perks."
  }
];

export default function Home() {
  return (
    <main>
      <section className="premiumHero">
        <div>
          <p className="eyebrow">Exclusive Pilates Marketplace • Australia</p>
          <h1>Move with confidence. Book with ease.</h1>
          <p className="heroText">
            Pilates Her is a premium movement for women — connecting you with
            trusted Pilates studios, empowering wellness tools and motivation to
            feel stronger every week.
          </p>

          <div className="heroButtons">
            <a href="#studios">Explore Studios</a>
            <a className="outline" href="#shop">Shop Essentials</a>
          </div>
        </div>

        <div className="searchPanel">
          <p className="miniTag">Find your next session</p>
          <h3>Book Pilates near you</h3>
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

      <section className="movement">
        <p className="eyebrow">The Movement</p>
        <h2>More than Pilates. A women’s empowerment community.</h2>

        <div className="movementGrid">
          <div>
            <h3>Feel Strong</h3>
            <p>Build confidence through movement, consistency and self-belief.</p>
          </div>

          <div>
            <h3>Stay Inspired</h3>
            <p>Weekly motivation, challenges and uplifting community stories.</p>
          </div>

          <div>
            <h3>Connect Locally</h3>
            <p>Find studios, instructors and women on the same journey.</p>
          </div>
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
                  <a href={studio.website} target="_blank">Visit Website</a>
                  <a className="outlineSmall" href={`https://www.google.com/maps/search/${studio.name}`} target="_blank">
                    View Map
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="shopSection">
        <p className="eyebrow">Pilates Her Shop</p>
        <h2>Essentials to support your journey</h2>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productImage">Product Image</div>
              <p className="price">{product.price}</p>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              <button>Add to Wishlist</button>
            </article>
          ))}
        </div>
      </section>

      <section className="quoteSection">
        <h2>“Your strongest self is built one session at a time.”</h2>
        <p>
          Join a movement created for women who want strength, support,
          confidence and connection.
        </p>
        <a href="#studios">Start Moving</a>
      </section>

      <section id="partners" className="partnerSection">
        <p className="eyebrow">For Studios & Instructors</p>
        <h2>Grow your Pilates bookings</h2>
        <p>
          List your studio, promote your classes and connect with women actively
          looking for Pilates in their area.
        </p>
        <a href="mailto:hello@pilatesher.com.au">Apply to be listed</a>
      </section>
    </main>
  );
}
