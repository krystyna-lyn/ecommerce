import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import s from './Product.module.css';




const Product = ({ product }) => {

  return (
    <Card className={s.root}>
      <CardMedia className={s.media} image='' title={product.name} />
      <CardContent>
        <div className={s.cardContent} >
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">

          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions className={s.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product