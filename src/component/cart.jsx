import React, { useState } from "react";
import "../assets/productStyle.css";

function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  cartTotal,
}) {
  const [paymentMethod, setPaymentMethod] = useState("cash"); // default cash

  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString("id-ID")}`;
  };

  // Hitung diskon per item
  const getDiscountedSubtotal = (price, quantity) => {
    const subtotal = price * quantity;
    if (subtotal >= 100000) {
      return subtotal * 0.9; // 10%
    } else if (subtotal >= 50000) {
      return subtotal * 0.95; // 5%
    }
    return subtotal;
  };

  const totalWithDiscount = cartItems.reduce(
    (acc, item) => acc + getDiscountedSubtotal(item.price, item.quantity),
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Keranjang Anda masih kosong!");
      return;
    }

    const orderSummary = cartItems
      .map((item) => {
        const subtotal = getDiscountedSubtotal(item.price, item.quantity);
        return `${item.name} x${item.quantity} - ${formatPrice(subtotal)}`;
      })
      .join("\n");

    let paymentInfo =
      paymentMethod === "cash"
        ? "Cash (dibayar langsung di tempat)"
        : "Bank Transfer\nRekening: BCA 1234567890 a/n Sony Nursery";

    alert(
      `Checkout Berhasil! 🎉\n\n` +
        `Metode Pembayaran: ${paymentInfo}\n\n` +
        `Detail Pesanan:\n${orderSummary}\n\n` +
        `Total: ${formatPrice(totalWithDiscount)}\n\n` +
        `Terima kasih telah berbelanja di Sony Nursery!`
    );

    onClearCart();
    onClose();
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            🛒 Keranjang Belanja
            {cartItems.length > 0 && (
              <span className="cart-count">({cartItems.length})</span>
            )}
          </h2>
          <button className="cart-close-btn" onClick={onClose}>
            ✖️
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🛒</div>
              <h3>Keranjang Kosong</h3>
              <p>Belum ada produk di keranjang Anda</p>
              <button className="continue-shopping-btn" onClick={onClose}>
                🌿 Lanjut Belanja
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => {
                  const subtotal = getDiscountedSubtotal(
                    item.price,
                    item.quantity
                  );
                  const discount =
                    item.price * item.quantity >= 100000
                      ? "10%"
                      : item.price * item.quantity >= 50000
                      ? "5%"
                      : null;

                  return (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <p className="cart-item-price">
                          Harga Satuan: {formatPrice(item.price)}
                        </p>

                        <div className="cart-item-quantity">
                          <button
                            className="qty-btn"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            −
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            disabled={item.quantity >= item.stock}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-actions">
                        <div className="cart-item-subtotal">
                          {formatPrice(subtotal)}
                          {discount && (
                            <span className="discount-badge">-{discount}</span>
                          )}
                        </div>
                        <button
                          className="cart-item-remove"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cart-clear-section">
                <button className="clear-cart-btn" onClick={onClearCart}>
                  🗑️ Kosongkan Keranjang
                </button>
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Payment Method (dipindah sebelum subtotal) */}
            <div className="payment-method">
              <div className="summary-row">
                <span>Metode Pembayaran:</span>
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <span>💵 Cash</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    <span>🏦 Bank Transfer</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Ringkasan Harga */}
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="summary-row">
                <span>Diskon:</span>
                <span>- {formatPrice(cartTotal - totalWithDiscount)}</span>
              </div>
              <div className="summary-row">
                <span>Ongkir:</span>
                <span className="shipping-free">🚚 GRATIS</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span className="total-price">
                  {formatPrice(totalWithDiscount)}
                </span>
              </div>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              ✅ Checkout Sekarang
            </button>
            <button className="continue-btn" onClick={onClose}>
              ← Lanjut Belanja
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
