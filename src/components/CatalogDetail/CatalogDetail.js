import React, { useState, useEffect } from 'react';
import './CatalogDetail.scss';

function CatalogDetail() {
  return (
    <div id="myCart" className="modal fade right" role="dialog" aria-hidden="true">
      <div className="modal-dialog sidecart" role="document">
        <div className="modal-content">
          <header className="cart-header">
            <p className="your-cart">Your Cart</p>
            <a className="close-cart-btn" data-bs-dismiss="modal">X</a>
          </header>

          <footer className="cart_footer p-2">
            <div className="cart_total mb-1">
              <span>Subtotal:</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CatalogDetail;