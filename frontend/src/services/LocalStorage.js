function setToken(token) {
  localStorage.setItem('ACCESS_TOKEN', token);
}

function getToken() {
  return localStorage.getItem('ACCESS_TOKEN');
}

function getRole() {
  if (getToken()) {
    return 'user';
  }
  return 'guest';
}

function removeToken() {
  localStorage.removeItem('ACCESS_TOKEN');
}

export default {
  setToken,
  getToken,
  removeToken,
  getRole,
};

// class localStorage {
//   getToken() {
//     localStorage.getItem('ACCESS_TOKEN');
//   }
//   setToken(token) {
//     localStorage.setItem('ACCESS_TOKEN', token);
//   }
//   removeToken() {
//     localStorage.removeItem('ACCESS_TOKEN');
//   }
//   getRole() {
//     if (getToken()) {
//       return 'user';
//     }
//     return 'guest';
//   }
// }

// export default {
//   setToken,
//   getToken,
//   removeToken,
//   getRole,
// };
