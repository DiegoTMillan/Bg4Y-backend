# Bg4Y-backend :computer:
Boardgames 4 you Backend

## Presentation :green_book:
Hi everyone. I am Diego Tapia and this is my final project Boardgames 4 you. Although there are many different areas, probably more insteresting.
It's a fact that I am an authentic fanatic of boardgames.
Indeed I am full motivated because I want to share something really special with everyone, just make by myself.

## Get Start :arrow_forward:

If you want to see my project in your computer, please, follow this steps:

  1. ### Requirements

Please check that apache and NPM is fully installed and operating

  2. ### Install

  - Node.js

Adding Node.js to the system

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

after that

```
sudo apt-get install nodejs
```

now you can check your version with this command

```
node -v
```

  - In your directory:

```
npm install nodemon --save-dev
```
```
npm install express mongoose dotenv --save
```
```
npm i bcrypt jsonwebtoken --save
```

  3. ### Clone the repository

```
git clone https://github.com/DiegoTMillan/Bg4Y-backend.git
```

  4. ### Files

because of gitignore there some files that you have to create

  - secret.js

It's necessary for node secret. Here is the structure.

```
console.log(
    require("crypto")
      .createHmac("choose an online hash function", "write something")
      .update("write something")
      .digest("hex")
  );
```

  - .env

here you will indicate the connection with the database and the encrypted code for secret and
refresh secret that you have created with the code in secret.js and the command node secret.

```
DATABASE_URL = mongodb://localhost:PortNumber/nameOfDatabase
SECRET = xxxx
REFRESH_SECRET = xxx
```

## Basic Structure :bookmark_tabs:

First of all, I want to talk about my elections with the backend. I finally have chosen NodeJs and MongoDb, why?
In one hand, I know that symfony and mysql are popular
and very useful, but, in the other hand, I think that my choice is more flexible and I am very keen on this tecnologies. 
In fact, I feel very comfortable working with them.

Obviously I will show some examples about the structure of the backend with de boardgames, users and login.

  1. ### Boardgames

  - An example of a boardgame document

```
{  "_id": {    "$oid": "62a99ad2e91b40cf1693598b"  },
"name": "maracaibo",
"editorial": "masqueoca",
"author": ["Alexander Pfister"],
"numPlayers": {
  "min": 2,
  "max": 4  },
 "avgMinDuration": 120,
 "minAgeRecommended": 12,
 "expansions": []}
```
for author, and expansions I prefer to use arrays because there is variety with data numbers.

- A table with boargames endpoints:

|URL|TYPE|DESCRIPTION|ROLE|
|---|---|------------|----|
|127.0.0.1:8000/boardgames/|GET|get all items from database|user and admin|
|127.0.0.1:8000/boardgames/id|GET|get items by id|user and admin|
|127.0.0.1:8000/boardgames|POST|insert a new document|admin|
|127.0.0.1:8000/boardgames/id|PATCH|update an item by id|admin|
|127.0.0.1:8000/boardgames/id|DELETE|delete an item by id|admin|

2. ### Users

- An example of a user document:

```{  "_id": {    "$oid": "11111111111111"  },
"first_name": "XXXXX",
"last_name": "XXXXX",
"email": "xxxxx@xxxxxxx.com",
"password": "admin",
"phone": "xxx-xxx-xxxx",
"city": "Marbella",
"district": "Malaga",
"role": "admin"}
```
- a table with users endpoints:

|URL|TYPE|DESCRIPTION|ROLE|
|---|---|------------|----|
|127.0.0.1:8000/users/|GET|get all items from database|admin|
|127.0.0.1:8000/users/id|GET|get items by id|user and admin|
|127.0.0.1:8000/users|POST|insert a new document|admin|
|127.0.0.1:8000/users/id|PATCH|update an item by id|admin|
|127.0.0.1:8000/users/id|DELETE|delete an item by id|admin|

3. ### Login 

- An example of login document:

```{  "_id": {    "$oid": "xxxxxxxxxxxxxxxx"  },
"email": "xxxxx@xxxxxxx.com",
"password": "(an encrypted password)",
"role": "admin"}
```

- An example of login endpoints:

|URL|TYPE|DESCRIPTION|ROLE|
|---|---|------------|----|
|127.0.0.1:8000/login/new|POST|register of a new login|user and admin|
|127.0.0.1:8000/login|POST|just login with user and password|user and admin|
|127.0.0.1:8000/login/refresh|POST|refresh token|user and admin|

## Gitignore :no_entry:

Obviously everything is not on this respository. The weight of some directories and security are the most important reasons. Therefor here is a list
with that elements that are not here.
- node modules
- .env
- secret.js
- package-lock.json






    
