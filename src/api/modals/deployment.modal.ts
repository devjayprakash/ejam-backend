import { Schema, model } from "mongoose";

export interface Deployment {
  name: string;
  deployedAt: Date;
  url: string;
  versions: Array<String>;
}

let DeploymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  deployedAt: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: true,
  },
  versions: {
    type: [
      {
        type: String,
        unique: true,
      },
    ],
    default: [],
  },
});

let DeploymentModel = model<Deployment>("deployment", DeploymentSchema);

export default DeploymentModel;
