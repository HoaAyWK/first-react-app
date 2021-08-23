import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Badge
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './TopNavigation.module.css';
import FavoritesContext from '../Stores/favorite-context';

function TopNavigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const favoritesContext = useContext(FavoritesContext);

    const toggle = () => setIsOpen(!isOpen);
    return <div>
        <Navbar color="light" light expand="md" >
            <Nav>
                <NavItem className={classes.navbrand}>
                    <Link className={classes.link} to='/' >Home</Link>
                </NavItem>
            </Nav>             
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem className={classes.navitem}>
                        <Link to='/new-meetup' className={classes.link}>New Meetup</Link>
                    </NavItem>
                    <NavItem className={classes.navitem}>
                        <Link to='favorites' className={classes.link}>Favorites</Link>
                        <Badge className={classes.mybadge}>{favoritesContext.totalFavorites}</Badge>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
    </div>;
}

export default TopNavigation;