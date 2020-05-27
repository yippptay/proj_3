const React = require("react");
const Layout = require("./components/Layout.jsx");

const Index = (props) => {
  return (
    <Layout>
      <div style={{ minHeight: "330px" }}>
        <br />
        <img src="https://www.vectorsland.com/imgd/l26398-gamestop-logo-48701.png"></img>
        <br />
        <a href="/products/client" className="btn btn-success">
          Shopping Cart
        </a>
        <br />
        <br />
        <div className="container-fluid row" style={{ width: "100%" }}>
          {props.products.map((value, index) => {
            return (
              <div key={value._id} className="card" style={{ width: "25%" }}>
                <div className="card-img-top">
                  <a href={`/products/${value._id}`}>
                    <img
                      src={value.img}
                      alt={value.name}
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
                <div className="card-body" style={{ padding: "1em" }}>
                  <div
                    className="container row justify-content-between align-items-center"
                    style={{
                      margin: "1em 0 0 0",
                      padding: "0",
                      fontSize: "1.25em",
                      fontWeight: "bold",
                    }}
                  >
                    <div className="card-text">{value.name}</div>
                    <div>${value.price}</div>
                  </div>
                  <div style={{ color: "#777", textAlign: "center" }}>
                    {value.platform}
                  </div>
                  <div
                    className="card-text"
                    style={{ marginTop: "1em", fontSize: ".8em" }}
                  >
                    {value.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <a href="/products/new" className="btn btn-secondary">
          Add New Item
        </a>
        <a href="/products/seed" className="btn btn-warning">
          Seed Store
        </a>
        <a href="/products/clear" className="btn btn-danger">
          Clear Store
        </a>
        <br />
        <br />
      </div>
    </Layout>
  );
};

module.exports = Index;
