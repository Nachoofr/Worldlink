import Express from "express";
import sequelize from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors"

const app = Express();
app.use(cors({

    origin: "http://localhost:5173",

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"]

}));

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
