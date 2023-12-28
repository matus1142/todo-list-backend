## How to run project
backend :
1.Clone project to folder
  backend   : git clone https://github.com/matus1142/todo-list-backend.git
  frontend  : git clone https://github.com/matus1142/todo-list-frontend.git
2.Install library
  backend   : cd todo-list-backend
              run "npm install" in terminal
  frontend  : cd todo-list-frontend
              run "npm install" in terminal
3.Run program
  backend  :  cd todo-list-backend
              run "npm run start" in terminal
  frontend  : cd todo-list-frontend
              run "npm run build" in terminal 
              run "npm run start" in terminal

4.Open browser to run webpage :
  http://localhost:3000/todo

FYI
  backend endpoint will run on http://localhost:5000/todo
  frontend endpoint will run on http://localhost:3000/todo
  database path : \todo-list-backend\database\db.json
  
structure:
  frontend  ーー＞   backend  ーー＞   database
  NextJS    ＜ーー    NestJS  ＜ーー    JSON    

I have used json to store data instead of postgresql or mongoDB
so user can run program without installing any database. 
