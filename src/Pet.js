import React from "react";
import { Link } from "@reach/router";
// Your code is going to go here
class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    console.log(`media: ${media}, media.photos: ${media.photos}`);

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos[0] ? photos[0].value : null} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
