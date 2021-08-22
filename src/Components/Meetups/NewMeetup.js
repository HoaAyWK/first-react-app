import { useRef } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

function NewMeetup(props) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const pathRef = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const path = pathRef.current.value;

        const meetup = {
            title,
            description,
            imgPath: path
        };
        props.onAddNewMeetup(meetup);
        console.log(meetup);
    }
    return <div>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for='title'>Title</Label>
                <Input id='title' innerRef={titleRef} name='title' type='text' required></Input>
            </FormGroup>
            <FormGroup>
                <Label for='description'>Description</Label>
                <Input id='description' innerRef={descriptionRef} name='description' type='textarea' required></Input>
            </FormGroup>
            <FormGroup>
                <Label for='imgPath'>Image Path</Label>
                <Input id='imgPath' innerRef={pathRef} name='imgPath' type='text' required></Input>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </div>;
}

export default NewMeetup;