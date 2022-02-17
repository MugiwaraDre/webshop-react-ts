import React, { useContext, useState } from 'react';

import Item from '../../components/Item';

import { Wrapper } from './AllProductsPage.styles';
import { ProductsContext } from '../../store/products-context';

import { Grid } from '@mui/material';

const AllProductsPage: React.FC<{}> = () => {
  const productsCtx = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Wrapper
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='searchbar' datatest-id='test_product_page'>
        <input
          type='text'
          placeholder='search for an item...'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <Grid container spacing={3} data-testid='grid'>
        {productsCtx.products
          .filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (
              val.title
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            } else {
              return false;
            }
          })
          .map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item
                item={item}
                handleAddToCart={productsCtx.handleAddToCart}
                data-testid={`li ${item.id}`}
              />
            </Grid>
          ))}
      </Grid>
      <p className='product_page'>you are on the Products page</p>
    </Wrapper>
  );
};

export default AllProductsPage;
