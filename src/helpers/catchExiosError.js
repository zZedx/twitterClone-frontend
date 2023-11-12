export const errorHandler = (fn) => async (req, res) => {
    try {
      await fn(req, res);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };