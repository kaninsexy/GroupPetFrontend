import React, { useState } from 'react';
import axios from 'axios';
import ChekoutCreditCard from '../../Components/Checkout/CheckoutCreditcard';
import CheckoutInternetBanking from '../../Components/Checkout/CheckoutInternetBanking';

function CheckOutPage() {
  const [charge, setCharge] = useState(undefined);
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
      const resData = res.Data;
      setCharge(resData);
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
      <ChekoutCreditCard
        cart={cart}
        createCreditCardCharge={createCreditCardCharge}
      />
      <CheckoutInternetBanking
        cart={cart}
        createInternetBankingCharge={createInternetBankingCharge}
      />
    </div>
  );
}
export default CheckOutPage;
