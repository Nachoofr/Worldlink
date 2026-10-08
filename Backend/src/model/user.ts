import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

export interface UserAttributes {
  id?: number;
  email: string;
  username: string;
  fullName: string;
  password: string;
  address: string;
  primary_phone: string;
  secondary_phone?: string;
  membership_start_date?: Date;
  expiry_date?: Date;
  valid_upto?: Date;
  first_payment?: boolean;
  has_net_tv?: boolean;
  disable?: boolean;
  grace_status?: boolean;
  latitude: string;
  longitude: string;
  network_type?: string;
  olt?: string;
  router?: string;
  router_model?: string;
  router_profile?: string;
  ipoe_mac?: string;
  user_serial?: string;
  current_bw_up?: string;
  current_bw_down?: string;
  pay_plan_id?: number;
}

export interface UserCreatioAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreatioAttributes>
  implements UserAttributes
{
  declare id?: number;

  declare email: string;

  declare username: string;

  declare fullName: string;

  declare password: string;

  declare address: string;

  declare primary_phone: string;

  declare secondary_phone: string;

  declare membership_start_date: Date;

  declare expiry_date: Date;

  declare valid_upto: Date;

  declare first_payment: boolean;

  declare has_net_tv: boolean;

  declare disable: boolean;

  declare grace_status: boolean;

  declare latitude: string;

  declare longitude: string;

  declare support_zone: string;

  declare support_zone_id: string;

  declare region_id: string;

  declare network_type: string;

  declare olt: string;

  declare router: string;

  declare router_model: string;

  declare router_profile: string;

  declare ipoe_mac: string;

  declare user_serial: string;

  declare current_bw_up: string;

  declare current_bw_down: string;

  declare pay_plan_id: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    primary_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    secondary_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    membership_start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    valid_upto: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    first_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    has_net_tv: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    disable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    grace_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    network_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    olt: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    router: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    router_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    router_profile: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    ipoe_mac: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_serial: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    current_bw_down: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    current_bw_up: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    pay_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,

    modelName: "User",
    tableName: "user_base_info",
    schema: "user_base",
  },
);

export default User;
