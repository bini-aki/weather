const errorHandler = (err, req, res, next) => {
  const status = err.response?.status || 500;
  const message =
    status === 404
      ? "City not found"
      : err.response?.data?.message || err.message || "Internal server error";

  res.status(status).json({ error: message });
};

module.exports = errorHandler;
