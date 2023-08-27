import express from "express";
import bookRoutes from "./routes/api";
import sequelize from './db';
const app = express();
app.use(express.json());
app.use('/api', bookRoutes);
app.get("/hello", ()=>{
  console.log("hello get");
})

const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});