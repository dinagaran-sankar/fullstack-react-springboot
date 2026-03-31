import React from 'react';
import PageTitle from './PageTitle';

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
function PageHeading({title,children}) {
  return (
    <div className='container - pageHeading'>
      <PageTitle title={title}/>
      {/* one method */}
     {/* {props.children} */}
     <p className='paragarph-pagaHeading'>
      {children}
     </p>
    </div>
  )
}

export default PageHeading
