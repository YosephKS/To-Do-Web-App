# TO-DO
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

TO-DO is a simple To-Do Web Application to manage (adding & deleting) tasks. The Application was build using React.js for its Frontend Framework, Express.js for its Backend Framework, and MySQL for its Database. The following will provide basic informations on how to execute the Web Application onto the localhost.

# License

Apache 2.0

# Version

v. 0.9.0 Beta

# Pre-requisites

Before running the Web App on localhost, it is imporant to look for several pre-requisites. In addition, it will be highly important to have an adequate version of each pre-requisites. The following is the version that I used.

1. NPM
```sh
    $ npm --version
    6.10.2
```

2. node
```sh
    $ node --version
    v10.15.3
```

3. MySQL Shell
```sh
    $ mysql --version
    mysql  Ver 8.0.17 for osx10.13 on x86_64 (Homebrew)
```

In case any of the of the pre-requisites are missing, it is suggested to install them before execution. Here are the documentation links for each dependencies: 
1. NPM: https://docs.npmjs.com/
1. Node: https://nodejs.org/en/docs/
1. MySQL Shell: https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html

Furthermore, it is **essential to have VPN set up** to run this Application because it uses Google Map API, which might disrupt its implementation if Chinese Network is used.

# Executing Procedure

After cloning the (master) repository, the following will be the procedure to run the Web Application using Bash Terminal.

1. Open Bash Terminal and run the local MySQL server (password is required). If no password was set up after installation, just press *Enter* for the password.
```sh
    $ mysql -u root -p
      Enter password:
```

2. Change the MySQL connection setup in *backend/index.js* and *backend/database.js*
```sh
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345', // Change based on MySQL
        database: 'todo'
    });
```

3. Open another Bash Terminal. Return to the root folder and create MySQL Database within the Local Computer
```sh
    $ npm run database
```


4. Run the Server (both React.js and Express.js)
```sh
    $ npm run dev
```
