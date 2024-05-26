const mysql = require('mysql');

class ConnectDatabase {
    constructor() {
        this.host = 'localhost';
        this.username = 'root';
        this.password = '';
        this.database = 'fruitbliss';
    }

    cnct() {
        return mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            database: this.database
        });
    }

    read(query) {
        const connection = this.cnct();
        return new Promise((resolve, reject) => {
            connection.connect(err => {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(query, (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                    connection.end();
                });
            });
        });
    }

    write(query) {
        const connection = this.cnct();
        return new Promise((resolve, reject) => {
            connection.connect(err => {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(query, (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(true);
                    }
                    connection.end();
                });
            });
        });
    }
}

const connectDB = new ConnectDatabase();

// Usage example:
// Read operation
connectDB.read('SELECT * FROM your_table')
    .then(results => {
        console.log('Read results:', results);
    })
    .catch(error => {
        console.error('Error reading data:', error);
    });

// Write operation
connectDB.write('INSERT INTO your_table (column1, column2) VALUES (value1, value2)')
    .then(success => {
        console.log('Write successful:', success);
    })
    .catch(error => {
        console.error('Error writing data:', error);
    });
