/*Steps:-
Open VS Code terminal
mkdir lab5
cd lab5
code .
Create file app.js*/

const fs=require('fs');
const readline=require('readline');
const path=require('path');
const filePath=path.join(__dirname,'sample.txt');

    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    function menu(){
      console.log("\n---FILE CRUD OPERATIONS---");
      console.log("1.Create File");
      console.log("2.Read File");
      console.log("3.Update File");
      console.log("4.Delete File");
      console.log("5.Exit");
      rl.question("Enter your choice:",(choice)=>{
        switch(choice){
            case '1':
                createFile();
                break;
            case '2':
                readFile();
                break;
            case '3':
                updateFile();
                break;
            case '4':
                deleteFile();
                break;
            case '5':
                console.log("Exiting...");
                r1.close();
                break;
            default:
                console.log("Invalid choice!");
                menu();

        }
      });
    }
    function createFile(){
        rl.question("Enter content to write:",(content)=>{
            fs.writeFile(filePath,content,(err)=>{
                if(err) throw err;
                console.log("File created successfully");
                menu();
            });
        });
    }
    function readFile(){
        fs.readFile(filePath,'utf8',(err,data)=>{
            if(err){
                console.log("File does not exist!");
            }else{
                console.log("File Content:\n"+data);
            }
            menu();
        });
    }
    function updateFile(){
        rl.question("Enter content to append:",(content)=>{
            fs.appendFile(filePath,"\n"+content,(err)=>{
                if(err) throw err;
                console.log("File updated successfully");
                menu();
            });
        });
    }
    function deleteFile(){
        fs.unlink(filePath,(err)=>{
            if(err){
                console.log("File does not exist!");
            }else{
                console.log("File deleted successfully");
            }
            menu();
            });
    }
    menu();
