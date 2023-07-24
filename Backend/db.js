const Pool =require ("pg").Pool;

const pool =  new Pool({
    user: "postgres",
    password: "Stef@nos.100",
    host: "localhost",
    port: 5200,
    database: "perntodo"
});

module.exports = pool;