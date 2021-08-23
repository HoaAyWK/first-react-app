import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import MeetupCard from "../Components/Meetups/MeetupCard";

function AllMeetupPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT_MEETUPS)
      .then((response) => {
        return response.json();
      })
      .then((meetups) => {
        const meetupsData = [];
        for (let key in meetups) {
          const meetup = {
            id: key,
            ...meetups[key],
          };
          meetupsData.push(meetup);
        }
        setIsLoading(false);
        setData(meetupsData);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <Row>
      {data.map((meetup, index) => {
        return (
          <Col sm="6" md="4" key={index}>
            <MeetupCard 
              key={meetup.id}             
              title={meetup.title}
              description={meetup.description}
              imgPath={meetup.imgPath}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default AllMeetupPage;
