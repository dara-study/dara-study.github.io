import{t as e}from"./rolldown-runtime-BX80bFGj.js";import{n as t,t as n}from"./runtime-C5IMH8ud.js";e((()=>{t(),n({root:document.getElementById(`cell-1`),expanded:[],variables:[]},{id:1,body:function(e){return new e(window.location.search).get(`controls`)===`1`},inputs:[`URLSearchParams`],outputs:void 0,output:`controlsEnabled`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6210`),expanded:[],variables:[]},{id:6210,body:function(e,t,n,r){return e?t`
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
    `:t`<div style="height: 40px;"></div>`},inputs:[`controlsEnabled`,`html`,`viewof$chunking`,`viewof$captions`],outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!0,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1350`),expanded:[],variables:[]},{id:1350,body:async function(e,t,n,r,i,a,o,s,c,l,u,d){let f=await e(new URL(`data:text/csv;base64,aW5jb21lX3F1aW50aWxlLG1ldGhvZCx0cmlwcw0KRm91cnRoIGxldmVsLEJpY3ljbGUsMjUNCkZvdXJ0aCBsZXZlbCxCdXMsMTA0DQpGb3VydGggbGV2ZWwsQ2FyLDMwMQ0KRm91cnRoIGxldmVsLFdhbGssMjcwDQpGb3VydGggbGV2ZWwsUmFpbCwxNDINCkhpZ2hlc3QgcmVhbCBpbmNvbWUgbGV2ZWwsQmljeWNsZSwyNQ0KSGlnaGVzdCByZWFsIGluY29tZSBsZXZlbCxCdXMsNjgNCkhpZ2hlc3QgcmVhbCBpbmNvbWUgbGV2ZWwsQ2FyLDMwNw0KSGlnaGVzdCByZWFsIGluY29tZSBsZXZlbCxXYWxrLDI2MA0KSGlnaGVzdCByZWFsIGluY29tZSBsZXZlbCxSYWlsLDE3Mw0KTG93ZXN0IHJlYWwgaW5jb21lIGxldmVsLEJpY3ljbGUsMTANCkxvd2VzdCByZWFsIGluY29tZSBsZXZlbCxCdXMsMTM1DQpMb3dlc3QgcmVhbCBpbmNvbWUgbGV2ZWwsQ2FyLDIyMA0KTG93ZXN0IHJlYWwgaW5jb21lIGxldmVsLFdhbGssMjg3DQpMb3dlc3QgcmVhbCBpbmNvbWUgbGV2ZWwsUmFpbCw2OQ0KU2Vjb25kIGxldmVsLEJpY3ljbGUsMTQNClNlY29uZCBsZXZlbCxCdXMsMTE1DQpTZWNvbmQgbGV2ZWwsQ2FyLDI2MQ0KU2Vjb25kIGxldmVsLFdhbGssMjg4DQpTZWNvbmQgbGV2ZWwsUmFpbCw5NA0KVGhpcmQgbGV2ZWwsQmljeWNsZSwyMA0KVGhpcmQgbGV2ZWwsQnVzLDEwNA0KVGhpcmQgbGV2ZWwsQ2FyLDMxMA0KVGhpcmQgbGV2ZWwsV2FsaywyNTANClRoaXJkIGxldmVsLFJhaWwsOTk=`,``+import.meta.url).href).csv({typed:!0}),p=[`Lowest real income level`,`Second level`,`Third level`,`Fourth level`,`Highest real income level`],m=new Map([[`Lowest real income level`,`Lowest`],[`Second level`,`Second`],[`Third level`,`Middle`],[`Fourth level`,`Fourth`],[`Highest real income level`,`Highest`]]),h=[`Bicycle`,`Rail`,`Bus`,`Car`,`Walk`],g=[`#4269d0`,`#3ca951`,`#ff725c`,`#6cc5b0`,`#efb118`],_=f.map(e=>({...e,income:m.get(e.income_quintile),method:e.method})),v=p.map(e=>m.get(e)),y=t[n]??[],b=Number(n)===0,x=b?0:y.length,S=b?0:Math.min(Math.max(Number(r),0),x),C=b?y.flat():y.slice(0,S).flat(),w=new Set(C),T=w.has(`title`),E=w.has(`subtitle`),D=w.has(`x-axis-label`),O=w.has(`y-axis-label`),k=w.has(`x-axis`),A=w.has(`y-axis`),j=i[n]??[],M=S===0?null:j[S-1],N=M?M():null,P=N?.textContent?.trim()??``,F=a.scale({color:{type:`categorical`,domain:h,range:g}}),I=new Map(h.map(e=>[e,F.apply(e)])),L=h.filter((e,t)=>w.has(`bar-group-${t+1}`));L.length;let R=[a.dot(f,{fx:`age_category`,x:`method`,y:`trips`,fill:`method`,r:0,opacity:0}),...A?[a.axisY({label:null,fontSize:16,interval:50,tickFormat:e=>e.toLocaleString()}),a.gridY({interval:50})]:[],...L.map(e=>a.barY(_.filter(t=>t.method===e),{fx:`income`,x:`method`,y:`trips`,fill:`method`,insetLeft:.5,insetRight:.5})),...k?[a.axisFx({anchor:`bottom`,label:null,fontSize:16})]:[],...D?[a.axisFx({anchor:`bottom`,ticks:[],label:`Household income level`,labelArrow:`none`,labelAnchor:`center`,labelOffset:48,fontSize:16})]:[],...O?[a.axisY({anchor:`left`,ticks:[],label:`Average trips per person per year`,labelArrow:`none`,labelAnchor:`center`,labelOffset:75,fontSize:16})]:[],a.frame({anchor:`left`,facetAnchor:`left`,strokeWidth:2}),a.frame({anchor:`bottom`,strokeWidth:2})],z=L.length>0?a.legend({color:{domain:L,range:L.map(e=>I.get(e))},legend:`swatches`,swatchSize:18,style:{margin:`0px`,fontSize:`inherit`,minHeight:`33px`,gap:`12px`}}):null,B=a.plot({width:750,height:380,marginTop:30,marginRight:15,marginBottom:60,marginLeft:75,insetLeft:16,insetRight:16,fx:{domain:v,axis:null,label:null,padding:0},x:{domain:h,axis:null,padding:.08},y:{domain:[0,350],axis:null,label:null,grid:!1,zero:!0},color:{domain:h,range:g,legend:!1},marks:R}),V=null;if(P){V=o`
    <button
      class="tool-btn"
      title="Read out text"
    >
      <img src=${s}>
    </button>
  `;let e=()=>{window.speechSynthesis.cancel();let e=new c(P),t=window.speechSynthesis.getVoices(),n=t.find(e=>e.name.includes(`Google UK English Female`))||t.find(e=>e.lang===`en-GB`)||t.find(e=>e.lang.startsWith(`en`));n&&(e.voice=n),e.rate=.85,e.pitch=1,window.speechSynthesis.speak(e)};V.addEventListener(`click`,e),l.then(()=>{V.removeEventListener(`click`,e),window.speechSynthesis.cancel()})}return o`

        <div class="visualisation">

          <div class="chart-title ${T?``:`temporarily-hidden`}">
            ${`Annual travel by household income`}
          </div>

          <div class="chart-subtitle ${E?``:`temporarily-hidden`}">
            ${`London residents, 2018–2019. Source: DfT, NTS.`}.
          </div>

          <div class="chart-legend">
            ${z??o`<span></span>`}
          </div>

          ${B}
        </div>

          <div class="step-container">
            <div class="step-buttons">

              <div class="arrow-buttons">
                ${x>0?u:o``}
              </div>

              <div class="step-status">
                ${x>0?`Step ${S} of ${x}`:o``}
              </div>

            </div>

    ${N&&d?o`
            <div class="step-text-container">
              <div class="step-text">
                ${N}
              </div>

              <div class="speak-button">
                ${V}
              </div>
            </div>
          `:o`
              <div class="step-text-placeholder"></div>
            `}

        </div>
      `},inputs:[`FileAttachment`,`revealSequences`,`chunking`,`step01`,`stepCaptions`,`Plot`,`html`,`readAloud`,`SpeechSynthesisUtterance`,`invalidation`,`viewof$step01`,`captions`],outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!0,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1288`),expanded:[],variables:[]},{id:1288,body:function(e,t){return e.range([0,4],{step:1,value:t?2:0})},inputs:[`Inputs`,`controlsEnabled`],outputs:void 0,output:`viewof$chunking`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-1343`),expanded:[],variables:[]},{id:1343,body:function(e,t,n,r,i){let a=e.button([[t`<img src=${n}>`,e=>Math.max(0,e-1)],[t`<img src=${r}>`,e=>Math.min(i,e+1)]],{value:0,label:null}),o=()=>{let[e,t]=a.querySelectorAll(`button`);e.disabled=a.value<=0,t.disabled=a.value>=i};return o(),a.addEventListener(`input`,o),a},inputs:[`Inputs`,`html`,`arrowL`,`arrowR`,`maximumStep`],outputs:void 0,output:`viewof$step01`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-1504`),expanded:[],variables:[]},{id:1504,body:function(e){return e.toggle({value:!1})},inputs:[`Inputs`],outputs:void 0,output:`viewof$captions`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-1507`),expanded:[],variables:[]},{id:1507,body:function(e){return e(new URL(``+new URL(`read-aloud-BLiu0aRO.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`readAloud`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6230`),expanded:[],variables:[]},{id:6230,body:function(e){return e(new URL(``+new URL(`arrowR-CiRANwjL.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`arrowR`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6233`),expanded:[],variables:[]},{id:6233,body:function(e){return e(new URL(``+new URL(`arrowL-Cptm19nB.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`arrowL`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1347`),expanded:[],variables:[]},{id:1347,body:function(e){return{title:{caption:()=>e`
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
        This chart compares the <b>average number of trips per person</b>
        across different <b>household income levels</b> in London.
      </span>
    `],1:[()=>e`
      <span>
        This chart shows <b>annual travel</b> by London residents
        in 2018–2019.
      </span>
    `,()=>e`
      <span>
        The bottom axis shows <b>household income levels</b>.
        The left axis shows the <b>average number of trips per person per year</b>.
      </span>
    `,()=>e`
      <span>
        The bars compare five different <b>methods of travel</b>.
      </span>
    `],2:[()=>e`
      <span>
        This chart shows <b>annual travel</b> by London residents
        in 2018–2019.
      </span>
    `,()=>e`
      <span>
        The bottom axis shows five <b>household income levels</b>,
        from lowest to highest.
      </span>
    `,()=>e`
      <span>
        The left axis shows the
        <b>average number of trips per person per year</b>.
      </span>
    `,()=>e`
      <span>
        The first bars show the average number of trips by
        <b>bicycle</b> and <b>rail</b>.
      </span>
    `,()=>e`
      <span>
        The remaining bars show the average number of trips by
        <b>bus</b>, <b>car</b> and <b>walking</b>.
      </span>
    `],3:[()=>e`
      <span>
        This chart shows <b>annual travel</b> by London residents
        in 2018–2019.
      </span>
    `,()=>e`
      <span>
        The bottom of the chart shows the
        <b>household income level</b>.
      </span>
    `,()=>e`
      <span>
        The left side shows the
        <b>average number of trips per person per year</b>.
      </span>
    `,()=>e`
      <span>
        The axes compare annual travel across five
        <b>household income levels</b>.
      </span>
    `,()=>e`
      <span>
        The blue bicycle bars show the average number of
        <b>bicycle trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The green bars show the average number of
        <b>rail trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The red bars show the average number of
        <b>bus trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The teal bars show the average number of
        <b>car trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The yellow bars show the average number of
        <b>walking trips</b> per person per year.
      </span>
    `],4:[()=>e`
      <span>
        This chart shows <b>annual travel by household income</b>.
      </span>
    `,()=>e`
      <span>
        The data is about <b>London residents</b> in 2018–2019
        and comes from the <b>National Travel Survey</b>.
      </span>
    `,()=>e`
      <span>
        The bottom of the chart is labelled
        <b>Household income level</b>.
      </span>
    `,()=>e`
      <span>
        The left side is labelled
        <b>Average trips per person per year</b>.
      </span>
    `,()=>e`
      <span>
        The bottom axis shows five <b>household income levels</b>,
        from lowest to highest.
      </span>
    `,()=>e`
      <span>
        The left axis shows the
        <b>average number of trips per person per year</b>.
      </span>
    `,()=>e`
      <span>
        The blue bicycle bars show the average number of
        <b>bicycle trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The green bars show the average number of
        <b>rail trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The red bars show the average number of
        <b>bus trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The teal bars show the average number of
        <b>car trips</b> per person per year.
      </span>
    `,()=>e`
      <span>
        The yellow bars show the average number of
        <b>walking trips</b> per person per year.
      </span>
    `]}},inputs:[`html`],outputs:void 0,output:`stepCaptions`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1335`),expanded:[],variables:[]},{id:1335,body:function(e){return{0:[e],1:[[`title`,`subtitle`],[`x-axis-label`,`y-axis-label`,`x-axis`,`y-axis`],[`bar-group-1`,`bar-group-2`,`bar-group-3`,`bar-group-4`,`bar-group-5`]],2:[[`title`,`subtitle`],[`x-axis-label`,`x-axis`],[`y-axis-label`,`y-axis`],[`bar-group-1`,`bar-group-2`],[`bar-group-3`,`bar-group-4`,`bar-group-5`]],3:[[`title`,`subtitle`],[`x-axis-label`],[`y-axis-label`],[`x-axis`,`y-axis`],[`bar-group-1`],[`bar-group-2`],[`bar-group-3`],[`bar-group-4`],[`bar-group-5`]],4:[[`title`],[`subtitle`],[`x-axis-label`],[`y-axis-label`],[`x-axis`],[`y-axis`],[`bar-group-1`],[`bar-group-2`],[`bar-group-3`],[`bar-group-4`],[`bar-group-5`]]}},inputs:[`allRevealComponents`],outputs:void 0,output:`revealSequences`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1338`),expanded:[],variables:[]},{id:1338,body:function(e,t){return e[t].length},inputs:[`revealSequences`,`chunking`],outputs:void 0,output:`maximumStep`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1})}))();