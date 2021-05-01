import React from "react";

const Container = (props: {
  children: React.ReactNodeArray | React.ReactNode;
}) => {
  return <div className='container'>{props.children}</div>;
};
export default Container;
