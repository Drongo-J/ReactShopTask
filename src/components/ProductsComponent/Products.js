import './Products.css'
import products from '../../data/products'
import Product from '../ProductComponent/Product'

var items = products.map(product => {
    return <Product product={product}></Product>
});

export default function Products() {
  return (
    <div className='products-container'>
      {items}
    </div>
  )
}
