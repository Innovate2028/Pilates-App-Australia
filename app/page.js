export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="photoBox">
          <p>Add your Pilates photo here</p>
        </div>

        <div className="heroContent">
          <p className="eyebrow">Ryde • Sydney • Women’s Pilates</p>
          <h1>Pilates Her Australia</h1>
          <p>
            A supportive space for women in Australia to share Pilates journeys,
            stay motivated and discover local Pilates classes near Ryde, Sydney.
          </p>

          <div className="heroButtons">
            <a href="https://www.google.com/search?q=pilates+classes+Ryde+Sydney" target="_blank">
              Find Pilates in Ryde
            </a>

            <a href="https://www.google.com/maps/search/pilates+near+Ryde+Sydney" target="_blank" className="outline">
              Open Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="photoSection">
        <h2>Share Your Pilates Experience</h2>
        <p>
          Add real photos from your classes, studios, community events or wellness journey.
        </p>

        <div className="photoGrid">
          <div>Add Photo 1</div>
          <div>Add Photo 2</div>
          <div>Add Photo 3</div>
        </div>
      </section>

      <section className="local">
        <h2>Find Local Pilates Near Ryde</h2>
        <p>
          Search nearby Pilates studios, reformer classes, women’s wellness spaces and beginner-friendly sessions.
        </p>

        <div className="localButtons">
          <a href="https://www.google.com/maps/search/reformer+pilates+Ryde+Sydney" target="_blank">
            Reformer Pilates
          </a>

          <a href="https://www.google.com/maps/search/beginner+pilates+Ryde+Sydney" target="_blank">
            Beginner Classes
          </a>

          <a href="https://www.google.com/maps/search/womens+pilates+Ryde+Sydney" target="_blank">
            Women’s Pilates
          </a>
        </div>
      </section>
    </main>
  );
}
