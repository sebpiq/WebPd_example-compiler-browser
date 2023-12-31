var ASSEMBLYSCRIPT_VERSION = "0.27.0";
var ASSEMBLYSCRIPT_IMPORTMAP = {
  "imports": {
    "assemblyscript": "https://cdn.jsdelivr.net/npm/assemblyscript@0.25.0/dist/assemblyscript.js",
    "assemblyscript/asc": "https://cdn.jsdelivr.net/npm/assemblyscript@0.25.0/dist/asc.js",
    "binaryen": "https://cdn.jsdelivr.net/npm/binaryen@111.0.0-nightly.20230111/index.js",
    "long": "https://cdn.jsdelivr.net/npm/long@5.2.0/index.js"
  }
};
if (!document.currentScript.src.includes("noinstall")) {
  let elem = document.createElement("script");
  elem.type = "importmap";
  elem.text = JSON.stringify(ASSEMBLYSCRIPT_IMPORTMAP);
  document.head.appendChild(elem);
}
if (!document.currentScript.src.includes("noshim")) {
  let elem = document.createElement("script");
  elem.async = true;
  elem.src = "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.wasm.min.js";
  document.head.appendChild(elem);
}
