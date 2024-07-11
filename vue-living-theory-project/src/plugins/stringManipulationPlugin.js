export default {
  install(app /* options = {} */) {

    // biznesowy powód do stosowania pluginów razem z global properties
    app.config.globalProperties.$globalEmit = {
      emit: () => {},
      on: () => {}
    }

    app.config.globalProperties.$textTransform = {
      toUpper(value) {
        if (value && typeof value === "string") {
          return value.toUpperCase();
        }
      },
      toLower(value) {
        if (value && typeof value === "string") {
          return value.toLowerCase();
        }
      },
    };
    app.provide("textTransform", app.config.globalProperties.$textTransform);
  },
};
