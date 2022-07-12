# Bg4Y-backend :computer:
Boardgames 4 you Backend.\
This is only the backend of a bigger project. Here is the URL of the other repository:
  ### Bg4Y-frontend
  ```
  https://github.com/DiegoTMillan/Bg4Y-frontend.git
  ```

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

  4. ### Install node_modules

node_modules is included in gitignore because is too heavy, but with this simple command in this directory it will be installed.

```
npm install
```

## Basic Structure :bookmark_tabs:

First of all, I want to talk about my elections with the backend. I finally have chosen NodeJs and MongoDb, why?
In one hand, I know that symfony and mysql are popular
and very useful, but, in the other hand, I think that my choice is more flexible and I am very keen on this tecnologies. 
In fact, I feel very comfortable working with them.

Obviously I will show some examples about the structure of the backend with the boardgames, users and login.

  1. ### Boardgames

  - An example of a boardgame document

```
{  
"_id": {    "$oid": "62a99ad2e91b40cf1693598b"  },
"name": "maracaibo",
"editorial": "masqueoca",
"author": ["Alexander Pfister"],
"numPlayers": {
  "min": 2,
  "max": 4  },
 "avgMinDuration": 120,
 "minAgeRecommended": 12,
 "expansions": []
}
```
for author, and expansions I prefer to use arrays because there is variety with data numbers.

- A table with boargames endpoints:

|URL|TYPE|DESCRIPTION|
|---|---|------------|
|127.0.0.1:8000/boardgames/|GET|get all items from database|
|127.0.0.1:8000/boardgames/id|GET|get items by id|
|127.0.0.1:8000/boardgames|POST|insert a new document|
|127.0.0.1:8000/boardgames/id|PATCH|update an item by id|
|127.0.0.1:8000/boardgames/id|DELETE|delete an item by id|

1. ### Users

- An example of a user document:

```
{  
"_id": {    "$oid": "62b1f8995b79a0732eb33337"  },
"first_name": "Jamaal",
"last_name": "Wheatland",
"email": "jwheatland2@t.co",
"password": "$2b$10$H6ugxPjrmhTSten2iJt.W.ayFQXdIlL.D018Xlmg.0CXAqXTGFGNW",
"phone": "277-240-8739",
"city": "Marbella",
"district": "Malaga",
"role": "admin"
}
```
- a table with users endpoints:

|URL|TYPE|DESCRIPTION|
|---|---|------------|
|127.0.0.1:8000/users/|GET|get all items from database|
|127.0.0.1:8000/users/id|GET|get items by id|
|127.0.0.1:8000/users|POST|insert a new document|
|127.0.0.1:8000/users/id|PATCH|update an item by id|
|127.0.0.1:8000/users/id|DELETE|delete an item by id|

1. ### Login 

- An example of login endpoints:

|URL|TYPE|DESCRIPTION|
|---|---|------------|
|127.0.0.1:8000/login/new|POST|register of a new login|
|127.0.0.1:8000/login|POST|just login with user and password|
|127.0.0.1:8000/login/refresh|POST|refresh token|






    
