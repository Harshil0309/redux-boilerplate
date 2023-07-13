const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const y = next(action);
  console.log("y", y);
  console.log("Next state:", store.getState());
};

export default loggerMiddleware;
