import Express from "express";
import sequelize from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";

const app = Express();

app.use(Express.json());
app.use("/auth", authRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");

    await sequelize.sync();
    console.log("Database synced");

    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  } catch {
    console.error("Unable to start server");
  }
}

startServer();
