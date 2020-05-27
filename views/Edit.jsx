const React = require("react");
const Layout = require("./components/Layout.jsx");

const Edit = (props) => {
  const product = props.product[0];
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <br />
        <h1>{product.name}</h1>
        <br />
        <a href="/products" className="btn btn-primary">
          Home
        </a>
        <br />
        <br />
        <form action={`/products/${product._id}?_method=PUT`} method="POST">
          <input type="text" name="name" defaultValue={product.name} />
          <br />
          <input
            type="text"
            name="description"
            defaultValue={product.description}
          />
          <br />
          <input type="text" name="img" defaultValue={product.img} />
          <br />
          <input type="text" name="price" defaultValue={product.price} />
          <br />
          <input type="text" name="platform" defaultValue={product.platform} />
          <br />
          <br />
          <input
            type="submit"
            name=""
            value="Submit"
            className="btn btn-success"
          />
        </form>
      </div>
    </Layout>
  );
};

module.exports = Edit;