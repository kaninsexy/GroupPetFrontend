import LoginPage from '../containers/pages/Login';
import RegisterPage from '../containers/pages/Register';
import AddPetsPage from '../containers/pages/Add_Pets';
import BookingPetsPage from '../containers/pages/Booking_Pets';
import CheckOutPage from '../containers/pages/CheckoutPage';
import Message from '../containers/pages/Message';

const components = {
  login: {
    url: '/login',
    component: LoginPage,
  },
  register: {
    url: '/register',
    component: RegisterPage,
  },
  addPets: {
    url: '/pets/add',
    component: AddPetsPage,
  },
  bookingPets: {
    url: '/pets',
    component: BookingPetsPage,
  },
  checkoutpage: {
    url: '/checkout',
    component: CheckOutPage,
  },
  message: {
    url: '/message',
    component: Message,
  },
};
export default {
  guest: {
    allowedRoutes: [
      components.login,
      components.register,
      components.addPets,
      components.bookingPets,
      components.checkoutpage,
      components.message,
    ],
    redirectRoutes: '/login',
  },
  user: {
    allowedRoutes: [components.login, components.register],
    redirectRoutes: '/login',
  },
  admin: {
    allowedRoutes: [components.login, components.register],
    redirectRoutes: '/login',
  },
};
