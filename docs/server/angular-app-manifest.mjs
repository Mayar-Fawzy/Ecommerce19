
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Ecommerce19/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Ecommerce19"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5925, hash: 'a88ffeb5e3f64745e4c7c90de3c6bc10c96eb0ea0842e222e357ae78df01cf3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1085, hash: 'bd97bdc0f7a40237c5a4f0945bbe1161b254f4e875a20d46f8c6a95e25e91001', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6085, hash: '7e791426b00ff814209ca8ccc5650db9528693d9572194cf823ac5f2f1cc4ee5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
