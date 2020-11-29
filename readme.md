### Hi it's a sql-server with Docker.

- Make sure have Docker & node (NPM) installed.

#### Instructions

- ``` npm install```
- ```docker-compose up -d  ```

- ``` docker-compose ps ``` to watch that image.

- ```docker exec -it sql-server-db "bash"```
- ```/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P docker_msql_password ```
- ``` create database testdb``` > nd then ``` go```
-  ``` use testdb ``` > nd ``` go ``` .
-  ``` create table users (id INT , name VARCHAR(120), email NVARCHAR(255)) ``` > nd then ``` go```
-  insert into users values(1, 'Kun Maradona', 'kun.maradona@afa.com.ar') > nd > ```go ```

``` select * from users ``` nd ```go```

nd then exit...

#### Run 

-```node index.js ```


🥳 Enjoy 👍🏼

### ================================
*[@Author](https://github.com/dbeetoven)*
