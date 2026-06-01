/*Steps for execution
Install VisualStudio Code (VS CODE)
Install Node.js
Open VS Code Click File → Open Folder
Create a folder lab3*/


//Click New File -> Create JavaScript File “server.js” for 3a
const http = require("http");
const server = http.createServer((req,res) =>{
    const headers = req.headers;
    console.log(headers,".....");
    if(headers.cookie){
        console.log("Cookies:",headers.cookie);
    } else {
        console.log("No cookies found in the request header.");
    }
    res.end("Check console for cookies information.");
});
server.listen(3000,() => {
    console.log("Server running at http://localhost:3000/");
});

/*Steps to add cookies
• In browser, Press F12
• Using Browser Developer Tools:
• Open the developer tools in your browser (usually by pressing F12).
• Go to the "Application" or "Storage" tab.
• In the "Cookies" section -> select localhost:3000.
• Add Cookies by typing name and value
• Refresh the http://localhost:3000
Output
Open VSCode Terminal, Run the server:-
node server.js
Server running at http://localhost:3000/
Open browser http://localhost:3000/
"Check console for cookies information. “
Add Cookies, Refresh the browser
Go back to the terminal
Cookies: new =123*/

//Click New File -> Create JavaScript File “CarObject.js” for 3b
const car ={
    make:'Toyota',
    model:'Camry',
    year:2020,
    color:'blue'
};
console.log('Original car object');
for(const property in car){
    console.log(`${property}: ${car[property]}`);

}
const secondProperty = Object.keys(car)[1];
delete car[secondProperty];
console.log('\n Car objectafter deleting the second property:');

for(const property in car){
    console.log(`${property}: ${car[property]}`);

}
const length = Object.keys(car).length;
console.log(`\nLength of the car object after deleting the second property:${length}`);

/*Output
node carObject.js*/
