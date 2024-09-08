import sqlite3 from 'sqlite3';
import {open} from 'sqlite';


async function criaEPopularTabelaUsuarios(nome,sobrenome){
   const db = await  open({
        filename:'./banco.db',
        driver: sqlite3.Database,
    });

    db.run(
        `CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY,nome TEXT,sobrenome TEXT)`
    );
    db.run(`insert into usuario(nome,sobrenome) values (?,?)`,[
        nome,sobrenome
    ])
    // db.run(`delete from usuario where id=4`)
}

criaEPopularTabelaUsuarios();