import { Col } from 'reactstrap';

import NewMeetup from '../Components/Meetups/NewMeetup';

function NewMeetupPage() {
    function handleAddMeetup(meetup) {
        fetch(process.env.REACT_APP_API_ENDPOINT_MEETUPS, {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return <Col md={{size:8, offset:2}}>
        <h2>Add New Meetup</h2>
        <NewMeetup onAddNewMeetup={handleAddMeetup}/>
    </Col>
}

export default NewMeetupPage;