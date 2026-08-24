import{t as e}from"./rolldown-runtime-BX80bFGj.js";import{n as t,t as n}from"./runtime-C5IMH8ud.js";e((()=>{t(),n({root:document.getElementById(`cell-1`),expanded:[],variables:[]},{id:1,body:function(e){return new e(window.location.search).get(`controls`)===`2`},inputs:[`URLSearchParams`],outputs:void 0,output:`controlsEnabled`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6173`),expanded:[],variables:[]},{id:6173,body:function(e,t,n,r){return e?t`
      <div class="onboarding-control">

        <div class="chunk-control">
          <span class="control-label">Show chart</span>

          <div class="chunk-slider">
            <span>All at once</span>
            ${n}
            <span>Bit by bit</span>
          </div>
        </div>

        <div class="caption-control">
          <span class="control-label">Show captions</span>
          ${r}
        </div>

      </div>
    `:t`<div style="height: 40px;"></div>`},inputs:[`controlsEnabled`,`html`,`viewof$chunking`,`viewof$captions`],outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!0,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1350`),expanded:[],variables:[]},{id:1350,body:async function(e,t,n,r,i,a,o,s,c,l,u,d){let f=await e(new URL(`data:text/csv;base64,bWV0aG9kLGFnZV9jYXRlZ29yeSxjb3VudCxwZXJjZW50YWdlDQpSYWlsLDE24oCTMjQsNzc5MTcsMzEuNDcNCkJ1cywxNuKAkzI0LDU1MzcwLDIyLjM2DQpDYXIsMTbigJMyNCw2ODMwMCwyNy41OQ0KQmljeWNsZSwxNuKAkzI0LDEwODA0LDQuMzYNCldhbGssMTbigJMyNCwzNTE4NCwxNC4yMQ0KUmFpbCwyNeKAkzM0LDIxNzUyMiwzNC40NQ0KQnVzLDI14oCTMzQsODg3OTQsMTQuMDYNCkNhciwyNeKAkzM0LDIwNTU5OSwzMi41Ng0KQmljeWNsZSwyNeKAkzM0LDQ1MjExLDcuMTYNCldhbGssMjXigJMzNCw3NDM2OCwxMS43OA0KUmFpbCwzNeKAkzQ5LDIyNzY5MiwyNy4wNQ0KQnVzLDM14oCTNDksMTIzNzc1LDE0LjcwDQpDYXIsMzXigJM0OSwzNTE2NjIsNDEuNzcNCkJpY3ljbGUsMzXigJM0OSw0Njg1NSw1LjU3DQpXYWxrLDM14oCTNDksOTE4NDksMTAuOTENClJhaWwsNTDigJM2NCwxMjQxODcsMjAuMTcNCkJ1cyw1MOKAkzY0LDEwNDI3NSwxNi45Mw0KQ2FyLDUw4oCTNjQsMjk0NDM0LDQ3LjgxDQpCaWN5Y2xlLDUw4oCTNjQsMjQyMjksMy45Mw0KV2Fsayw1MOKAkzY0LDY4NzA4LDExLjE2DQpSYWlsLDY1KywxNTU5NywxOS4xMw0KQnVzLDY1KywxMzg1NiwxNi45OQ0KQ2FyLDY1Kyw0MTAwMSw1MC4yOQ0KQmljeWNsZSw2NSssMTczNCwyLjEzDQpXYWxrLDY1Kyw5MzQ0LDExLjQ2DQo=`,``+import.meta.url).href).csv({typed:!0}),p=[`16–24`,`25–34`,`35–49`,`50–64`,`65+`],m=[`Bicycle`,`Walk`,`Bus`,`Car`,`Rail`],h=t[n]??[],g=Number(n)===0,_=g?0:h.length,v=g?0:Math.min(Math.max(Number(r),0),_),y=g?h.flat():h.slice(0,v).flat(),b=new Set(y),x=b.has(`title`),S=b.has(`subtitle`),C=b.has(`x-axis-label`),w=b.has(`y-axis-label`),T=b.has(`x-axis`),E=b.has(`y-axis`),D=i[n]??[],O=v===0?null:D[v-1],k=O?O():null,A=k?.textContent?.trim()??``,j=a.scale({color:{type:`categorical`,domain:m}}),M=new Map(m.map(e=>[e,j.apply(e)])),N=m.filter((e,t)=>b.has(`bar-group-${t+1}`));N.length;let P=[a.dot(f,{fx:`age_category`,x:`method`,y:`percentage`,fill:`method`,r:0,opacity:0}),...E?[a.axisY({label:null,fontSize:16,interval:10,tickFormat:e=>`${e}%`}),a.gridY({interval:10})]:[],...N.map(e=>a.barY(f.filter(t=>t.method===e),{fx:`age_category`,x:`method`,y:`percentage`,fill:`method`,insetLeft:.5,insetRight:.5})),...T?[a.axisFx({anchor:`bottom`,label:null,fontSize:16})]:[],...C?[a.axisFx({anchor:`bottom`,ticks:[],label:`Age group`,labelArrow:`none`,labelAnchor:`center`,labelOffset:48,fontSize:16})]:[],...w?[a.axisY({anchor:`left`,ticks:[],label:`Percentage of commuters`,labelArrow:`none`,labelAnchor:`center`,labelOffset:75,fontSize:16})]:[],a.frame({anchor:`left`,facetAnchor:`left`,strokeWidth:2}),a.frame({anchor:`bottom`,strokeWidth:2})],F=N.length>0?a.legend({color:{domain:N,range:N.map(e=>M.get(e))},legend:`swatches`,swatchSize:18,style:{margin:`0px`,fontSize:`inherit`,minHeight:`33px`,gap:`12px`}}):null,I=a.plot({width:750,height:380,marginTop:30,marginRight:15,marginBottom:60,marginLeft:75,insetLeft:16,insetRight:16,fx:{domain:p,axis:null,label:null,padding:0},x:{domain:m,axis:null,padding:.08},y:{domain:[0,55],axis:null,label:null,grid:!1,zero:!0},color:{domain:m,legend:!1},marks:P}),L=null;if(A){L=o`
    <button
      class="tool-btn"
      title="Read out text"
    >
      <img src=${s}>
    </button>
  `;let e=()=>{window.speechSynthesis.cancel();let e=new c(A),t=window.speechSynthesis.getVoices(),n=t.find(e=>e.name.includes(`Google UK English Female`))||t.find(e=>e.lang===`en-GB`)||t.find(e=>e.lang.startsWith(`en`));n&&(e.voice=n),e.rate=.85,e.pitch=1,window.speechSynthesis.speak(e)};L.addEventListener(`click`,e),l.then(()=>{L.removeEventListener(`click`,e),window.speechSynthesis.cancel()})}return o`

        <div class="visualisation">

          <div class="chart-title ${x?``:`temporarily-hidden`}">
            ${`Method of travel to work by age group`}
          </div>

          <div class="chart-subtitle ${S?``:`temporarily-hidden`}">
            ${`London residents, Census 2021`}.
          </div>

          <div class="chart-legend">
            ${F??o`<span></span>`}
          </div>

          ${I}
        </div>

          <div class="step-container">
            <div class="step-buttons">

              <div class="arrow-buttons">
                ${_>0?u:o``}
              </div>

              <div class="step-status">
                ${_>0?`Step ${v} of ${_}`:o``}
              </div>

            </div>

    ${k&&d?o`
            <div class="step-text-container">
              <div class="step-text">
                ${k}
              </div>

              <div class="speak-button">
                ${L}
              </div>
            </div>
          `:o`
              <div class="step-text-placeholder"></div>
            `}

        </div>
      `},inputs:[`FileAttachment`,`revealSequences`,`chunking`,`step01`,`stepCaptions`,`Plot`,`html`,`readAloud`,`SpeechSynthesisUtterance`,`invalidation`,`viewof$step01`,`captions`],outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!0,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1288`),expanded:[],variables:[]},{id:1288,body:function(e,t){return e.range([0,4],{step:1,value:t?2:0})},inputs:[`Inputs`,`controlsEnabled`],outputs:void 0,output:`viewof$chunking`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-1343`),expanded:[],variables:[]},{id:1343,body:function(e,t,n,r,i){let a=e.button([[t`<img src=${n}>`,e=>Math.max(0,e-1)],[t`<img src=${r}>`,e=>Math.min(i,e+1)]],{value:0,label:null}),o=()=>{let[e,t]=a.querySelectorAll(`button`);e.disabled=a.value<=0,t.disabled=a.value>=i};return o(),a.addEventListener(`input`,o),a},inputs:[`Inputs`,`html`,`arrowL`,`arrowR`,`maximumStep`],outputs:void 0,output:`viewof$step01`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-1504`),expanded:[],variables:[]},{id:1504,body:function(e){return e.toggle({value:!1})},inputs:[`Inputs`],outputs:void 0,output:`viewof$captions`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-1507`),expanded:[],variables:[]},{id:1507,body:function(e){return e(new URL(``+new URL(`read-aloud-BLiu0aRO.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`readAloud`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6194`),expanded:[],variables:[]},{id:6194,body:function(e){return e(new URL(``+new URL(`arrowR-CiRANwjL.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`arrowR`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6196`),expanded:[],variables:[]},{id:6196,body:function(e){return e(new URL(``+new URL(`arrowL-Cptm19nB.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`arrowL`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1347`),expanded:[],variables:[]},{id:1347,body:function(e){return{title:{caption:()=>e`
      <span>
        This chart shows <b>methods of travel to work</b>
        for different age groups.
      </span>
    `,speech:`This chart shows methods of travel to work for different age groups.`},subtitle:{caption:()=>e`
      <span>
        The data covers <b>London residents</b> and
        comes from the <b>2021 Census</b>.
      </span>
    `,speech:`The data covers London residents and comes from the 2021 Census.`},"x-axis-label":{caption:()=>e`
      <span>
        The bottom of the chart is labelled
        <b>Age group</b>.
      </span>
    `,speech:`The bottom of the chart is labelled Age group.`},"y-axis-label":{caption:()=>e`
      <span>
        The left side of the chart is labelled
        <b>Percentage of commuters</b>.
      </span>
    `,speech:`The left side of the chart is labelled Percentage of commuters.`},"x-axis":{caption:()=>e`
      <span>
        The <b>bottom axis</b> divides residents into
        five <b>age groups</b>.
      </span>
    `,speech:`The bottom axis divides residents into five age groups.`},"y-axis":{caption:()=>e`
      <span>
        The <b>left axis</b> shows the percentage of
        commuters using each travel method.
      </span>
    `,speech:`The left axis shows the percentage of commuters using each travel method.`},"bar-group-1":{caption:()=>e`
      <span>
        The <b>bicycle bars</b> show the percentage
        travelling to work by bicycle.
      </span>
    `,speech:`The bicycle bars show the percentage travelling to work by bicycle.`},"bar-group-2":{caption:()=>e`
      <span>
        The <b>walking bars</b> show the percentage
        travelling to work on foot.
      </span>
    `,speech:`The walking bars show the percentage travelling to work on foot.`},"bar-group-3":{caption:()=>e`
      <span>
        The <b>bus bars</b> show the percentage
        travelling to work by bus.
      </span>
    `,speech:`The bus bars show the percentage travelling to work by bus.`},"bar-group-4":{caption:()=>e`
      <span>
        The <b>car bars</b> show the percentage
        travelling to work by car.
      </span>
    `,speech:`The car bars show the percentage travelling to work by car.`},"bar-group-5":{caption:()=>e`
      <span>
        The <b>rail bars</b> complete the chart,
        showing the percentage travelling by rail.
      </span>
    `,speech:`The rail bars complete the chart, showing the percentage travelling by rail.`}}},inputs:[`html`],outputs:void 0,output:`componentInfo`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1305`),expanded:[],variables:[]},{id:1305,body:function(e,t){let n=e.querySelector(`input[type="range"]`),r=()=>{let e=+n.min||0,t=+n.max||100,r=(+n.value-e)/(t-e)*100;n.style.setProperty(`--progress`,`${r}%`),n.style.setProperty(`--p`,Math.random())};r(),n.addEventListener(`input`,r),t.then(()=>n.removeEventListener(`input`,r))},inputs:[`viewof$chunking`,`invalidation`],outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1294`),expanded:[],variables:[]},{id:1294,body:function(e,t,n){let r=t;r.value=0,r.dispatchEvent(new n(`input`,{bubbles:!0}))},inputs:[`chunking`,`viewof$step01`,`Event`],outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1332`),expanded:[],variables:[]},{id:1332,body:function(){return[`title`,`subtitle`,`x-axis-label`,`y-axis-label`,`x-axis`,`y-axis`,`bar-group-1`,`bar-group-2`,`bar-group-3`,`bar-group-4`,`bar-group-5`]},inputs:[],outputs:void 0,output:`allRevealComponents`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1520`),expanded:[],variables:[]},{id:1520,body:function(e){return{0:[()=>e`
      <span>
        This chart compares <b>travel to work</b> across different
        <b>age groups</b> in London.
      </span>
    `],1:[()=>e`
      <span>
        This chart shows how London residents travelled to work in
        <b>2021</b>.
      </span>
    `,()=>e`
      <span>
        The bottom axis shows <b>age groups</b>. The left axis shows the
        <b>percentage of commuters</b>.
      </span>
    `,()=>e`
      <span>
        The bars compare five different <b>methods of travel</b>.
      </span>
    `],2:[()=>e`
      <span>
        This chart shows how London residents travelled to work in
        <b>2021</b>.
      </span>
    `,()=>e`
      <span>
        The bottom axis shows five <b>age groups</b>.
      </span>
    `,()=>e`
      <span>
        The left side shows the <b>percentage of commuters</b>.
      </span>
    `,()=>e`
      <span>
        The first bars show the percentage travelling by <b>bicycle</b> and
        <b>walking</b>.
      </span>
    `,()=>e`
      <span>
        The remaining bars show the percentage travelling by <b>bus</b>,
        <b>car</b> and <b>rail</b>.
      </span>
    `],3:[()=>e`
      <span>
        This chart shows how London residents travelled to work in
        <b>2021</b>.
      </span>
    `,()=>e`
      <span>
        The bottom of the chart shows the <b>age group</b>.
      </span>
    `,()=>e`
      <span>
        The left side shows the <b>percentage of commuters</b>.
      </span>
    `,()=>e`
      <span>
        The axes show the percentage of commuters for five age groups.
      </span>
    `,()=>e`
      <span>
        The blue bars show the percentage travelling to work by <b>bicycle</b>.
      </span>
    `,()=>e`
      <span>
        The yellow bars show the percentage travelling to work by <b>walking</b>.
      </span>
    `,()=>e`
      <span>
        The red bars show the percentage travelling to work by <b>bus</b>.
      </span>
    `,()=>e`
      <span>
        The teal bars show the percentage travelling to work by <b>car</b>.
      </span>
    `,()=>e`
      <span>
        The green bars show the percentage travelling to work by <b>rail</b>.
      </span>
    `],4:[()=>e`
      <span>
        This chart shows <b>methods of travel to work</b>.
      </span>
    `,()=>e`
      <span>
        The data is about <b>London residents</b> and comes from the
        <b>2021 Census</b>.
      </span>
    `,()=>e`
      <span>
        The bottom of the chart is labelled <b>Age group</b>.
      </span>
    `,()=>e`
      <span>
        The left side is labelled <b>Percentage of commuters</b>.
      </span>
    `,()=>e`
      <span>
        The bottom axis shows five <b>age groups</b>.
      </span>
    `,()=>e`
      <span>
        The left axis shows the <b>percentage</b> using each method.
      </span>
    `,()=>e`
      <span>
        The blue bars show the percentage travelling to work by <b>bicycle</b>.
      </span>
    `,()=>e`
      <span>
        The yellow bars show the percentage travelling to work by <b>walking</b>.
      </span>
    `,()=>e`
      <span>
        The red bars show the percentage travelling to work by <b>bus</b>.
      </span>
    `,()=>e`
      <span>
        The teal bars show the percentage travelling to work by <b>car</b>.
      </span>
    `,()=>e`
      <span>
        The green bars show the percentage travelling to work by <b>rail</b>.
      </span>
    `]}},inputs:[`html`],outputs:void 0,output:`stepCaptions`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1335`),expanded:[],variables:[]},{id:1335,body:function(e){return{0:[e],1:[[`title`,`subtitle`],[`x-axis-label`,`y-axis-label`,`x-axis`,`y-axis`],[`bar-group-1`,`bar-group-2`,`bar-group-3`,`bar-group-4`,`bar-group-5`]],2:[[`title`,`subtitle`],[`x-axis-label`,`x-axis`],[`y-axis-label`,`y-axis`],[`bar-group-1`,`bar-group-2`],[`bar-group-3`,`bar-group-4`,`bar-group-5`]],3:[[`title`,`subtitle`],[`x-axis-label`],[`y-axis-label`],[`x-axis`,`y-axis`],[`bar-group-1`],[`bar-group-2`],[`bar-group-3`],[`bar-group-4`],[`bar-group-5`]],4:[[`title`],[`subtitle`],[`x-axis-label`],[`y-axis-label`],[`x-axis`],[`y-axis`],[`bar-group-1`],[`bar-group-2`],[`bar-group-3`],[`bar-group-4`],[`bar-group-5`]]}},inputs:[`allRevealComponents`],outputs:void 0,output:`revealSequences`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1338`),expanded:[],variables:[]},{id:1338,body:function(e,t){return e[t].length},inputs:[`revealSequences`,`chunking`],outputs:void 0,output:`maximumStep`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1})}))();