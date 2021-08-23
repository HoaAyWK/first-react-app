import { Row, Col } from 'reactstrap';
import { useContext } from "react";

import MeetupCard from "../Components/Meetups/MeetupCard";
import FavoritesContext from "../Stores/favorite-context";

function FavoritesMeetupPage() {
  let content;
  const favoritesCotext = useContext(FavoritesContext);
  if (favoritesCotext.totalFavorites === 0) {
    content=<p>Nothing here</p>
  } else {
    content=<Row>
        <h2>Your favorites</h2>      
        {favoritesCotext.favorites.map((meetup, index) => {
        return (
          <Col sm="6" md="4" key={index}>
            <MeetupCard 
              key={meetup.id}
              id={meetup.id}             
              title={meetup.title}
              description={meetup.description}
              imgPath={meetup.imgPath}
            />
          </Col>
        );
      })}
    </Row>
  }

  return (
    <div>{content}</div>
  );
}

export default FavoritesMeetupPage;
