import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import s from './Product.module.css';


const Product = ({ product, onAddToCart }) => {

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <Card className={s.root}>
      <CardMedia className={s.media} image={product.image?.url} title={product.name} />
      <CardContent>
        <div className={s.cardContent} >
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            {product.price.formatted_with_code}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />

      </CardContent>
      <CardActions className={s.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product