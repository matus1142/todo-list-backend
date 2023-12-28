## How to run project__
backend :__
1.Clone project to folder__
  backend   : git clone https://github.com/matus1142/todo-list-backend.git__
  frontend  : git clone https://github.com/matus1142/todo-list-frontend.git__
2.Install library__
  backend   : cd todo-list-backend__
              run "npm install" in terminal__
  frontend  : cd todo-list-frontend__
              run "npm install" in terminal__
3.Run program__
  backend  :  cd todo-list-backend__
              run "npm run start" in terminal__
  frontend  : cd todo-list-frontend__
              run "npm run build" in terminal__
              run "npm run start" in terminal__
__
4.Open browser to run webpage :__
  http://localhost:3000/todo__

FYI
  backend endpoint will run on http://localhost:5000/todo__
  frontend endpoint will run on http://localhost:3000/todo__
  database path : \todo-list-backend\database\db.json__
__
structure:__
  frontend  ーー＞   backend  ーー＞   database__
  NextJS    ＜ーー    NestJS  ＜ーー    JSON__    
__
I have used json to store data instead of postgresql or mongoDB__
so user can run program without installing any database.__ 
