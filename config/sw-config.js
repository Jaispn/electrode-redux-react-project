module.exports = {
  cache: {
    cacheId: "electrode-redux-react-project",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-redux-react-project",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
