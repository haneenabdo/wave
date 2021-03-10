(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{314:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},315:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},316:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(315),a=r(317);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},317:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},355:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-altair-6b648257bc043077af771b8bbdf91735.png"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(314)),i=r(316),c={title:"Plot / Altair",keywords:["altair","plot","vega"]},l={unversionedId:"examples/plot-altair",id:"examples/plot-altair",isDocsHomePage:!1,title:"Plot / Altair",description:"Use Altair to create plot specifications for the Vega card.",source:"@site/docs/examples/plot-altair.md",slug:"/examples/plot-altair",permalink:"/wave/docs/examples/plot-altair",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-altair.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Vega-lite / Flex",permalink:"/wave/docs/examples/plot-vegalite-flex"},next:{title:"Plot / Bokeh",permalink:"/wave/docs/examples/plot-bokeh"}},s=[],p={rightToc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use Altair to create plot specifications for the Vega card."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(355).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import altair\nfrom vega_datasets import data\nfrom h2o_wave import site, ui\n\nspec = altair.Chart(data.cars()).mark_circle(size=60).encode(\n    x='Horsepower',\n    y='Miles_per_Gallon',\n    color='Origin',\n    tooltip=['Name', 'Origin', 'Horsepower', 'Miles_per_Gallon']\n).properties(width='container', height='container').interactive().to_json()\n\npage = site['/demo']\n\npage['example'] = ui.vega_card(\n    box='1 1 4 5',\n    title='Altair Example',\n    specification=spec,\n)\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#altair")},"altair")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#vega")},"vega")))}u.isMDXComponent=!0}}]);