let x = 10;

function minus(input){
  input --
  console.log(input);
  if(input ===0) return
    minus(input);
};

minus(x);