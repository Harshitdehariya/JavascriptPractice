
//
//this is callbackhell lot of unmaintainablecode also called pyramid of dom



function loadingData(){
    console.log("processing");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1","this is loadingdta");
            resolve();
        },1000)

    })
  
    }


function exitData (){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("please exit the data");
        resolve();
     })


  })




}

  

function collectingData(){
   return new Promise ((resolve,reject)=>{

    setTimeout(()=>{
        console.log("2","this is collectingData");
        resolve();
      },2000)

   })

 

    
}

function ResolvingData(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("3","this is ResolvingData");
            reject("promise not fulfilled");
    
        }),3000

    })

   
   
}

function ResolvedData(){
    console.log("4","this is ResolvedData");
}




// loadingData(function(){
//     collectingData(function(){
//         ResolvingData(function(){
//             ResolvedData();
//         });
        
    

//     });
 
// });
//  loadingData().then(collectingData).then(ResolvingData).then(ResolvedData).catch((err)=>{
//     console.log(err);
//  })



 async  function Ex () {
await loadingData();

await collectingData();
await exitData();
await ResolvingData();

await ResolvedData();

}

Ex().catch((err)=>{
    console.log("Not fulfilled");
})