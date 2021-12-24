import{T as e,h as t,c as a,u as r}from"./afe4295a.js";let o,i=e=>e;function n({height:t=240,width:a=380,name:r}){return e(o||(o=i`
    <a class="creator" href="https://www.${0}.com" target="_blank">
        <img width="${0}" height="${0}" src="images/${0}.png" alt="{name}"></img>
     </a>
  `),r,a,t,r)}const s=(e,t,a)=>{let r=document.head.querySelector(`meta[${e}="${t}"]`);r||(r=document.createElement("meta"),r.setAttribute(e,t),document.head.appendChild(r)),r.setAttribute("content",a)},l=e=>{const{title:t,titleTemplate:a,description:r,image:o,url:i}=e;if(t){const e=a?a.replace("%s",t):t;document.title=e,s("property","og:title",e)}r?(s("name","description",r),s("property","og:description",r)):null===r&&(s("name","description",""),s("property","og:description","")),o?(o.url&&s("property","og:image",o.url),o.alt&&s("property","og:image:alt",o.alt),o.width&&s("property","og:image:width",o.width),o.height&&s("property","og:image:height",o.height)):null===o&&(s("property","og:image",""),s("property","og:image:alt",""),s("property","og:image:width",""),s("property","og:image:height","")),i&&(((e,t)=>{let a=document.head.querySelector(`link[rel="${e}"]`);a||(a=document.createElement("link"),a.setAttribute("rel",e),document.head.appendChild(a)),a.setAttribute("href",t)})("canonical",i),s("property","og:url",i))};class d extends t{constructor(...e){super(...e),this.location={},this.defaultTitleTemplate=`%s | ${a.appName}`}getTitleTemplate(e){return e||null===e?e:this.defaultTitleTemplate}metadata(e){return e.metadata}updateMetadata(){const{route:e}=this.location;if(!e)return;const t=this.metadata(e);if(t){const e={url:window.location.href,titleTemplate:this.getTitleTemplate(t.titleTemplate)};l({...e,...t})}}createRenderRoot(){return this}updated(e){super.updated(e),this.updateMetadata()}startCase(e){return e.split("-").map((e=>e.substring(0,1).toUpperCase()+e.substring(1,e.length).toLowerCase())).join(" ")}}let c,p=e=>e;class h extends d{render(){return e(c||(c=p` <section class="main-hero">
        <div class="container">
          <div class="hero-inner">
            <h1>
              Improve your craftsmanship<br />
              as a Software Engineer
            </h1>
            <h2>
              We'll share with you ideas, concepts, frameworks and resources
              that can help you improve your skills, expand your knowledge and
              make bigger impact.
            </h2>
            <div class="bottom-data">
              <a href="${0}">
                <fc-button size="large">I'M READY! SHOW ME</fc-button>
              </a>
              <p>all free, no emails, no BS. We're Engineers...</p>
            </div>
          </div>
        </div>
      </section>
      <section class="home-data">
        <div class="container">
          <div class="home-data-inner">
            <h3>
              Interested in our Career Ladder and the journey we had behind it?
            </h3>
            <p>
              We built the Engineering Dojo based on our Career Ladder while
              taking out things that are too specific. If you’re trying to build
              your own, don’t start with a blank page. You can have both and see
              what you like to use.
            </p>
            <div class="doc-btns">
              <a
                href="https://docs.google.com/spreadsheets/d/1e71fL0b5lYyac_SMSZZFHqID_VjixPwUOuCqFXtzGL4"
                target="_blank"
                title="Forter Career Ladder for Software Engineers"
                ><img src="images/excel.svg" alt="Download Spreadsheet" /><span
                  >Forter Career Ladder for Software Engineers</span
                ></a
              >
              <a
                href="https://docs.google.com/document/d/1u4C0LhkMVZt_6luTi9EvCfAnlzoE_uRAfJ6lLRW9TxU"
                target="_blank"
                title="Forter Engineering Career Journey"
                ><img src="images/doc.svg" alt="Download Document" /><span
                  >Forter Engineering Career Journey</span
                ></a
              >
            </div>
          </div>
        </div>
      </section>
      <section class="featuring">
        <div class="container">
          <div class="featuring-inner">
            <p>From the creators of other fun things...</p>
            <div class="featuring-data">
              ${0}
              ${0}
              ${0}
            </div>
          </div>
        </div>
      </section>`),r("home"),n({name:"forkerlabs"}),n({name:"softwarearchitectureaddict"}),n({name:"chuckwho"}))}}customElements.define("page-home",h);export{h as PageHome};
