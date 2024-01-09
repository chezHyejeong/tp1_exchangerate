import express from 'express';
import indexRoutes from './routes/index';
import connectToMongoDB from './database/mongoConnection';



const app = express();
const port = 3000;

connectToMongoDB();

app.use('/', indexRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});