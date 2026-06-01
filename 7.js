/*Steps: -
In VS Code: Create LAB7 folder
 Click Terminal -> New Terminal
 npm init -y
This creates package.json
If an error shows for this command type :-
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
 npm install express bcrypt
wait for installation to get over
In left panel (Explorer), Click New File, server.js (paste the code and save)
 mkdir public
Public will be created, in left pane select public, right click and create new files
Inside public create:
 register.html (type the code and save)
 login.html (type the code and save)*/

//Creaate file:Server.js

const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

let users = [];

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (user) {
        return res.send('User already exists');
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        email,
        password: hashedPassword
    });

    res.send('Registration successful');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.send('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
        res.send('Login successful');
    } else {
        res.send('Wrong password');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

//Creaate file:Register.html in public folder

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>

    <style>
        body {
            background-color: #e3f2fd;
            font-family: Arial, sans-serif;
        }

        form {
            background-color: rgb(223, 233, 190);
            width: 350px;
            margin: auto;
            margin-top: 100px;
            padding: 20px;
            border-radius: 10px;
        }

        input {
            width: 180px;
            padding: 5px;
        }

        button {
            padding: 6px 15px;
        }

        h2 {
            text-align: center;
        }

        p {
            text-align: center;
        }
    </style>
</head>

<body>

<form action="/register" method="POST">

    <h2>Register</h2>

    <table align="center">
        <tr>
            <td>Email :</td>
            <td>
                <input type="email" name="email" required>
            </td>
        </tr>

        <tr>
            <td>Password :</td>
            <td>
                <input type="password" name="password" required>
            </td>
        </tr>
    </table>

    <br>

    <center>
        <button type="submit">Register</button>
    </center>

    <p>
        <a href="login.html">Go to Login</a>
    </p>

</form>

</body>
</html>

//Creaate file:Login.html in public folder
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>

    <style>
        body {
            background-color: #e3f2fd;
            font-family: Arial, sans-serif;
        }

        form {
            background-color: rgb(228, 191, 191);
            width: 350px;
            margin: auto;
            margin-top: 100px;
            padding: 20px;
            border-radius: 10px;
        }

        input {
            width: 180px;
            padding: 5px;
        }

        button {
            padding: 8px 15px;
        }

        a {
            text-decoration: none;
        }
    </style>
</head>

<body>

<form action="/login" method="POST">

    <h2 align="center">Login</h2>

    <table align="center" cellpadding="10">

        <tr>
            <td>Email :</td>
            <td>
                <input type="email" name="email" required>
            </td>
        </tr>

        <tr>
            <td>Password :</td>
            <td>
                <input type="password" name="password" required>
            </td>
        </tr>

    </table>

    <br>

    <center>
        <button type="submit">Login</button>
    </center>

    <p align="center">
        <a href="register.html">Go to Register</a>
    </p>

</form>

</body>
</html>

/*
OUTPUT:
In terminal , type:-
node server.js
    Server running at http://localhost:3000
Open browser
http://localhost:3000/register.html
You will see a form:
  Enter email
  Enter password
  Click Register
Open browser
http://localhost:3000/login.html
  Enter same email & password
  Click Login
*/
