import { Card, CardBody, CardImg, CardTitle, CardText, Button} from 'reactstrap';

import classes from './MeetupCard.module.css';

function MeetupCard(props) {
    return <div className={classes.cardCpn}> 
        <Card>
            <CardImg className={classes.img} top width='100%' src={props.imgPath}/>
            <CardBody>
                <CardTitle tag='h5'>{props.title}</CardTitle>
                <CardText>{props.description}</CardText>
                <div>
                    <Button>Add To Favorites</Button>
                </div>                
            </CardBody>
        </Card>
    </div>
}

export default MeetupCard;