# Bar'booh© beers review site

SPA developed as final project of Web Development Course at École Centrale de Marseille.

## 1. About the stack

The following project was developed using Node.js as server, Express.js as web framework, Sequelize as ORM (using PostgreSQL) and EJS as code interpreter.

## 2. Dependencies

As prerrequsites to run this project in your computer, you must have installed npm, Node.js and PostgreSQL.

Here you have more information about the installation:

1. [npm and Node.js installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [PostgreSQL](https://www.postgresql.org/download/)

## 3. Setup

The following commands will allow you to run this project:

### 3.1 Install dependencies

```bash
npm install
```

### 3.2 Create database and run migration

Before run the following command, you have to enter your own PostgreSQL username and password in ```config.json``` file, located in ```config``` folder. The file must have the following structure:

```
{
  "development": {
    "username": <your_username>,
    "password": <your_password>,
    "database": "beers_directory",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": <your_username>,
    "password": <your_password>,
    "database": "beers_directory",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": <your_username>,
    "password": <your_password>,
    "database": "beers_directory",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

Being ```<your_username>``` and ```<your_password>``` the fields to fill.

Now you can run this command, to create de database and run the migration.

```bash
npx sequelize-cli db:migrate
```

### 3.3 Run project
```bash
npm run start
```

### 3.4 Display the project

To display the project in you browser, just go go to your localhost in port 8000. The main route is the following:

[http://localhost:8000/spa](http://localhost:8000/spa)
