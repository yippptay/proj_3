const React = require("react");
const Layout = require("./components/Layout.jsx");

const Cart = (props) => {
  let total = 0;
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <a href="/products" className="btn btn-success">
          Home
        </a>
        <h2>Shopping Cart:</h2>
        <div>
          {props.shopping_cart.map((value, index) => {
            total += value.price;
            return (
              <div key={index}>
                <img src={value.img} alt={value.name} />
                <div>{value.name}</div>
                <div>${value.price}</div>
              </div>
            );
          })}
        </div>
        <h3>Total: ${total}</h3>
        <a href="/products/client/clear" className="btn btn-warning">
          Clear Cart
        </a>
      </div>
    </Layout>
  );
};

module.exports = Cart;