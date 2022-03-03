// const mysql = require('mysql');
// const pool = mysql.createPool({
//     connectionLimit: 100,
//     password: process.env.DB_PASS,
//     user: process.env.DB_USER,
//     database: process.env.MYSQL_DB,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
// });
let db = {};
db.getUser = (id,pool) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM user WHERE id= ?', [id], (error, user)=>{
            if(error){
                return reject(error);
            }
            return resolve(user);
        });
    });
};
db.getUserByEmail = (email,pool) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM user WHERE email = ?', [email], (error, users)=>{
            if(error){
                return reject(error);
            }
            return resolve(users[0]);
        });
    });
};
db.insertUser = (firstName, lastName, email, password,pool) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO user (Username, Email, Password, Status) VALUES (?, ?, ?, 0)', [firstName, email, password], (error, result)=>{
            if(error){
                return reject(error);
            }
              return resolve(result.insertId);
              
        });
    });
};
module.exports = db;