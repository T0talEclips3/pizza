import React from "react";

const Container = React.memo((props: { children: React.ReactNode }) => {
  return <div className='container'>{props.children}</div>;
});
export default Container;
