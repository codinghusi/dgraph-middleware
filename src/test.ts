import * as fs from 'fs';
import * as express from 'express';
const DgraphMiddleware: any = null;

const api = new DgraphMiddleware({ endpoint: 'http://localhost:8080' });

const schema = fs.readFileSync('../res/modified.graphql', { encoding: 'utf-8' });

api.modifySchema(schema, { doUpdateSchema: true });

const app = express();
app.use(api.express());
app.listen(5000, () => console.log("middleware listening"));