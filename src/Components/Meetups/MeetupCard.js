import { Card, CardBody, CardImg, CardTitle, CardText, Button} from 'reactstrap';
import { useContext } from 'react';

import classes from './MeetupCard.module.css';
import FavoritesContext from '../../Stores/favorite-context';

function MeetupCard(props) {
    const favoriteContext = useContext(FavoritesContext);
    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite) {
            favoriteContext.removeFavorite(props.id);
        } else {
            favoriteContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                imgPath: props.imgPath                
            });
        }

    }
    return <div className={classes.cardCpn}> 
        <Card>
            <CardImg className={classes.img} top width='100%' src={props.imgPath}/>
            <CardBody>
                <CardTitle tag='h5'>{props.title}</CardTitle>
                <CardText>{props.description}</CardText>
                <div>
                    <Button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites': 'Add To Favorites'}</Button>
                </div>                
            </CardBody>
        </Card>
    </div>
}

export default MeetupCard;