import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Test",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 5,
    title: "Test 2",
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              title={product.title}
              price={product.price}
              id={product.id}
              key={product.id}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
