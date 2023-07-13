const middleware2 = (store) => (next) => (action) => {
  console.log("inside 2nd middleare");
  next(action);
  return 2000;
};

export default middleware2;
