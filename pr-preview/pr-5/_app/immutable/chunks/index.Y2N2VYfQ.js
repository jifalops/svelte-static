var a=Object.defineProperty;var d=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>d(t,typeof e!="symbol"?e+"":e,o);import{b as r}from"./paths.DJ37Cq5D.js";class f{}class h extends f{async loadAd(e,o,R){return e.classList.add("block","bg-neutral-500","rounded-lg","overflow-hidden"),e.innerHTML=`
      <div class="flex items-center justify-center h-full">
        <span>Ad Placeholder ${e.clientWidth}x${e.clientHeight}</span>
      </div>
    `,Promise.resolve()}}class u{constructor(e,o){s(this,"advertising");s(this,"telemetry");this.advertising=e,this.telemetry=o}}const l="production",b=l==="production",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname.includes(".local"),w="https://dummyjson.com",A="",E="",n=class n{constructor(e){s(this,"assert",console.assert.bind(console));s(this,"error",console.error.bind(console));s(this,"warn",console.warn.bind(console));s(this,"info",console.info.bind(console));s(this,"debug",console.debug.bind(console));s(this,"trace",console.log.bind(console));s(this,"level",n.INFO);e!==void 0&&(this.level=e),this.setLevel(this.level)}setLevel(e){this.level=e,e>=n.ASSERT?this.assert=console.assert.bind(console):this.assert=function(){},e>=n.ERROR?this.error=console.error.bind(console):this.error=function(){},e>=n.WARN?this.warn=console.warn.bind(console):this.warn=function(){},e>=n.INFO?this.info=console.info.bind(console):this.info=function(){},e>=n.DEBUG?this.debug=console.debug.bind(console):this.debug=function(){},e>=n.TRACE?this.trace=console.log.bind(console):this.trace=function(){}}};s(n,"ASSERT",1),s(n,"ERROR",2),s(n,"WARN",3),s(n,"INFO",4),s(n,"DEBUG",5),s(n,"TRACE",6);let c=n;class I{}class g extends I{pageView(e){i.trace("Telemetry:","page_view",e)}event(e,o){i.trace("Telemetry:","event",e,o)}timing(e,o){i.trace("Telemetry:","timing_complete",e,o)}}const p=performance.now(),i=new c(c.INFO);i.debug(p,"Initializing...");i.debug("Config:",{BUILD_MODE:l,API_URL:w,IS_PRODUCTION_BUILD:b,IS_LOCAL_ENVIRONMENT:m,GA_MEASUREMENT_ID:A,ADSENSE_CLIENT_ID:E});const T=new u(new h,new g);i.info(performance.now(),r?`Initialized at ${r}.`:"Initialized.");export{w as A,T as a};
