/*steps
• Open command prompt, type mongod
• Open VS Code
• Click File → Open Folder.
• Create/open a folder (example): NodeMongoStudent
• In VS Code:
• Terminal → New Terminal
• npm init –y
• npm install mongodb
• Now folder structure becomes*/

//Create javascript file “Student.js” for 4a

const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
async function main() {
    const client = new MongoClient(uri);
    try{
    await client.connect();
        const db = client.db('studentdb');
        const students = db.collection('students');
        const student = [
            {usn:'1GA22CI61',name:'Alice',sem:4,year_of_admission:2023},
            {usn:'1GA22CI62',name:'Zane',sem:2,year_of_admission:2024},
            {usn:'1GA22CI63',name:'Anice',sem:5,year_of_admission:2023},
            {usn:'1GA22CI64',name:'Ann',sem:5,year_of_admission:2023},
            {usn:'1GA22CI61',name:'Alice',sem:4,year_of_admission:2023},
            {usn:'1GA22CI65',name:'Jane',sem:2,year_of_admission:2024}
        ];
        const result = await students.insertMany(student);
        console.log( `Inserted ${result.insertedCount} students`);
        console.log("Inserted IDs:",result.insertedIds);
    }catch(error){
        console.error("Error inserting data:",error);
    }finally{   
        await client.close();
    }
    
}

//Create javascript file “Student1.js” for 4b

const { MongoClient } = require('mongodb');
async function searchStudentsByName(partialName) {
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
try {
await client.connect();
const database = client.db('studentdb');
const students = database.collection('students');
const query = { name: { $regex: partialName, $options: 'i' } };
const cursor = students.find(query);
const results = await cursor.toArray();
console.log(`Found ${results.length} students matching '${partialName}':`);
results.forEach(student => console.log(student));
} finally {
await client.close();
}
}
searchStudentsByName('Al');

