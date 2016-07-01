var stealTools = require("steal-tools");
stealTools.export({
  system: {
    main: "myhub/repos/repos",
    config: __dirname+"/package.json!npm"
  },
  options: {
    verbose: true
  },
  outputs: {
    "+amd": {},
    "+global-js": {
        exports: {
            "myhub/repos/repos":"repos",
            "jquery": "jQuery"
        },
        dest: __dirname+"/dist/global/repos.js"
    }
  }
});
