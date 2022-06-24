const notFoundHandler = (_req, _res, Next) => {
  const error = new Error("404 Page not found.");
  error.status = 404;
  Next(error);
};

const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: "Something went wrong" });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
