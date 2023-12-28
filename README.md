## How to run project<br />
backend :<br />
1.Clone project to folder<br />
  backend   : git clone https://github.com/matus1142/todo-list-backend.git<br />
  frontend  : git clone https://github.com/matus1142/todo-list-frontend.git<br />
2.Install library<br />
  backend   : cd todo-list-backend<br />
              run "npm install" in terminal<br />
  frontend  : cd todo-list-frontend<br />
              run "npm install" in terminal<br />
3.Run program<br />
  backend  :  cd todo-list-backend<br />
              run "npm run start" in terminal<br />
  frontend  : cd todo-list-frontend<br />
              run "npm run build" in terminal<br />
              run "npm run start" in terminal<br />
<br />
4.Open browser to run webpage :<br />
  http://localhost:3000/todo<br />

FYI
  backend endpoint will run on http://localhost:5000/todo<br />
  frontend endpoint will run on http://localhost:3000/todo<br />
  database path : \todo-list-backend\database\db.json<br />
<br />
structure:<br />
  frontend  ーー＞   backend  ーー＞   database<br />
  NextJS    ＜ーー    NestJS  ＜ーー    JSON<br />    
<br />
I have used json to store data instead of postgresql or mongoDB<br />
so user can run program without installing any database.<br /> 
