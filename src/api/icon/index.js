import { mergeExport } from "../utilsApi.js";
const vueFiles = require.context("./src", false, /\.js$/);
export default mergeExport(vueFiles);
