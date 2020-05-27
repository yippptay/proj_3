const React = require("react");
const Layout = require("./components/Layout.jsx");

const New = () => {
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <h1>Add New Item</h1>
        <br />
        <a href="/products" className="btn btn-primary">
          Home
        </a>
        <br />
        <br />
        <form action="/products/product" method="POST">
        <input type="text" name="spotifyURI" placeholder="spotifyURI" />
          <br />
          <input type="text" name="name" placeholder="name" />
          <br />
          <input type="text" name="description" placeholder="description" />
          <br />
          <input type="text" name="img" placeholder="image url" />
          <br />
          <input type="number" name="price" placeholder="price" />
          <br />
          <input type="text" name="platform" placeholder="platform" />
          <br />
          <br />
          <input
            type="submit"
            name=""
            placeholder="Submit"
            className="btn btn-success"
          />
        </form>
      </div>
    </Layout>
  );
};

module.exports = New;
