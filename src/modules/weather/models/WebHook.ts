

import * as mongoose from "mongoose";

const webHookSchmea = new mongoose.Schema({
  city: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  webhookURL: {
    type: String,
    require: true
  }
},
  { timestamps: true }
);

export const WebHook = mongoose.model("webHook", webHookSchmea);
