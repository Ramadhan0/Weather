
const response = (res, message, status, data) => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};

export default response;
