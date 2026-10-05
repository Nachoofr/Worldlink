import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Worldlink", "root", "", {
  dialect: "mysql",
});

export default sequelize;
