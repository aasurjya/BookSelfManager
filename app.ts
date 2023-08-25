import express from "express";
import bookRoutes from "./routes/api";
const app = express();
app.use(express.json());
app.use('api', bookRoutes);


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server is running" + PORT);
    
})
console.log("App is running on the port")