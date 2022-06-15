import { load } from "js-yaml";
import toSource from "tosource";

const fileRegex = /\.ya?ml$/;

export default function() {
  return {
    name: "yaml-to-js",

    transform(src, id) {
      if (fileRegex.test(id)) {
        // src

        const transformedCode = `const data = ${toSource(load(src))}\n`;
        const result = transformedCode + "export default data";

        return {
          code: result,
          map: null, // provide source map if available
        };
      }
    },
  };
}
