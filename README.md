# API Todo List

Very simple API using Node JS with a SQL database for a To Do List project. It is intended to integrate with a React JS web application.

## Folder structure
    .
    ├── ...
    ├── controllers               # Actual implementation of routes' functions
    │   └── main-controller.js          
    ├── queries                   # SQL queries
    │   ├── create.sql        
    |   └── select.sql
    ├── routes                    # Routes definition (single route application)  
    │   └── main.js         
    ├── app.js                   
    ├── mysql.js                 # SQL Pool definition and main function (execute) to run queries with error catching  
    ├── server.js               
    ├── package.json                
    └── ...
    
## Using the API
After downloading and executing the following command

```
npm start
```

In `server.js`, the default port was chosen as 3001. There is only the main route ("/") with three possible HTTP requests:

#### GET
Returns a JSON object, e.g.:

```json
{
    "message": "Voila all the Todos",
    "quantity": 1,
    "todos": [
    {
      "id": 1,
      "task": "Organize stuff",
      "completed": false
    }
  ]
}
```

#### POST
Receives a JSON object in the body of the HTTP request containing a task to be added, e.g.:
```json
{
	"task": "Study ReactJS"
}
```

And returns the following JSON object:
```json
{
  "message": "Todo successfully inserted",
  "todo": {
    "id": 2,
    "task": "Study react",
    "completed": 0
  }
}
```

#### DELETE
Receives a JSON object in the body of the HTTP request containing a Todo id to be deleted, e.g.:
```json
{
	"id": 3
}
```

And returns the following JSON object:
```json
{
  "message": "Todo successfully removed"
}
```
