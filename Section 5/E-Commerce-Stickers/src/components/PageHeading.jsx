import React from "react";
import PageTitle from "./PageTitle";

// function PageHeading(props) {
//   return (
//     <div className='container - pageHeading'>
//       <PageTitle title="Explore Sports Stickers!!!..."/>
//       {/* one method */}
//      {/* {props.children} */}
//      <p className='paragarph-pagaHeading'>
//       {props.children}
//      </p>
//     </div>
//   )
// }

//using object destructing
function PageHeading({ title, children }) {
  return (
    <div className="text-center max-w-[576px]  mx-auto px-6 py-2">
      <PageTitle title={title} />
      {/* one method */}
      {/* {props.children} */}
      <p className="font-serif text-taupe-900">{children}</p>
    </div>
  );
}

export default PageHeading;
