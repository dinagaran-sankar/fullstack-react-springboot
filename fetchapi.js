// async function createQuotes()
// {
//     const createResponse= await fetch('https://mimic-server-api.vercel.app/quotes',{

//      method:'POST',
//      headers:{
//      'Content-Type': 'application/json'
//      },
//      body:JSON.stringify({
//        author: 'vinay',
// 	   quote: 'never estimate the process'
//      }),
//     });
//     console.log(createResponse);
//     const data = await createResponse.json();
//     console.log(data);
//     alert('data inserted');
// }
// createQuotes();

// async function updateQuotes()
// {
//    const updt = await fetch('https://mimic-server-api.vercel.app/quotes/42',{
//     method: 'PUT',
//     headers:{
//      'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//       author: 'bala',
//       quote: 'never ever give up'
//     }),
// });
// console.log(updt);
// const data = await updt.json();
// console.log(data);
// alert('data has been updated');
// }

// updateQuotes();

// async function deleteQuotes(id)
// {
//    const deleteResponse = await fetch('https://mimic-server-api.vercel.app/quotes/'+id,{
//      method:'DELETE',
//      Headers:{
//        'Content-Type':'application/json',
//      },
// });
//    const data = await deleteResponse.json();
//    console.log(data);
//    alert('data has been deleted');
// }

// deleteQuotes(42);

// (async function patchQuotes(id)
// {
//      const patchResponse = await fetch('https://mimic-server-api.vercel.app/quotes/'+id,{
//        method: 'PATCH',
//        headers:{
//          'Content-Type':'application/json'
//        },
//        body:JSON.stringify({
//          author: 'elango'
//        }),
//     });
//     const data = await patchResponse.json();
//     console.log(data);
//     alert('patch data has been updated');
// })(40)