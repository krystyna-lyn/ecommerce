import React from "react";
import { Grid } from "@mui/material";
import Product from '../Product/Product';
import s from './Products.module.css';

const products = [
    { 'id': 1, name: 'iphone 14', description: 'Apple iphone 14' },
    { 'id': 2, name: 'macbook 13', description: 'Apple macbook 13' }
]

const Products = () => {

    return (
        <main className={s.content}>
            <div className={s.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />

                    </Grid>
                ))}

            </Grid>
        </main>
    )

}
console.log(Products)
export default Products;