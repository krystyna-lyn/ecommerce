import React from "react";
import { Grid } from "@mui/material";
import Product from '../Product/Product';
import s from './Products.module.css';


const Products = ({ products, onAddToCart }) => {
    return (
        <main className={s.content}>
            <div className={s.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};



export default Products