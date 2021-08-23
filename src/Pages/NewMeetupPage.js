import { Col, Row } from "reactstrap";

import NewMeetup from "../Components/Meetups/NewMeetup";

function NewMeetupPage() {
  function handleAddMeetup(meetup) {
    fetch(process.env.REACT_APP_API_ENDPOINT_MEETUPS, {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <h2>Add New Meetup</h2>
        <NewMeetup onAddNewMeetup={handleAddMeetup} />
      </Col>
    </Row>
  );
}

export default NewMeetupPage;
