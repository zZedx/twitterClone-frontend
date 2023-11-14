export const errorHandler = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};