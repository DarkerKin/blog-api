import express from 'express';
import router from './routes/blogRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
const app = express();
const PORT =  process.env.PORT || 3000;


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

if(process.env.NODE_ENV === "development"){
    const morganModule = await import('morgan');
    const morgan = morganModule.default;
    app.use(morgan('tiny'))
}
app.use(express.json());

const routes = router;

app.use("/api/blogs/",routes);
 
app.use("/api/categories/", categoryRouter)

app.listen(PORT,() => console.log(`server is running on port ${PORT}`));

