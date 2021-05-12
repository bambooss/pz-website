module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      prependData: `
        @import "./styles/_variables.scss";
        @import "./styles/_fonts.scss";
      `
    };
  }
  return defaultConfig;
};
