import{M as q,u as v,a9 as d,r as _,aa as O,ab as x,ac as M,b as T,V as B,ad as D,B as R,D as b,S as I,ae as V}from"./DUMTnwiq.js";const E=s=>s==="defer"||s===!1;function z(...s){var h;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[t,f,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=v(),P=f,w=()=>d.value,C=()=>a.isHydrating?a.payload.data[t]:a.static.data[t];e.server=e.server??!0,e.default=e.default??w,e.getCachedData=e.getCachedData??C,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??d.deep,e.dedupe=e.dedupe??"cancel";const g=e.getCachedData(t,a),m=g!=null;if(!a._asyncData[t]||!e.immediate){(h=a.payload._errors)[t]??(h[t]=d.errorValue);const o=e.deep?_:O;a._asyncData[t]={data:o(m?g:e.default()),pending:_(!m),error:x(a.payload._errors,t),status:_("idle"),_default:e.default}}const n={...a._asyncData[t]};delete n._default,n.refresh=n.execute=(o={})=>{if(a._asyncDataPromises[t]){if(E(o.dedupe??e.dedupe))return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(o._initial||a.isHydrating&&o._initial!==!1){const c=o._initial?g:e.getCachedData(t,a);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(P(a))}catch(u){i(u)}}).then(async c=>{if(l.cancelled)return a._asyncDataPromises[t];let i=c;e.transform&&(i=await e.transform(c)),e.pick&&(i=N(i,e.pick)),a.payload.data[t]=i,n.data.value=i,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return a._asyncDataPromises[t];n.error.value=R(c),n.data.value=b(e.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=l,a._asyncDataPromises[t]},n.clear=()=>H(a,t);const y=()=>n.refresh({_initial:!0}),p=e.server!==!1&&a.payload.serverRendered;{const o=I();if(o&&p&&e.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;M(()=>{i.forEach(u=>{u()}),i.splice(0,i.length)}),T(()=>i.splice(0,i.length))}p&&a.isHydrating&&(n.error.value||g!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(y):e.immediate&&y();const l=V();if(e.watch){const i=B(e.watch,()=>n.refresh());l&&D(i)}const c=a.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await n.refresh()});l&&D(c)}const j=Promise.resolve(a._asyncDataPromises[t]).then(()=>n);return Object.assign(j,n),j}async function S(s){await new Promise(t=>q(t)),await v().hooks.callHookParallel("app:data:refresh",void 0)}function H(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=b(s._asyncData[r]._default()),s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function N(s,r){const t={};for(const f of r)t[f]=s[f];return t}const Q={content_en:"v3.2.0--eFmz5HectB",content_fr:"v3.2.0--TuxjlsC1nl",articles_en:"v3.2.0--ZGoVpqtfyT",articles_fr:"v3.2.0--WuTEnWTMVN",projects_en:"v3.2.0--L266sP6Ro0",projects_fr:"v3.2.0--QJmvEMWfIo",stack:"v3.2.0--NITkdAf1ca",faq_en:"v3.2.0--qek0YuRaRL",faq_fr:"v3.2.0--5ljZw085zU"},W={content_en:"_content_content_en",content_fr:"_content_content_fr",articles_en:"_content_articles_en",articles_fr:"_content_articles_fr",projects_en:"_content_projects_en",projects_fr:"_content_projects_fr",stack:"_content_stack",faq_en:"_content_faq_en",faq_fr:"_content_faq_fr",info:"_content_info"},F={content_en:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},content_fr:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},articles_en:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},articles_fr:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},projects_en:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},projects_fr:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},stack:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",items:"json"}},faq_en:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},faq_fr:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},info:{type:"data",fields:{}}};export{F as a,Q as c,S as r,W as t,z as u};
