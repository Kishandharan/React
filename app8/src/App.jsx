import mysql from "mysql2/promise";


async function execQuery(query, password, usr){
    let connection = await mysql.createConnection(
        host : "localhost",
        user : usr,
        password : "************",
    );

    let result = await connection.query(query);

    return result;
}

function App(){
    let output;
    let output_prom = execQuery("show databases;", "poweruser123", "root").then(
        (value) => {(output = value;)}
    );
    return (
        <>
            <p>{output}</p>
        </>
    );
}

export default App;
