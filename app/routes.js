const router = require("express").Router();

router.get("/health", (_req, res) => {
  res.status().json({ message: "Connection Successful" });
});

module.exports = router;
