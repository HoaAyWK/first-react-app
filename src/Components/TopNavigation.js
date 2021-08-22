import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import classes from './TopNavigation.module.css';

function TopNavigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return <div>
        <Navbar color="light" light expand="md" >
            <NavbarBrand className={classes.navbrand}>
                <Link to='/' className={classes.link} >Home</Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem className={classes.navitem}>
                        <Link to='/new-meetup' className={classes.link}>New Meetup</Link>
                    </NavItem>
                    <NavItem className={classes.navitem}>
                        <Link to='favorites' className={classes.link}>Favorites</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>;
}

export default TopNavigation;