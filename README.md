# Todo List API
This is a simple Todo list API built with Express. It provides CRUD endpoints for managing a list of Todos.

## Getting Started

To get started, do the following:

1. Clone this repository.
2. Install the necessary dependencies by running `npm install`.
3. Run the project by running `npm start`.

## Documentation
The project endpoints documentation could be found after you run the project in http://localhost:8000/api-docs/

## Folder structure

This project has the following folders:

-  `tsconfig.json`: This file is used to configure the TypeScript compiler. It specifies options such as the target ECMAScript version, module format, source and output directories, and more.

- `package.json`: This file is used to define the metadata and dependencies of the Node.js project. It includes information such as the project name, version, description, author, license, and scripts to run. It also lists the required Node.js packages and their versions.

- `src/`: This folder contains the source code for the project. It is often structured into subfolders that group related code together.

    - `controllers/`: This subfolder typically contains the controller files, which handle incoming requests and control the flow of data to and from the model and the view.

    - `model`: This subfolder typically contains the model files, which represent the data and business logic of the application.

    - routes: This subfolder typically contains the route files, which define the endpoints of the API and their corresponding controller functions.

    - `app.ts`: This file is the entry point of the application. It typically sets up the server, middleware, and routes, and starts listening for incoming requests. It may also include other top-level application logic.
 
 - `docs/`: This folder contains the documentation of the code.
    - `swaggerDef.yaml`: This file that contains the definition of an API using the OpenAPI specification, also known as Swagger.


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.
