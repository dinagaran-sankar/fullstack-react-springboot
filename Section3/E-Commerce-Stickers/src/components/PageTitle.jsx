import React from 'react'

// export default function PageTitle(props) {
//   return (
//     // using props
//     <h1 className='h1-pageTitle'>
//       {props.title}
//     </h1>
//     //using object destructing
//     <h1 className='h1-pageTitle'>
//       {title}
//     </h1>
//   )
// }
    //using object destructing
export default function PageTitle({title}) {
  return (
    <h1 className='h1-pageTitle'>
      {title}
    </h1>
  )
}
