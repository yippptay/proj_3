const React = require("react");
const Layout = require("./components/Layout.jsx");

const Show = (props) => {
  const product = props.product[0];
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <br />
        <h1>{product.name}</h1>
        <div className="container-fluid row">
          <img className="col" src={product.img} alt={props.product.name} />
          <div className="col">
            <br />
            <br />
            <br />
            <h1>${product.price}</h1>
            <a
              href={`/products/${product._id}/buy/${product.platform}`}
              className="btn btn-primary"
              style={{ fontSize: "1.5em", width: "4em" }}
            >
              Buy
            </a>
            <div style={{ color: "#777" }}>{product.platform}</div>
            <div style={{ margin: "1em 0" }}>{product.description}</div>
            <div className="container row">
              <a href="/products/client" className="btn btn-success">
                Shopping Cart
              </a>
              <a href="/products" className="btn btn-secondary">
                Home
              </a>
              <form action={`/products/${product._id}/edit`} method="GET">
                <input type="submit" value="Edit" className="btn btn-warning" />
              </form>
              <form
                action={`/products/${product._id}?_method=DELETE`}
                method="POST"
              >
                <input
                  type="submit"
                  value="Delete"
                  className="btn btn-danger"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

module.exports = Show;
