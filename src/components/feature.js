import { html } from './base';

/**
 * Draw a feature we did once by name.
 */
export function Feature({
  /**
   * the feature height default: 240
   * @type {Number}
   */
  height = 240,

  /**
   * the feature width default: 380
   * @type {Number}
   */
  width = 380,

  /**
   * the feature name which produce link and image.
   * @type {String}
   */
  name
}) {
  return html`
    <a class="creator" href="https://www.${name}.com" target="_blank">
        <img width="${width}" height="${height}" src="images/${name}.png" alt="{name}"></img>
     </a>
  `;
}
