const cache = new Map(); 
 
function factorial(n) { 
  if (cache.has(n)) return cache.get(n); 
  let result = n <= 1 ? 1 : n * factorial(n - 1); 
  cache.set(n, result); 
  return result; 
} 
 
console.log(factorial(5)); // 120