var getPrimes = function(max){
  for (var counter = 0; counter <= max; counter++)
{
    for (var i = 2; i <= counter-1; i++)
        if (counter%i === 0) break;
    if(i === counter)
        console.log(counter);
}
};