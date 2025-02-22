import React from "react";

import socketAdapterHolder from "/Front-RenderView.jpg";
import socketAdapterHolder2 from "/Front-RenderView2.jpg";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div>
      <>
        {/* Title Container*/}
        <Navbar />

        {/* Main Container*/}
        <div className="main-container">
          <div className="main-container-divider">
            <div className="content-container">
              <div className="content-image-container">
                <img className="content-image" src={socketAdapterHolder} />
                <img className="content-image2" src={socketAdapterHolder2} />
              </div>
              <div className="mt-2">
                <Link to="/ModelView">
                  <button>3D Model View</button>
                </Link>
              </div>
            </div>
            <div className="description-container">
              <div className="description-title">
                Socket Adapter Holder (DIGITAL FILE ONLY)
              </div>
              <div className="description-text">
                <p className="flex text-left">
                  Holder for Socket adapter hexs bits and socket adapter, with a
                  magnetic base to hold position inside toolbox 
                </p>
                <p className="flex text-left">
                  This purchase only includes digital files for you to 3D print,
                  this is a non-refundable purchase
                </p>
              </div>
              <p className="my-2 italic"> - 1x SocketAdapterMagnetBase.stl</p>
              <p className="my-2 italic"> - 1x SocketAdapterGridfinity.stl</p>
              <p className="underline mt-2 mb-6">Refund Policy </p>
              <div className="checkout-button-container">
                <a href="https://square.link/u/FSY0JvoQ">
                  <button className="checkout-button">Checkout</button>
                </a>
              </div>
              {/* <div className="stripe-button-container"><button className="bg-purple-600 text-neutral-100 font-bold "><h2 >Stripe </h2></button></div> */}
            </div>
          </div>
        </div>
        {/* FooterContainer  */}
        <div className="card">

          <p>
          <Link to="/">
            Developed by <code>Grahm</code> 🛠️
          </Link>
          </p>
          
        </div>
      </>
    </div>
  );
}

export default ProductPage;
