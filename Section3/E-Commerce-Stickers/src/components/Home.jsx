import React from "react";
import PageHeading from "./PageHeading";
import products from "../data/products";
import ProductsListings from "./ProductsListings";
import EasyButton from "./EasyButton";
import StickerShopButtonBootStrap from "./StickerShopButtonBootStrap";
import developerImage from "../assets/stickers/developer.png";
import breakImage from "../assets/stickers/break.png";

const Home = () => {
  //const isActive = Math.random > 0.5;
  return (
    <>
      {/* <h1 className={`my-heading ${isActive ? "primary-color" : "secondary-color"} ${isActive ? "primary-color": "secondary-color"}`}>Demo Project</h1> */}
      {/* <h1 style={isActive ? {backgroundColor: 'red',textAlign:'center'}: {backgroundColor: 'grey',textAlign:'center'}}>demo project</h1> */}
      {/* <EasyButton>Submit</EasyButton> */}
      {/* <button className='btn btn-primary'>Submit</button> */}
      <div className="container-home">
        <div className="container col-6">
          <StickerShopButtonBootStrap text="Submit" type="primary" />
          <StickerShopButtonBootStrap text="Update" type="secondary" />
          <StickerShopButtonBootStrap text="Delete" type="success" />
          <StickerShopButtonBootStrap text="Cancel" type="danger" />
          <StickerShopButtonBootStrap text="Link" type="link" />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto text-center">
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div
            className="alert alert-warning alert-dismissable fade show"
            role="alert"
          >
            <strong>Warning!..</strong>This is a warning alert!
            <button
              className="btn-close"
              type="close"
              data-bs-dismiss="alert"
              aria-label="close"
            ></button>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center gap-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img src={developerImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={breakImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center text-white my-3 gap-4">
          <div className="col-3 border p-3 bg-warning">column 1</div>
          <div className="col-3 border p-3 bg-success">column 2</div>
          <div className="col-3 border p-3 bg-danger">column 3</div>
        </div>
        <PageHeading title="Explore Sports Stickers!!!...">
          {/* one method */}
          {/* <p className='paragarph-pagaHeading'> */}
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
          {/* </p> */}
        </PageHeading>
        <ProductsListings products={products}></ProductsListings>
      </div>
    </>
  );
};

export default Home;
