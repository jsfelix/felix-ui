import{j as n}from"./jsx-runtime-2ef3df91.js";import"./index-e03f90b5.js";import{t as d}from"./chunk-ZGA76URP-2b404cd8.js";import"./_commonjsHelpers-725317a4.js";const{useParameter:_,addons:p,useEffect:A,useMemo:j}=__STORYBOOK_MODULE_PREVIEW_API__;var f=Object.defineProperty,g=(e,t)=>{for(var r in t)f(e,r,{get:t[r],enumerable:!0})},v={};g(v,{initializeThemeState:()=>T,pluckThemeFromContext:()=>E,useThemeParameters:()=>l});var m="themes",R=`storybook/${m}}`,x="theme",S={},y={REGISTER_THEMES:`${R}/REGISTER_THEMES`};function E({globals:e}){return e[x]||""}function l(){return _(m,S)}function T(e,t){p.getChannel().emit(y.REGISTER_THEMES,{defaultTheme:t,themes:e})}var D="html",b="data-theme",k=({themes:e,defaultTheme:t,parentSelector:r=D,attributeName:a=b})=>(T(Object.keys(e),t),(c,u)=>{let{themeOverride:o}=l(),s=E(u);return A(()=>{let i=document.querySelector(r),h=o||s||t;i&&i.setAttribute(a,e[h])},[o,s,r,a]),c()});const O=[k({themes:{light:"light",dark:"dark"},defaultTheme:"dark",attributeName:"data-mode"}),e=>n.jsx("div",{className:"px-6 py-12 w-full flex items-center justify-center bg-white dark:bg-neutral-900",children:n.jsx(e,{className:"h-full"})})],N={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Getting started",["Overview","Installation"],"Tokens","Inputs",["Button"],"Typography",["Text","Heading","List"],"Data Display",["Avatar"],"Surfaces",["Box"],"Navigation",["Avatar"]]}},docs:{theme:d.dark,decorators:O}}};export{O as decorators,N as default};