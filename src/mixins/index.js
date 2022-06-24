import utils from "wb@/utils";

export default {
  watch: {
    "$route.name"(to) {
      utils.goAnchor("#" + to);
    },
  },
};
