import utils from "wb@/utils";

export function mergeExport(vueFiles) {
  let obj = {};
  Object.values(utils.readFile(vueFiles)).map((item) => {
    obj = { ...obj, ...item };
  });
  return obj;
}
