import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';




const Product = ({ product }) => {

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia sx={{ height: '0', paddingTop: '56,25%' }} image='' title={product.name} />
      <CardContent>
        <div sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">

          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product