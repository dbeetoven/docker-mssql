const sql= require('mssql');

const config={
    user:'SA',
    password:'docker_msql_password',
    server: 'localhost',
    database: 'testdb',
    options:{
        enableArithAbort:true
    }
}

console.log('......');

const run = async () => {
    let pool;
    try {
        console.log('Connection Opening...');
        pool = await sql.connect(config);
        const {recordset}= await sql.query`select * from users`;
        console.log({recordset});

    } catch(err){
        console.log({err});

    } finally{
        await pool.close;
        console.log('connection Closed');
    }
}

run();
