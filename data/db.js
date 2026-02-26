const mysql = require(`mysql2`);

const conncection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
});

conncection.connect((err) => {
    if (err) throw err;
    console.log(`connected to MySQL`);
    
});

module.exports = conncection;