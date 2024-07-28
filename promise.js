//promise


function fun(task){
 return new Promise ((resolve,reject)=>{
   if(task){
    console.log("completed");
   }
   else{
    console.log("not completed");
   }

 })
}

let onResolve = ((res)=>{
    console.log(onResolve);
})

let onReject = ((err)=>{
    console.log(onReject);
})

fun(false).then(onResolve).catch(onReject);