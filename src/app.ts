import express, { Express } from 'express';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const app: Express = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/todos', routes);

// Serve Swagger UI
const swaggerDocument = YAML.load('./docs/swaggerDef.yaml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});