var sum = 0;
process.argv.splice(2).forEach(
  function(i) { 
    sum += +i;
});
console.log(sum);
