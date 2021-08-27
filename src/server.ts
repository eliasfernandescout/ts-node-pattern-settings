import express, { response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(5002, ()=>{
    console.log('Server Started on port 5002')
})
