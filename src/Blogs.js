import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActionCreator from "./store/action-creator/index";

function Blogs() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => {
    return state.blogs;
  });
  useEffect(() => {
    dispatch(ActionCreator.fetchBlogs());
  }, []);

  console.log({ blogs });

  return <div>Blogs</div>;
}

export default Blogs;
