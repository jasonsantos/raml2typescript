const raml2obj = require("raml2obj");
const nunjucks = require("nunjucks");
const package = require("./package.json");

const indent = (n = 0) => "  ".repeat(n);

function render(source, config, options) {
  config = config || {};
  config.indent = config.indent || indent;
  config.raml2TypescriptVersion = package.version;
  return raml2obj.parse(source).then(ramlObj => {
    ramlObj.config = config;
    ramlObj.isNamedType = function(type) {
      if (typeof type === "object") {
        return ramlObj.types && ramlObj.types[type.name];
      }
      return type && type.indexOf("{") === -1 && type.indexOf("<") === -1;
    };
    //console.log("const raml = ", JSON.stringify(ramlObj, null, 2));
    return nunjucks.configure("templates").render("type.nunjucks", ramlObj);
  });
}

module.exports = {
  render
};

if (require.main === module) {
  console.error(
    "This script is meant to be used as a library. You probably want to run bin/raml2typescript if you're looking for a CLI."
  );
  process.exit(1);
}
