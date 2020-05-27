import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { searchTracks, searchTracksReset } from "../actions/searchActions.js";
const Layout = require("./components/Layout.jsx");

const New = () => {
  return class ResultsList extends Component {
    render() {
      const { results, focus } = this.props;
      return (
        <ul className="add-to-queue__search-results">
          <style jsx>{`
            .add-to-queue__search-results {
              border: 1px solid #999;
              list-style: none;
              margin: 0;
              padding: 0;
            }
            .add-to-queue__search-results-item {
              padding: 5px 0 5px 5px;
            }
            .add-to-queue__search-results-item--focused {
              background-color: #eee;
            }
            .container {
              display: flex;
            }
            .album-img {
              width: 64;
              padding-right: 1em;
            }
            .flex-item {
              flex-grow: 1;
            }
            .song-name {
              font-size: 1.3em;
              margin-bottom: 0.3em;
            }
          `}</style>
          {results.map((r, index) => {
            const isFocused = focus === index;
            const className =
              "add-to-queue__search-results-item" +
              (isFocused ? " add-to-queue__search-results-item--focused" : "");
            return (
              <li
                key={r.id}
                className={className}
                onClick={() => this.props.onSelect(r.id)}
              >
                <div className="container">
                  <div className="album-img">
                    <img src={r.album.images[2].url} />
                  </div>
                  <div className="flex-item">
                    <div className="song-name">{r.name}</div>
                    <div>{r.artists[0].name}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  //   <Layout>
  //     <div style={{ height: "330px" }}>
  //       <h1>Add New Item</h1>
  //       <br />
  //       <a href="/products" className="btn btn-primary">
  //         Home
  //       </a>
  //       <br />
  //       <br />
  //       <form action="/products/product" method="POST">
  //         <input type="text" name="name" placeholder="name" />
  //         <br />
  //         <input type="text" name="description" placeholder="description" />
  //         <br />
  //         <input type="text" name="img" placeholder="image url" />
  //         <br />
  //         <input type="number" name="price" placeholder="price" />
  //         <br />
  //         <input type="text" name="platform" placeholder="platform" />
  //         <br />
  //         <br />
  //         <input
  //           type="submit"
  //           name=""
  //           placeholder="Submit"
  //           className="btn btn-success"
  //         />
  //       </form>
  //     </div>
  //   </Layout>
  // );
};

module.exports = New;
