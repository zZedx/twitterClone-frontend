export const errorHandler = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};