
  let arguments = process.argv.slice(2);
    for(let value of arguments){
     if(typeof parseInt(value) !== "number" || parseInt(value)<0 || isNaN(value)){
         continue;
       }else {
      setTimeout(()=>{
        process.stdout.write('\x07');
      },value*100)
    }   
  } 