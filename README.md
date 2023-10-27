WebPd compiler web integration example
========================================

Minimalist example **to compile and run** a patch inside a web browser. 

The patch compiled is in `public/patches/my-patch.pd`.
It uses abstractions and sound files so we can test these features too.

→ **Building** : `npx rollup --config rollup.mjs`

→ **Run the server locally** : `npx http-server public/`

→ **Live demo** : [https://sebpiq.github.io/WebPd_example-compiler-browser/](https://sebpiq.github.io/WebPd_example-compiler-browser/)