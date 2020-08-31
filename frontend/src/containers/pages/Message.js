import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MessageDetails from '../../Components/Checkout/modal/MessageDetails';
import Spinner from '../../Components/Checkout/spinner/Spinner';

function Message(props) {
  const [message, setMessage] = useState({
    loading: false,
    openModal: false,
    charge: undefined,
  });
  useEffect(() => {
    setMessage({ ...message, loading: true });
    const response = axios.get('https://0a804bb98c8f.ngrok.io/webhooks');
    if (response.data) {
      setMessage({ loading: false, openModal: true, charge: response.data });
    }
  });

  const handleCloseModal = () => {
    setMessage({ ...message, openModal: false });
    props.history.push('/');
  };
  const { loading, openModal, charge } = message;
  return (
    <React.Fragment>
      {loading && <Spinner />}
      {openModal && (
        <MessageDetails charge={charge} closeModal={handleCloseModal} />
      )}
    </React.Fragment>
  );
}

export default Message;
