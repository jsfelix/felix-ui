import{M as s,b as n}from"./chunk-HLWAVYOI-222db411.js";import"./index-46948b3d.js";import{S as l}from"./SubTitle-fb126876.js";import{j as e}from"./jsx-runtime-2ef3df91.js";import{u as a}from"./index-e8c3912b.js";import"./iframe-263fdabc.js";import"../sb-preview/runtime.js";import"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";import"./react-18-c8fddc15.js";import"./index-1fb2ecf4.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-f889f612.js";import"./index-356e4a49.js";function r(o){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Getting started/Installation"}),`
`,e.jsx(t.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(t.p,{children:"Learn how to install and use Felix UI in your app."}),`
`,e.jsx(t.h2,{id:"install-package",children:"Install package"}),`
`,e.jsx(t.p,{children:"To install Felix UI, run one of the following commands:"}),`
`,e.jsx(n,{language:"bash",dark:!0,code:`
# npm
npm install @felix-ui/react
`}),`
`,e.jsx(n,{language:"bash",dark:!0,code:`
# yarn
yarn add @felix-ui/react
`}),`
`,e.jsx(n,{language:"bash",dark:!0,code:`
# pnpm
pnpm add @felix-ui/react
`}),`
`,e.jsx(t.h2,{id:"import-global-style",children:"Import global style"}),`
`,e.jsxs(t.p,{children:["You need to add ",e.jsx(t.code,{children:"global.css"}),` style into your application. If you are using
webpack and CSS, CSS Modules or Saas, import global.css file into your CSS
file:`]}),`
`,e.jsx(n,{language:"css",dark:!0,code:`
@import "@felix-ui/react/dist/global.css";
// your CSS content here
`}),`
`,e.jsx(t.p,{children:`If you are using Vite or Next.js framework, just import CSS directly into
your main JSX/TSX file:`}),`
`,e.jsx(n,{language:"tsx",dark:!0,code:'import "@felix-ui/react/dist/global.css"'}),`
`,e.jsx(t.p,{children:"For other frameworks, see the documentation about how to import CSS."}),`
`,e.jsx(l,{children:"Use TailwindCSS"}),`
`,e.jsx(t.p,{children:`It's no required to use TailwindCSS in your application, but if you want
to use it, you need to extend the default theme configuration of Felix UI into
your Tailwind configuration file.`}),`
`,e.jsxs(t.p,{children:["To do this, change ",e.jsx(t.code,{children:"tailwindcss.config.ts"})," with the follow content:"]}),`
`,e.jsx(n,{language:"ts",dark:!0,type:"code",code:`import { tailwindConfig } from '@felix-ui/react'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: tailwindConfig.theme,
  },
}
`}),`
`,e.jsx(t.p,{children:"To override all default configuration (recommended):"}),`
`,e.jsx(n,{language:"ts",dark:!0,type:"code",code:`import { tailwindConfig } from '@felix-ui/react'

export default {
  content: ['./src/**/*.tsx'],
  theme: tailwindConfig.theme,
}
`})]})}function d(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const i={title:"Getting started/Installation",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:d};const M=["__page"];export{M as __namedExportsOrder,c as __page,i as default};
