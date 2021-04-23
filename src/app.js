import { LitElement, html, css } from './components/base';
import { Logo } from './components';

import config from './config';

import { attachRouter, urlForName } from './router';
// visit https://components.forter.dev for more
import '@forter/checkbox';
import '@forter/button';
import '@forter/radio';

import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

export class App extends LitElement {
  render() {
    const levels = ["Level 1", "Level 2"]
    return html` <header>
        <div class="container">
          <div class="header-inner">
            ${Logo()}
            <nav>
              <ul id="main-menu">
                <li class="type-drop">
                  <a >Choose level</a>
                  <ul id="sub-menu">
                    ${levels.map(
                      level => html`
                        <li>
                          <a
                            href="${urlForName('home')}"
                            aria-label="subemnu"
                            >${level}</a
                          >
                        </li>
                      `
                    )}
                  </ul>
                </li>
                <li class="type-notepad">
                  <a href="${urlForName('home')}">Homepage</a>
                </li>
              </ul>
            </nav>

            <pwa-install-button>
              <button>Install app</button>
            </pwa-install-button>

            <pwa-update-available>
              <button>Update app</button>
            </pwa-update-available>
          </div>
        </div>
      </header>

      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>

      <footer>
        <div class="container">
          <span
            >Made with ❤️  by Forter Engineering
            ${config.environment !== 'production' ? `(Environment: ${config.environment})` : ''}</span
          >
        </div>
      </footer>`;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    attachRouter(this.querySelector('main'));
  }
}

customElements.define('app-index', App);
