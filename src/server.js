import express from 'express';
import morgan from 'morgan';
import router from './routes/blogRoutes.js';
const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.json());

const routes = router;

app.use("/api/blogs/",routes);
 
// app.use("/api/categories")

app.listen(PORT,() => console.log(`server is running on port ${PORT}`));

