import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@mui/material";
import logo from '../../assets/logo.png';
import { ShoppingCart } from "@mui/icons-material";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={s.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={s.title} color="inherit" >
                        <img src={logo} alt="Commerce.js" className={s.image} height="25px" />
                        Crystal Couture
                    </Typography>
                    <div className={s.grow} />
                    <div className={s.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={5} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar