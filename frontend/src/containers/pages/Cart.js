import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState({
    name: 'Guest',
    items: [],
    amount: 45000,
    totalQty: 0,
    email: 'guest@test.com',
  });
}

export default Cart;
