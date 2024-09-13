// Imported assets
import painting from "../../../../assets/painting.jpg";
import paintingGif from "../../../../assets/painting-gif.gif";

const Interests = () => {
  return (
    <ul className="interests list-unstyled mb-0">
      <li className="mb-4 pb-4 position-relative">
        <h3>Paintings</h3>
        <figure>
          <div className="image-wrapper position-relative">
            <img
              src={painting}
              alt="Old Cottages at Pinner by Helen Allingham"
              className="img-fluid"
            />
            <img
              src={paintingGif}
              alt=""
              className="gif position-absolute top-0 img-fluid d-block"
            />
          </div>
          <figcaption className="painting-info text-end fst-italic">
            Old Cottages at Pinner by Helen Allingham
          </figcaption>
        </figure>
        <p className="mb-0">
          "A picture is worth a thousand words". I'm always amazed at how one
          painting can say exactly what you're thinking and express the feelings
          you can't put into words. I find peace in looking at beautiul
          paintings and get excited every time I find a breathtaking painting
          that I haven't seen before.
        </p>
      </li>
      <li className="mb-4 pb-4 position-relative">
        <h3>Novels</h3>
        <p className="mb-0">
          I love novels that can make me so interested that I can't put them
          down until knowing how they end. My all-time favorite author is Agatha
          Christie.
        </p>
      </li>
      <li>
        <h3>Movies</h3>
        <p className="mb-0">
          Movies are my favorite source of escapisim. A good movie can always
          fix any bad day. My favorite movies are: 12 angry men, The truman
          show, Soul and The dark knight.
        </p>
      </li>
    </ul>
  );
};

export default Interests;
