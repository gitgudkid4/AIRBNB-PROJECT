const router = require("express").Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require("./spots.js");
const spotImagesRouter = require("./spot-images.js");
const reviewRouter = require("./reviews.js");
const reviewImagesRouter = require("./review-images.js");
const bookingsRouter = require("./bookings.js");
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use("/spots", spotsRouter);
router.use("/spot-images", spotImagesRouter);
router.use("/reviews", reviewRouter);
router.use("/review-images", reviewImagesRouter);
router.use("/bookings", bookingsRouter);


router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
