import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import MeetupCard from "../Components/Meetups/MeetupCard";

function AllMeetupPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT_MEETUPS)
      .then((response) => {
          setIsLoading(true);
          setIsError(false);
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
      })
      .catch(err=>{
          setIsError(true);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>
  return (
    <Row>
      {data.map((meetup, index) => {
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
  );
}

export default AllMeetupPage;
