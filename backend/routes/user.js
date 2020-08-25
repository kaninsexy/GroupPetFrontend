const express = require("express");
const router = express.Router();

const controllers = require('../controllers/customers')
// const auth = passport.authenticate("jwt", { session: false });

router.post("/register",controllers.register);
router.post("/login",controllers.login)
router.post("/register/pets",controllers.registerPets)



module.exports = router;