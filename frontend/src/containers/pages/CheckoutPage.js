import React, { useState } from 'react';
import axios from 'axios';
import ChekoutCreditCard from '../../Components/Checkout/CheckoutCreditcard';
import CheckoutInternetBanking from '../../Components/Checkout/CheckoutInternetBanking';

function CheckOutPage(props) {
  const [charge, setCharge] = useState(undefined);
  const [type, setType] = useState('');
  const [cart, setCart] = useState({
    name: 'Guest',
    items: [],
    amount: 7680000,
    totalQty: 0,
    email: 'guest@test.com',
  });
  const createCreditCardCharge = async (email, name, amount, token) => {
    // setCart({ ...cart, token: token });
    // console.log(token);
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:8000/checkout-credit-card',
        data: { email, name, amount, token },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.data) {
        setCharge(res.data);
        setType('Credit Card');
        props.clearCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createInternetBankingCharge = async (email, name, amount, token) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:8000/checkout-internetBanking',
        data: { email, name, amount, token },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { authorizeUri } = res.data;

      if (authorizeUri) {
        window.location.href = authorizeUri;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='own-form'>
      <div className='cart__summary'>
        <h2>Cart Summary</h2>
        <div className='cart-details'>
          <h3>Total Amount: </h3>
          <h3>
            <span>{new Intl.NumberFormat().format(cart.amount / 100)} thb</span>
          </h3>
        </div>
      </div>
      <ChekoutCreditCard
        cart={cart}
        createCreditCardCharge={createCreditCardCharge}
      />
      <CheckoutInternetBanking
        cart={cart}
        createInternetBankingCharge={createInternetBankingCharge}
      />
      <div className='message'>
        {charge && (
          <div>
            <h4>Thank you for your payment with {type}</h4>
            <p>
              Your payment amount is
              <span className='amount'>
                {new Intl.NumberFormat().format(charge.amount)} Baht
              </span>
              , status:
              <span
                className={
                  charge.status === 'successful'
                    ? 'success'
                    : charge.status === 'failed'
                    ? 'failed'
                    : 'pending'
                }
              >
                {charge.status}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default CheckOutPage;
