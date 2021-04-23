import { html } from 'lit-element';
import { Logo, Feature } from '../components';
import { urlForName } from '../router';
import { PageElement } from '../helpers/page-element';

export class PageHome extends PageElement {
  render() {
    return html`
      <section class="main-hero">
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
              <a href="${urlForName('home')}">
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
              ${Feature({ name: 'forkerlabs' })}
              ${Feature({ name: 'softwarearchitectureaddict' })}
              ${Feature({ name: 'chuckwho' })}
            </div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('page-home', PageHome);
