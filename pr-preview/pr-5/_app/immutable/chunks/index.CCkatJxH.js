var a=Object.defineProperty;var d=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s=(t,e,n)=>d(t,typeof e!="symbol"?e+"":e,n);import{b as r}from"./paths.tHnTGLkT.js";class f{}class h extends f{async loadAd(e,n,R){return e.classList.add("block","bg-neutral-500","rounded-lg","overflow-hidden"),e.innerHTML=`
      <div class="flex items-center justify-center h-full">
        <span>Ad Placeholder ${e.offsetWidth}x${e.offsetHeight}</span>
      </div>
    `,Promise.resolve()}}class u{constructor(e,n){s(this,"advertising");s(this,"telemetry");this.advertising=e,this.telemetry=n}}const l="production",b=l==="production",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname.includes(".local"),w="https://dummyjson.com",A="",E="",o=class o{constructor(e){s(this,"assert",console.assert.bind(console));s(this,"error",console.error.bind(console));s(this,"warn",console.warn.bind(console));s(this,"info",console.info.bind(console));s(this,"debug",console.debug.bind(console));s(this,"trace",console.log.bind(console));s(this,"level",o.INFO);e!==void 0&&(this.level=e),this.setLevel(this.level)}setLevel(e){this.level=e,e>=o.ASSERT?this.assert=console.assert.bind(console):this.assert=function(){},e>=o.ERROR?this.error=console.error.bind(console):this.error=function(){},e>=o.WARN?this.warn=console.warn.bind(console):this.warn=function(){},e>=o.INFO?this.info=console.info.bind(console):this.info=function(){},e>=o.DEBUG?this.debug=console.debug.bind(console):this.debug=function(){},e>=o.TRACE?this.trace=console.log.bind(console):this.trace=function(){}}};s(o,"ASSERT",1),s(o,"ERROR",2),s(o,"WARN",3),s(o,"INFO",4),s(o,"DEBUG",5),s(o,"TRACE",6);let c=o;class I{}class g extends I{pageView(e){i.trace("Telemetry:","page_view",e)}event(e,n){i.trace("Telemetry:","event",e,n)}timing(e,n){i.trace("Telemetry:","timing_complete",e,n)}}const p=performance.now(),i=new c(c.INFO);i.debug(p,"Initializing...");i.debug("Config:",{BUILD_MODE:l,API_URL:w,IS_PRODUCTION_BUILD:b,IS_LOCAL_ENVIRONMENT:m,GA_MEASUREMENT_ID:A,ADSENSE_CLIENT_ID:E});const T=new u(new h,new g);i.info(performance.now(),r?`Initialized at ${r}.`:"Initialized.");export{w as A,T as a};
