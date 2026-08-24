import{t as e}from"./rolldown-runtime-BX80bFGj.js";import{n as t,t as n}from"./runtime-BZ0wSW5P.js";import{n as r,t as i}from"./preload-helper-Ch2JRp7G.js";e((()=>{t(),r(),n({root:document.getElementById(`cell-3431`),expanded:[],variables:[]},{id:3431,body:async function(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T){let E=(await e(new URL(``+new URL(`UK_electricity_generation-BP_5ACyJ.csv`,import.meta.url).href,``+import.meta.url).href).csv({typed:!0})).filter(e=>e.Fuel!=`Other fuels`&&e.Fuel!=`Hydro`&&e.Fuel!=`Energy storage`&&e.Year>2006).filter(e=>t.includes(e.Fuel));function D(e){let t=Math.round(e*10)/10;return`${Number.isInteger(t)?t:t.toFixed(1)}%`}function O(e){let t=Math.round(Math.abs(e)*10)/10,n=t===1?`percentage point`:`percentage points`;return`${Number.isInteger(t)?t:t.toFixed(1)} ${n}`}function k(e,t){let n=e.datum,r=t.datum,i=Math.abs(n.Share-r.Share),a=`${n.Fuel} in ${n.Year}`,o=`${r.Fuel} in ${r.Year}`;if(i===0)return`${a} and ${o} both accounted for ${D(n.Share)} of total generation.`;let[s,c]=n.Share>r.Share?[n,r]:[r,n];return`The share from ${s.Fuel} in ${s.Year} was <strong>${O(s.Share-c.Share)} higher</strong> than the share from ${c.Fuel} in ${c.Year}.`}let A=document.createElement(`div`);A.className=`comparison-card`,A.hidden=!0;let j=document.createElement(`dialog`);j.className=`tool-help-dialog`,j.innerHTML=`
  <div class="tool-help-panel">

    <button
      type="button"
      class="tool-help-close"
      aria-label="Close help"
      title="Close"
    >
      ×
    </button>

    <div class="tool-help-header">
      <div class="tool-help-mock-button">
        <img class="tool-help-dialog-icon" alt="">
      </div>

      <div>
        <h2 class="tool-help-title"></h2>
        <p class="tool-help-description"></p>
      </div>
    </div>

    <div class="tool-help-content">
      <div class="tool-help-instructions">
        <h3>How to use it</h3>
        <ol></ol>
      </div>

      <div class="tool-help-video-container">
        <video
          class="tool-help-video"
          controls
          playsinline
          preload="metadata"
        ></video>
      </div>
    </div>

  </div>
`;let ee=j.querySelector(`.tool-help-title`),te=j.querySelector(`.tool-help-description`),M=j.querySelector(`.tool-help-dialog-icon`),N=j.querySelector(`.tool-help-content`),ne=j.querySelector(`.tool-help-instructions`),P=j.querySelector(`.tool-help-instructions ol`),re=j.querySelector(`.tool-help-video-container`),F=j.querySelector(`.tool-help-video`),I=j.querySelector(`.tool-help-close`);function ie(e,t){t?.stopPropagation?.(),ee.textContent=e.title,te.textContent=e.description,M.src=e.icon,M.alt=``;let n=Array.isArray(e.instructions)&&e.instructions.length>0;ne.hidden=!n,n?P.replaceChildren(...e.instructions.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t})):P.replaceChildren();let r=!!e.video;re.hidden=!r,F.pause(),r?(F.src=e.video,F.load()):(F.removeAttribute(`src`),F.load()),N.hidden=!(n||r),N.classList.toggle(`tool-help-content-single`,n!==r),j.showModal()}function L(){F.pause(),j.open&&j.close()}function R(){L()}function z(e){e.target===j&&L()}I.addEventListener(`click`,R),j.addEventListener(`click`,z);function B(e){let t=document.createElement(`button`);t.type=`button`,t.className=`help-icon`,t.textContent=`?`,t.setAttribute(`aria-label`,`Help for ${e.title}`),t.title=`Help for ${e.title}`;let n=t=>ie(e,t);return t.addEventListener(`click`,n),{button:t,handler:n}}let V=B(n.find(e=>e.id===`chart-summary`)),H=B(n.find(e=>e.id===`read-aloud-OH`)),U=B(n.find(e=>e.id===`look-up-words`)),W=B(n.find(e=>e.id===`glossary`)),G=B(n.find(e=>e.id===`compare-values`));function K(e,t,n){return(e.matches?.(`button, label`)?e:e.querySelector?.(`button, label`))?.classList.add(`tool-btn`),r`
    <div class="tool-control">

      <div class="btn-container">
        ${e}
      </div>

      <span class="tool-control-label">
        ${t}
      </span>

      ${n.button}

    </div>
  `}function ae(e){let t=e.querySelector(`.glossary-header`),n=e.offsetParent,r=0,i=0,a=!1;t.addEventListener(`pointerdown`,o=>{if(o.target.closest(`.glossary-close`))return;let s=e.getBoundingClientRect(),c=n.getBoundingClientRect();a=!0,r=o.clientX-s.left,i=o.clientY-s.top,e.style.left=`${s.left-c.left}px`,e.style.top=`${s.top-c.top}px`,e.style.transform=`none`,t.setPointerCapture(o.pointerId)}),t.addEventListener(`pointermove`,t=>{if(!a)return;let o=n.getBoundingClientRect();e.style.left=`${t.clientX-o.left-r}px`,e.style.top=`${t.clientY-o.top-i}px`}),t.addEventListener(`pointerup`,e=>{a=!1,t.releasePointerCapture(e.pointerId)})}function q(){let e=r`
      <div class="glossary-panel">
        <div class="glossary-header">
          <strong>Glossary</strong>

          <button
            class="glossary-close"
            type="button"
            aria-label="Close glossary"
          >
            ×
          </button>
        </div>

        <div class="glossary-body">
          <p>
            <b>Electricity</b>
            <span>
              Energy that powers lights, heating and electrical equipment.
            </span>
          </p>

          <p>
            <b>Generation mix</b>
            <span>
              How much electricity comes from each energy source.
            </span>
          </p>


          <p>
            <b>Coal</b>
            <span>
              A black rock that is burned to make electricity.
            </span>
          </p>

          <p>
            <b>Wind</b>
            <span>
              Wind can be used to make electricity using wind turbines.
            </span>
          </p>

          <p>
            <b>Solar</b>
            <span>
              Energy from sunlight can be used to make electricity.
            </span>
          </p>

          <p>
            <b>Oil</b>
            <span>
              A liquid fuel that can be burned to make electricity.
            </span>
          </p>

          <p>
            <b>Bioenergy</b>
            <span>
              Energy made from plants, wood or natural waste.
            </span>
          </p>

          <p>
            <b>Renewable</b>
            <span>
              Energy from sources that can be used again, such as wind and
              sunlight.
            </span>
          </p>

          <p>
            <b>Gas</b>
            <span>
              A fuel that is burned to make electricity.
            </span>
          </p>

          <p>
            <b>Nuclear</b>
            <span>
              Electricity made using heat released from atoms.
            </span>
          </p>

        </div>
      </div>
    `;return e.querySelector(`.glossary-close`).addEventListener(`click`,e=>{e.stopPropagation(),i.value=!1,i.dispatchEvent(new a(`input`,{bubbles:!0}))}),e}let oe=r`
    <div class="chart-title">
      How the UK's ${o(`electricity`)}
      ${o(`generation mix`)} has changed
    </div>
  `,se=r`
    <div
      class="chart-subtitle"
    >
      ${o(`Share of total generation`,`share of total generation`)}
      from ${o(`selected sources`)}, 2007–2024.
      Source: ${o(`DESNZ`)}.
    </div>
  `,ce=s?r`
        <div class="chart-summary">
          <p>
            This chart shows the share of the UK's
            ${o(`electricity`)}
            ${o(`generated`)} by
            ${o(`selected fuel sources`,`selected sources`)}
            between 2007 and 2024.
          </p>

          <p>
            ${o(`Coal`)} went down a lot over this period.
            ${o(`Wind`)}, ${o(`solar`)} and
            ${o(`bioenergy`)} all grew.
            ${o(`Wind`)} became the UK's largest
            ${o(`renewable`)} source of electricity.
</p>
<p>
            ${o(`Gas`)} stayed one of the main sources of
            electricity, but its share is lower than it once was.
            ${o(`Nuclear`)} has also fallen overall.
          </p>
        </div>
      `:``,J=c.plot({width:680,height:450,marginLeft:80,marginBottom:50,insetLeft:15,insetRight:15,style:`font-family: sans-serif;`,y:{grid:!0,zero:!0,domain:[0,50]},color:{legend:!1,label:`Fuel`,domain:l},marks:[c.lineY(E,{x:`Year`,y:`Share`,stroke:`Fuel`,strokeWidth:2,curve:`linear`,marker:`dot`}),c.dot(E,{x:`Year`,y:`Share`,r:8,opacity:0,fill:`Fuel`,stroke:`transparent`,strokeWidth:0,className:`electricity-point-overlay`}),c.axisY({label:`Percentage of total generation`,fontSize:16,labelAnchor:`center`,interval:10,tickFormat:e=>`${e}%`}),c.axisX({tickFormat:`d`,label:`Year`,labelOffset:50,fontSize:16,interval:4}),u?[d(E,{x:`Year`,y:`Share`,fuel:`Fuel`,colors:f})]:[]]}),Y=[],X=J.querySelectorAll(`.electricity-point-overlay circle, circle.electricity-point-overlay`);function Z(){X.forEach((e,t)=>{let n=Y.some(e=>e.index===t);e.setAttribute(`stroke`,n?`black`:`transparent`),e.setAttribute(`stroke-width`,n?3:0),e.setAttribute(`vector-effect`,`non-scaling-stroke`),e.setAttribute(`opacity`,+!!n)}),u&&Y.length===2?(A.innerHTML=k(Y[0],Y[1]),A.hidden=!1):(A.innerHTML=``,A.hidden=!0)}X.forEach((e,t)=>{e.style.cursor=u?`pointer`:`default`,e.style.pointerEvents=u?`all`:`none`,u&&e.addEventListener(`click`,n=>{n.stopPropagation();let r=Y.findIndex(e=>e.index===t);r>=0?Y.splice(r,1):(Y.push({index:t,circle:e,datum:E[t]}),Y.length>2&&Y.shift()),Z()})}),Z();let Q=r`
    <div class="plot-wrap">
      ${p}

      <div class="visualisation">
  ${oe}
  ${se}

    ${m}

  <div class="plot-content-row">
    <div class="plot-graphic">
      ${J}
    </div>

    <div class="plot-side-column">
      ${ce}
      ${A}
    </div>
  </div>
</div>
    <div class="plot-tools">
  <div id="plot-controls">
    ${K(h,`Chart summary`,V)}
${K(g,`Read aloud on hover`,H)}
${K(_,`Look up words`,U)}
${K(i,`Glossary`,W)}
${K(v,`Compare values`,G)}
  </div>
</div>


    </div>
      ${y?q():``}
      ${j}
    </div>
  `,le=b(Q,x),$=S(Q,C)??(()=>{});return w.then(()=>{le(),$(),V.button.removeEventListener(`click`,V.handler),H.button.removeEventListener(`click`,H.handler),U.button.removeEventListener(`click`,U.handler),W.button.removeEventListener(`click`,W.handler),G.button.removeEventListener(`click`,G.handler),I.removeEventListener(`click`,R),j.removeEventListener(`click`,z),F.pause()}),T(Q),requestAnimationFrame(()=>{let e=Q.querySelector(`.glossary-panel`);e&&ae(e)}),Q},inputs:`FileAttachment.filteredFuel.toolHelpItemsDV04.html.viewof$glossary.Event.lookupWord.summariseChart.Plot.fuelDomain.calculator.pointerCustomTip.fuelColors.chartstyles.viewof$filteredFuel.viewof$summariseChart.viewof$readAloudOH.viewof$lookUp.viewof$calculator.glossary.enableGlossaryLookups.lookUp.enableHoverSpeech.readAloudOH.invalidation.enableTooltipPositioning`.split(`.`),outputs:void 0,output:void 0,display:!1,assets:void 0,autodisplay:!0,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-1507`),expanded:[],variables:[]},{id:1507,body:function(e){return e(new URL(``+new URL(`read-aloud-BLiu0aRO.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`readAloud`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-117`),expanded:[],variables:[]},{id:117,body:function(){return[`#7C97DE`,`#F1BE3B`,`#ff725c`,`#8AD0C0`,`#42BD5B`,`#ff8ab7`,`#B780F5`,`#97bbf5`,`#B98D74`,`#9498a0`]},inputs:[],outputs:void 0,output:`observable10Range`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-121`),expanded:[],variables:[]},{id:121,body:function(e,t){return((n,r)=>{let i=new Map(n.map(e=>[e,!0])),a=()=>e(s,[...i].filter(e=>e[1]).map(e=>e[0])),o=e=>(i.set(e.target.value,e.target.checked),a()),s=t.html`
    <div class="filter-legend">
      ${n.map((e,n)=>t.html`
          <div class="filter-legend-item">
            <input
              type="checkbox"
              value=${e}
              checked
              style="
                accent-color: ${r[n]};
                width: 20px;
                height: 20px;
              "
              oninput=${o}
            >
            <label>${e}</label>
          </div>
        `)}
    </div>
  `;return a(),s})},inputs:[`set`,`htl`],outputs:void 0,output:`filterLegend`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-122`),expanded:[],variables:[]},{id:122,body:async e=>{let{set:t}=await i(()=>import(`https://api.observablehq.com/@observablehq/synchronized-inputs.js?v=4`).then(t=>{let n=e._module._runtime.module(t.default);return new Map(Array.from(e._outputs,e=>[e._name,e])).get(`set`)?.import(`set`,n),{}}),[],import.meta.url);return{set:t}},inputs:[`@variable`],outputs:[`set`],output:void 0,display:!1,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0}),n({root:document.getElementById(`cell-332`),expanded:[],variables:[]},{id:332,body:function(){return[`Coal`,`Gas`,`Nuclear`,`Oil`,`Solar`,`Bioenergy`,`Wind`]},inputs:[],outputs:void 0,output:`fuelDomain`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-333`),expanded:[],variables:[]},{id:333,body:function(e,t,n){return e(t,n)},inputs:[`filterLegend`,`fuelDomain`,`observable10Range`],outputs:void 0,output:`viewof$filteredFuel`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-3916`),expanded:[],variables:[]},{id:3916,body:function(){return[`#4269d0`,`#efb118`,`#ff725c`,`#6cc5b0`,`#3ca951`,`#ff8ab7`,`#a463f2`,`#97bbf5`,`#9c6b4e`,`#9498a0`]},inputs:[],outputs:void 0,output:`observable10RangeOG`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3432`),expanded:[],variables:[]},{id:3432,body:function(){return(function(e,t=12){let n=e.querySelector(`.tooltip-bubble`);n&&(e.style.setProperty(`--tooltip-shift-x`,`0px`),requestAnimationFrame(()=>{let r=n.getBoundingClientRect(),i=0;r.left<t?i=t-r.left:r.right>window.innerWidth-t&&(i=window.innerWidth-t-r.right),e.style.setProperty(`--tooltip-shift-x`,`${i}px`)}))})},inputs:[],outputs:void 0,output:`keepTooltipOnScreen`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3433`),expanded:[],variables:[]},{id:3433,body:function(e){return(function(t){t.querySelectorAll(`.look-up-word`).forEach(t=>{t.addEventListener(`pointerenter`,()=>{e(t)}),t.addEventListener(`focus`,()=>{e(t)})})})},inputs:[`keepTooltipOnScreen`],outputs:void 0,output:`enableTooltipPositioning`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3434`),expanded:[],variables:[]},{id:3434,body:function(e,t,n){return(function(r,i=r.toLowerCase(),a=``){let o=e[i.toLowerCase()],s=encodeURIComponent(`${i} meaning`);return t&&o?n`
          <a
            class=${`look-up-word ${a}`}
            href=${`https://www.google.com/search?q=${s}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ${r}

            <span class="tooltip-bubble">
              <span class="tooltip-icon">${o.icon}</span>

              <span class="tooltip-text">
                ${o.type?n`<b>${o.type}.</b> `:``}
                ${o.text}
              </span>
            </span>
          </a>
        `:r})},inputs:[`glossaryMap`,`lookUp`,`html`],outputs:void 0,output:`lookupWord`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3435`),expanded:[],variables:[]},{id:3435,body:function(e,t){return new Map(e.map((e,n)=>[e,t[n]]))},inputs:[`fuelDomain`,`observable10RangeOG`],outputs:void 0,output:`fuelColors`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3436`),expanded:[],variables:[]},{id:3436,body:function(e,t,n){return(function(r,{x:i=`Year`,y:a=`Share`,fuel:o=`Fuel`,colors:s=e,maxRadius:c=1/0,boxWidth:l=98,boxHeight:u=78,offset:d=13,fontFamily:f=`sans-serif`,yearFormat:p=e=>String(e),valueFormat:m=e=>`${Number.isInteger(e)?e:Number(e).toFixed(1)}%`}={}){let h=typeof i==`function`?i:e=>e[i],g=typeof a==`function`?a:e=>e[a],_=typeof o==`function`?o:e=>e[o],v=e=>s instanceof Map?s.get(e)??`#555`:s[e]??`#555`,y=(e,t,n)=>Math.max(t,Math.min(n,e));return t.dot(r,t.pointerX({x:h,y:g,px:h,py:g,maxRadius:c,render(e,t,i,a){let o=n.create(`svg:g`).attr(`font-family`,f).attr(`pointer-events`,`none`),s=a.marginLeft??0,c=a.marginRight??0,b=a.marginTop??0,x=a.marginBottom??0;for(let t of e){let e=r[t],n=i.x[t],f=i.y[t],S=_(e),C=v(S),w=h(e),T=g(e),E=y(n-l/2,s,a.width-l-c),D=y(f-u-d,Math.max(0,b-20),a.height-u-x);o.append(`circle`).attr(`cx`,n).attr(`cy`,f).attr(`r`,5).attr(`fill`,C).attr(`stroke`,C).attr(`stroke-width`,3);let O=o.append(`g`).attr(`transform`,`translate(${E},${D})`);O.append(`rect`).attr(`width`,l).attr(`height`,u).attr(`rx`,8).attr(`fill`,`white`).attr(`stroke`,`#b3b3b3`).attr(`stroke-width`,1.5),O.append(`text`).attr(`x`,l/2).attr(`y`,20).attr(`text-anchor`,`middle`).attr(`font-size`,14).attr(`font-weight`,700).attr(`fill`,C).text(S),O.append(`text`).attr(`x`,l/2).attr(`y`,46).attr(`text-anchor`,`middle`).attr(`font-size`,22).attr(`font-weight`,1e3).attr(`fill`,C).text(m(T)),O.append(`text`).attr(`x`,l/2).attr(`y`,67).attr(`text-anchor`,`middle`).attr(`font-size`,13).attr(`fill`,`#999`).text(p(w))}return o.node()}}))})},inputs:[`fuelColors`,`Plot`,`d3`],outputs:void 0,output:`pointerCustomTip`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3437`),expanded:[],variables:[]},{id:3437,body:function(e,t){return(function(n,r=!0){if(!r||!(`speechSynthesis`in window))return;function i(e){return e.replace(/\s+/g,` `).trim()}function a(e){let t=e.cloneNode(!0);return t.querySelectorAll(`
        .tooltip-bubble,
        .plot-svg-tooltip-host,
        [data-speech-ignore]
      `).forEach(e=>e.remove()),i(t.textContent)}function o(){let t=e.getVoices();return t.find(e=>e.name.includes(`Google UK English Female`))||t.find(e=>e.name.includes(`Microsoft Sonia`))||t.find(e=>e.lang===`en-GB`)||t[0]}function s(n){let r=i(n);if(!r)return;e.cancel();let a=new t(r);a.voice=o(),a.lang=`en-GB`,a.rate=.85,a.pitch=1,a.volume=1,e.speak(a)}function c(e){return e.closest?.(`
    .chart-title,
    .chart-subtitle,
    .filter-legend-item label,
    .chart-summary p,
    .comparison-card,
    .tool-control-label,
    .look-up-word,
    svg text
  `)}function l(e){let t=c(e.target);!t||!n.contains(t)||t.contains(e.relatedTarget)||s(a(t))}function u(t){let n=c(t.target);n&&(n.contains(t.relatedTarget)||e.cancel())}return e.getVoices().length===0&&(e.onvoiceschanged=()=>{}),n.addEventListener(`mouseover`,l),n.addEventListener(`mouseout`,u),()=>{n.removeEventListener(`mouseover`,l),n.removeEventListener(`mouseout`,u),e.cancel()}})},inputs:[`speechSynthesis`,`SpeechSynthesisUtterance`],outputs:void 0,output:`enableHoverSpeech`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3438`),expanded:[],variables:[]},{id:3438,body:function(){return{electricity:{icon:`⚡`,text:`Energy that powers lights, heating and electrical equipment.`},"generation mix":{icon:`📊`,text:`How much electricity comes from each energy source.`},"share of total generation":{icon:`📊`,text:`Out of all the electricity made, how much came from one source.`},"selected sources":{icon:`✓`,text:`The energy sources chosen to be shown in this chart.`},coal:{icon:`🪨`,text:`A black rock that is burned to make electricity.`},wind:{icon:`💨`,text:`Wind can be used to make electricity using wind turbines.`},solar:{icon:`☀️`,text:`Sunlight can be used to make electricity using solar panels.`},oil:{icon:`🛢️`,text:`A liquid fuel that can be burned to make electricity.`},bioenergy:{icon:`🌱`,text:`Energy made from plants, wood or natural waste.`},renewable:{icon:`♻️`,text:`Energy sources that can be used again, such as wind and sunlight.`},gas:{icon:`🔥`,text:`A fuel that is burned to make electricity.`},nuclear:{icon:`⚛️`,text:`Electricity made using heat released from atoms.`},desnz:{icon:`🏛️`,text:`The UK government department that published this energy data.`}}},inputs:[],outputs:void 0,output:`glossaryMap`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3439`),expanded:[],variables:[]},{id:3439,body:function(e,t){return(function(n,r=!0){if(!n)return()=>{};let i=n.ownerDocument,a=i.defaultView,o=a.NodeFilter,s=[],c=[];function l(e){if(!e?.parentNode)return;let t=e.getAttribute(`data-glossary-text`)??``;e.replaceWith(i.createTextNode(t))}function u(e){e&&(e.classList.remove(`svg-look-up-word`),e.removeAttribute(`data-auto-glossary`),e.removeAttribute(`data-glossary-key`),e.removeAttribute(`tabindex`),e.removeAttribute(`focusable`),e.removeAttribute(`role`),e.removeAttribute(`aria-label`))}for(let e of n.querySelectorAll(`a.look-up-word[data-auto-glossary="true"]`))l(e);for(let e of n.querySelectorAll(`svg text[data-auto-glossary="true"]`))u(e);if(!r)return()=>{};let d=Object.keys(e).sort((e,t)=>t.length-e.length),f=new Map(d.map(e=>[e.toLowerCase().replace(/\s+/g,` `).trim(),e]));function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}let m=new RegExp(d.map(e=>e.trim().split(/\s+/).map(p).join(`\\s+`)).join(`|`),`giu`);function h(e){return e&&/[\p{L}\p{N}_-]/u.test(e)}function g(e){let t=String(e??``),n=[];for(let e of t.matchAll(m)){let r=e.index,i=e[0],a=r+i.length,o=t[r-1],s=t[a];if(h(o)||h(s))continue;let c=i.toLowerCase().replace(/\s+/g,` `).trim(),l=f.get(c);l&&n.push({start:r,end:a,text:i,key:l})}return n}function _(){let e=[],r=i.createTreeWalker(n,o.SHOW_TEXT,{acceptNode(e){let t=e.parentElement;return!t||!e.nodeValue.trim()||t.closest([`svg`,`script`,`style`,`textarea`,`option`,`.look-up-word`,`.tooltip-bubble`,`.glossary-panel`,`[data-no-glossary]`].join(`,`))?o.FILTER_REJECT:g(e.nodeValue).length?o.FILTER_ACCEPT:o.FILTER_REJECT}});for(;r.nextNode();)e.push(r.currentNode);for(let n of e){let e=n.nodeValue,r=g(e);if(!r.length)continue;let o=i.createDocumentFragment(),c=0;for(let n of r){o.append(i.createTextNode(e.slice(c,n.start)));let r=t(n.text,n.key);r instanceof a.Element&&(r.setAttribute(`data-auto-glossary`,`true`),r.setAttribute(`data-glossary-text`,n.text),s.push(r),r.addEventListener(`click`,e=>{e.stopPropagation()})),o.append(r),c=n.end}o.append(i.createTextNode(e.slice(c))),n.replaceWith(o)}}let v=i.createElement(`span`);v.className=`look-up-word plot-svg-tooltip-host`;let y=i.createElement(`span`);y.className=`tooltip-bubble`,y.setAttribute(`role`,`tooltip`);let b=i.createElement(`span`);b.className=`tooltip-icon`;let x=i.createElement(`span`);x.className=`tooltip-text`,y.append(b,x),v.append(y),i.body.append(v);let S=null;function C(t){let n=e[t];if(!n)return!1;if(b.textContent=n.icon??``,x.replaceChildren(),n.type){let e=i.createElement(`b`);e.textContent=`${n.type}.`,x.append(e,` `)}return x.append(n.text),!0}function w(e){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top;v.style.left=`${n}px`,v.style.top=`${r}px`,v.classList.add(`is-open`);let i=y.getBoundingClientRect();i.left<8?n+=8-i.left:i.right>a.innerWidth-8&&(n-=i.right-(a.innerWidth-8)),v.style.left=`${n}px`}function T(e){C(e.getAttribute(`data-glossary-key`))&&(S=e,w(e))}function E(){S=null,v.classList.remove(`is-open`)}function D(e){let t=e.getAttribute(`data-glossary-key`),n=encodeURIComponent(`${t} meaning`);a.open(`https://www.google.com/search?q=${n}`,`_blank`,`noopener,noreferrer`)}let O=[];function k(e,t,n){e.addEventListener(t,n),O.push({target:e,type:t,listener:n})}function A(){for(let t of n.querySelectorAll(`svg text`)){if(t.hasAttribute(`data-glossary-key`))continue;let n=g(t.textContent);if(!n.length)continue;let r=n.reduce((e,t)=>{let n=e.end-e.start;return t.end-t.start>n?t:e}),i=e[r.key];t.classList.add(`svg-look-up-word`),t.setAttribute(`data-auto-glossary`,`true`),t.setAttribute(`data-glossary-key`,r.key),c.push(t),t.setAttribute(`tabindex`,`0`),t.setAttribute(`focusable`,`true`),t.setAttribute(`role`,`link`),t.setAttribute(`aria-label`,[t.textContent.trim(),i.type?`${i.type}.`:``,i.text,`Opens a definition search in a new tab.`].filter(Boolean).join(` `)),k(t,`pointerenter`,()=>{T(t)}),k(t,`pointerleave`,()=>{E()}),k(t,`focus`,()=>{T(t)}),k(t,`blur`,()=>{E()}),k(t,`click`,e=>{e.preventDefault(),e.stopPropagation(),D(t)}),k(t,`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),D(t)),e.key===`Escape`&&(E(),t.blur())})}}_(),A();function j(){S&&w(S)}return k(a,`resize`,j),k(a,`scroll`,j),function(){for(let{target:e,type:t,listener:n}of O)e.removeEventListener(t,n);for(let e of s)l(e);for(let e of c)u(e);v.remove()}})},inputs:[`glossaryMap`,`lookupWord`],outputs:void 0,output:`enableGlossaryLookups`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3440`),expanded:[],variables:[]},{id:3440,body:(e,t)=>e.html`<style>/*
 * Plot-generated SVG text cannot use border-bottom, so reproduce
 * the same blue underline with SVG-compatible text decoration.
 */
svg text.svg-look-up-word {
  cursor: url("${t}") 18 18, pointer;

  text-decoration-line: underline;
  text-decoration-color: #c7ddff;
  text-decoration-thickness: 4px;
  text-underline-offset: 4px;

  transition: text-decoration-color 0.2s ease;

  pointer-events: all;
}

svg text.svg-look-up-word:hover,
svg text.svg-look-up-word:focus {
  text-decoration-color: #6ea8ff;
}

svg text.svg-look-up-word:focus-visible {
  outline: 2px solid #6ea8ff;
  outline-offset: 3px;
}

/*
 * This zero-sized element anchors your existing HTML tooltip above
 * an SVG label.
 */
.plot-svg-tooltip-host {
  position: fixed;

  display: block;
  width: 0;
  height: 0;

  border-bottom: 0;

  line-height: normal;

  pointer-events: none;
  z-index: 10000;
}

/*
 * Your existing rules show tooltips through :hover. SVG hover occurs
 * on the SVG text, so the helper adds .is-open to this HTML host.
 */
.plot-svg-tooltip-host.is-open .tooltip-bubble {
  display: flex;
}

.plot-svg-tooltip-host.is-open::before,
.plot-svg-tooltip-host.is-open::after {
  display: block;
}</style>`,inputs:[`htl`,`cursorMagGlass`],outputs:[],output:void 0,display:!1,assets:void 0,autodisplay:!0,autoview:!1,automutable:void 0}),n({root:document.getElementById(`cell-3441`),expanded:[],variables:[]},{id:3441,body:function(e,t){return e`
    <style>
.plot-wrap {
  width: 100%;
  max-width: 1080px;
  min-width: 0;
  container-type: inline-size;
  container-name: electricity-vis;
}

.visualisation {
  width: 100%;
  min-width: 0;
}

.plot-content-row {
  display: grid;
  grid-template-columns:
    minmax(0, 2fr)
    minmax(260px, 1fr);

  align-items: start;
  gap: 10px;

  width: 100%;
  min-width: 0;
}

.plot-graphic {
  width: 100%;
  max-width: 700px;
  min-width: 0;
}

.plot-graphic svg {
  display: block;
  width: 100%;
  height: auto;
}

.plot-side-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  min-width: 0;
}

.chart-summary,
.comparison-card {
  width: 100%;
  box-sizing: border-box;
  padding: 16px 18px;
  font-size: 16px;
  line-height: 1.45;

  overflow-wrap: anywhere;

  background: white;
  border: 1px solid rgb(0 0 0 / 0.1);
  border-radius: clamp(10px, 1.4cqi, 14px);
  box-shadow: 0 4px 14px rgb(0 0 0 / 0.15);
}

.comparison-card {
  min-height: clamp(72px, 9cqi, 96px);
}

.chart-summary p:first-child {
  margin-top: 0;
}

.chart-summary p:last-child {
  margin-bottom: 0;
}

@container electricity-vis (max-width: 920px) {
  .plot-content-row {
    grid-template-columns: minmax(0, 680px);
    gap: 20px;
  }

  .plot-side-column {
    max-width: 680px;
  }
}

@container electricity-vis (max-width: 520px) {
  .chart-summary,
  .comparison-card {
    padding: 14px 15px;
    border-radius: 10px;
  }

  .plot-side-column {
    gap: 14px;
  }
}

.plot-tools {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;

  font-family: sans-serif;
}


#plot-controls {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: flex-start;

  row-gap: 15px;
  column-gap: clamp(20px, 3vw, 45px);
}


#plot-controls label.tool-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  width: 3.5rem !important;
  min-width: 3.5rem !important;
  max-width: 3.5rem !important;

  height: 3.5rem !important;
  min-height: 3.5rem !important;
  max-height: 3.5rem !important;

  padding: 9px !important;
  margin: 0 !important;

  border: 2px solid #b8b8b8;
  border-radius: clamp(6px, 0.6vw, 10px);

  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  box-sizing: border-box !important;
  cursor: pointer;
}

#plot-controls label.tool-btn img {
  display: block;

  width: 100% !important;
  height: 100% !important;

  max-width: 100% !important;
  max-height: 100% !important;

  padding: 0 !important;
  margin: 0 !important;

  object-fit: contain;
}


.tool-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100px;
  flex: 0 0 100px;

  gap: 7px;

  font-size: 15px;
  text-align: center;
}

.tool-control-label {
  display: block;
  width: 80%;

  text-align: center;
  line-height: 1.2;
  color: #333;
}

.btn-container {
  width: 3.5rem;
  height: 3.5rem;

  flex: 0 0 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

#plot-controls form {
  margin: 0;
}


#plot-controls form:has(input[type="checkbox"]:checked) .tool-btn {
  background: #3b99fc;
  border-color: #3b99fc;
  color: white;
}

#plot-controls form:has(input[type="checkbox"]:checked) .tool-btn img {
  filter: brightness(0) invert(1);
}

#plot-controls input[type="checkbox"] {
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  pointer-events: none;
}

a.look-up-word,
a.look-up-word:link,
a.look-up-word:visited,
a.look-up-word:hover,
a.look-up-word:active,
a.look-up-word:focus {
  color: inherit !important;
  text-decoration: none !important;
}


.look-up-word {
  display: inline-block;
  position: relative;

  border-bottom: 4px solid #c7ddff;

  line-height: 1.1;

  transition: border-color 0.2s ease;


  cursor: url("${t}") 4 3, pointer;
}

.look-up-word:hover {
  border-bottom-color: #6ea8ff;
}

.look-up-word:hover {
  text-decoration-color: #6ea8ff;
}

/* Tooltip body */

.tooltip-bubble {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 12px);
  transform: translateX(
  calc(-50% + var(--tooltip-shift-x, 0px))
);
text-wrap: wrap;
  overflow-wrap: anywhere;
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  width: max-content;
  max-width: 260px;

  padding: 12px 14px;

  border-radius: 12px;
  border: 2px solid #6ea8ff;

  background: white;
  color: #222;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);

  z-index: 20;
}

.tooltip-icon {
  font-size: 30px;
  line-height: 1;
  flex-shrink: 0;
}

.tooltip-text {
  display: block;
  text-align: left;
}

.look-up-word:hover .tooltip-bubble {
  display: flex;
}


/* Outer blue triangle */
.look-up-word::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: calc(100% + 2px);
  transform: translateX(-50%);
  display: none;

  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #6ea8ff;

  z-index: 21;
}

/* Inner white triangle */
.look-up-word::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: calc(100% + 5px);
  transform: translateX(-50%);
  display: none;

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;

  z-index: 22;
}


.look-up-word:hover::before,
.look-up-word:hover::after {
  display: block;
}

.glossary-panel {
  position: absolute;
  left: 50%;
  top: 160px;
  transform: translateX(-50%);
  width: 550px;
  background: white;
  border: 2px solid #6ea8ff;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.22);
  z-index: 100;
  overflow: hidden;
}

.glossary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #e8f1ff;
  cursor: grab;
  user-select: none;
  font-size: 22px;
  font-family: sans-serif;
}

.glossary-header:active {
  cursor: grabbing;
}

.glossary-close {
  border: none;
  background: transparent;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
}

.glossary-body {
  padding: 14px 16px 16px;
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.35;
}

.glossary-body p {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 8px;
  margin: 0 0 12px;
}

.glossary-body p:last-child {
  margin-bottom: 0;
}
    </style>`},inputs:[`html`,`cursorMagGlass`],outputs:void 0,output:`chartstyles`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3442`),expanded:[],variables:[]},{id:3442,body:function(e,t,n){return e.toggle({label:t`<img src=${n}>`,value:!1})},inputs:[`Inputs`,`html`,`audio`],outputs:void 0,output:`viewof$readAloudOH`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-3443`),expanded:[],variables:[]},{id:3443,body:function(e,t,n){return e.toggle({label:t`<img src=${n} >`,value:!1})},inputs:[`Inputs`,`html`,`magnifyingGlass`],outputs:void 0,output:`viewof$lookUp`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-3444`),expanded:[],variables:[]},{id:3444,body:function(e,t,n){return e.toggle({label:t`<img src=${n} >`,value:!1})},inputs:[`Inputs`,`html`,`infoIcon`],outputs:void 0,output:`viewof$summariseChart`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-3445`),expanded:[],variables:[]},{id:3445,body:function(e,t,n){return e.toggle({label:t`<img src=${n}>`,value:!1})},inputs:[`Inputs`,`html`,`dictionary`],outputs:void 0,output:`viewof$glossary`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-3446`),expanded:[],variables:[]},{id:3446,body:function(e,t,n){return e.toggle({label:t`<img src=${n} >`,value:!1})},inputs:[`Inputs`,`html`,`calculatorIcon`],outputs:void 0,output:`viewof$calculator`,display:!1,assets:void 0,autodisplay:!1,autoview:!0,automutable:!1}),n({root:document.getElementById(`cell-3447`),expanded:[],variables:[]},{id:3447,body:async function(e){return await e(new URL(``+new URL(`calculator-quz-fTLf.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`calculatorIcon`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3448`),expanded:[],variables:[]},{id:3448,body:async function(e){return await e(new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAOpgAADqYAGEyd52AAABo0lEQVQ4jZWTQWoiYRCFy7h0oaCC0CPd7RlcKHgRXcxixCM0EmUWGoSQI4RsM0cZdCe6cRVdtKAOqAcIfOE1GnqaNpAfiu6i/veq6lX9BljMXOARWAPvwAZ4AvzEvU+zmBOcz2f6/T6e55HNZnFdlyAIOJ1OAPdfEQSr1Qrf98nlcrTbbQaDAZ1OJ/Kr1SqLxUIkwzQCV5kFrtfrhGGoi3+ACfC63W5pNBo4jsPxeFSslCR4VNnKdAH/SmT5ud/vyefzjMdjxX8nCdbqWWVfMqeJ9dLtdmk2m7rzNx67M7MfYRia7/tmZmtLP2+1Ws12u53+K/HAnZltHcexzWYj37tB4CleqUTYiOXzAE8alTSQYOo5UX7ncDhQKBRuauBrzhqV1JZg6hkYAM8Ct1otMpkM0+lUsVHaHtxrzhqV1JZgk8mEXq8XZRZYxZbLZZbL5X8kFmMbas4qU2prL/SVr8wCX0nm87lIHpIEdlkS9ahRvV2+8keq8EpSLBaZzWZRJakP5IaNlFngayXA4TsEsge1UyqVoneiVf8ugUyz/Ccw0PoAX2WJAoaaVXUAAAAASUVORK5CYII=`,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`cursorMagGlass`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3449`),expanded:[],variables:[]},{id:3449,body:function(e){return e(new URL(``+new URL(`magnifying-glass-B2BqvCK_.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`magnifyingGlass`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3450`),expanded:[],variables:[]},{id:3450,body:function(e){return e(new URL(``+new URL(`dictionary-D-jCIrs2.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`dictionary`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3451`),expanded:[],variables:[]},{id:3451,body:function(e){return e(new URL(``+new URL(`read-aloud-BLiu0aRO.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`audio`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-3452`),expanded:[],variables:[]},{id:3452,body:function(e){return e(new URL(``+new URL(`info-button-Ci5b6mXV.png`,import.meta.url).href,``+import.meta.url).href).url()},inputs:[`FileAttachment`],outputs:void 0,output:`infoIcon`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1}),n({root:document.getElementById(`cell-6060`),expanded:[],variables:[]},{id:6060,body:async function(e,t,n,r,i,a){return[{id:`chart-summary`,icon:e,title:`Chart summary`,description:`Click to show a short explanation of the main patterns in the chart.`},{id:`read-aloud-OH`,icon:t,title:`Read aloud on hover`,description:`Move your pointer over text to hear it read aloud.`},{id:`look-up-words`,icon:n,title:`Look up words`,video:await r(new URL(``+new URL(`look-up-demo-DmplG-o3.mp4`,import.meta.url).href,``+import.meta.url).href).url(),description:`Click to turn on word help. Point to an underlined word to see its meaning.`},{id:`glossary`,icon:i,title:`Glossary`,description:`Click to open a list of useful words and their meanings.`},{id:`compare-values`,icon:a,title:`Compare values`,video:await r(new URL(``+new URL(`compare-values-demo-DL7P6MHu.mp4`,import.meta.url).href,``+import.meta.url).href).url(),description:`Select two points on the chart to see the difference between their values.`}]},inputs:[`infoIcon`,`audio`,`magnifyingGlass`,`FileAttachment`,`dictionary`,`calculatorIcon`],outputs:void 0,output:`toolHelpItemsDV04`,display:!1,assets:void 0,autodisplay:!1,autoview:!1,automutable:!1})}))();