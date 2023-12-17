WebPd compiler/runner web integration example
==============================================

Minimalist example **to compile and run** a patch inside a web browser. 

The patch compiled that this compiles as an example is `docs/patches/my-patch.pd`.
That patches uses abstractions and sound files so we can test these features too.

→ **Building** : `npx rollup --config rollup.mjs`

→ **Run the server locally** : `npx http-server docs/`

→ **Live demo** : 
    - [https://sebpiq.github.io/WebPd_example-compiler-browser/build-example.html](https://sebpiq.github.io/WebPd_example-compiler-browser/build-example.html)
    - [https://sebpiq.github.io/WebPd_example-compiler-browser/run-example.html](https://sebpiq.github.io/WebPd_example-compiler-browser/run-example.html)