exports.config = {
  modules: ["eslint", "copy"],
  watch: {
    sourceDir: "src",
    compiledDir: "lib",
    javascriptDir: null
  },
  eslint: {
    options: {
      rules: {
        "global-strict": 0,
        "quotes": 0
      },
      env: {
        node: true
      }
    }
  }
}
