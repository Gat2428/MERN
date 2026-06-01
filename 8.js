/*Steps-
   Make sure nodejs is intsalled
 Open VS Code,
 Create LAB8 folder and open it.
 Open terminal and type
 npm init -y
 npm install express*/

// Create file server.js (type the code and save)
const express = require('express');
const app = express();
const port = 8000;

function isPrime(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num%2 === 0 || num%3 === 0) return false;
    for( let i=5; i*i <= num; i+=6){
        if(num%i === 0 || num %(i+2) ===0 ){
            return false;
        }
    }
    return true;
}
app.get('/find_prime_100',(req,res) =>
{
    const primes = [];
    
    for(let i =2;i<100;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    res.json({primes});
});
app.get('/find_cube_100',(req,res) =>
{
    const cubes = [];
    
    for(let i =1;i*i*i<100;i++){
        cubes.push(i*i*i);
    }
    res.json({cubes});
});
app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);
});

/*OUTPUT
To run the server
In terminal type node server.js
Server is running at http://localhost:3000
Open in Browser http://localhost:3000/find_prime_100
Open in Browser http://localhost:3000/find_cube_100
*/
