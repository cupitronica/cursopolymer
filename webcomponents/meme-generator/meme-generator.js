class MemeGenerator extends HTMLElement {
  	constructor(){
  		super();
		this.attachShadow({mode: 'open'});
		//const t = document.querySelector('template');
		let link = document.querySelector('link[rel="import"]');
		let content = link.import;
		const t = content.querySelector('#memeGenerator');
		const instance = t.content.cloneNode(true);
		this.shadowRoot.appendChild(instance);
  	}
  	connectedCallback() {
  		this.shadowRoot.querySelector('img').src = this.getAttribute('img-src');
  		this.shadowRoot.querySelector('#upperText').innerText = this.getAttribute('upper-text');
  		this.shadowRoot.querySelector('#lowerText').innerText = this.getAttribute('lower-text');
    }

  }

  customElements.define('meme-generator', MemeGenerator);