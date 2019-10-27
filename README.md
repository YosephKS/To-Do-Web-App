# To-Do-Web-App
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A simple To-Do Web Application to manage daily activities. The Application was build using React.js for its Frontend Framework, Express.js for its Backend Framework, and MySQL for its Database. The following will provide basic informations on how to execute the Web Application onto the localhost.

# Pre-requisites

Before running the Web App on localhost, it is imporant to look for several dependencies.

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

3. MySQL
```sh
    $ mysql --version
    mysql  Ver 8.0.17 for osx10.13 on x86_64 (Homebrew)
```

Furthermore, it is **essential to have VPN set up** to run this Application because it uses Google Map API, which might disrupt its implementation if Chinese Network is used.

# Executing Procedure

After cloning the (master) repository, the following will be the procedure to run the Web Application.

1. Create MySQL Database within the Local Computer
```sh
    $ cd backend && node database.js
```


2. Run the Server (both React.js and Express.js)
```sh
    $ npm run dev
```