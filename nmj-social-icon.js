import { LitElement, html , css} from 'lit-element';
import { icons } from './icons';

export class NmjSocialIcon extends LitElement {

    static get properties() {
        return {
            icon: { type: String}
        };
    }

    constructor() {
        super();
        this.icon = 'facebook';
    }

    static get styles() {
        return css`
                :host[hidden] {display:none;}
                :host {display: inline-block}
                path {
                    fill: var(--nmj-social-icon-color, #888);
                }
                path[fill="none"] {
                    fill: transparent;
                }
                svg {
                    width: var(--nmj-social-icon-size, 24px);
                    height: var(--nmj-social-icon-size, 24px);
                }
                div {
                    display: flex;
                }
            `;
    }


    render() {
        return html`
            <div>
                ${this._getIcon(this.icon)}
            </div>`;
    }

    _getIcon(icon) {
        return icons[icon]
    }
    
}

customElements.define('nmj-social-icon', NmjSocialIcon);