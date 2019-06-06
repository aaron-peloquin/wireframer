customElements.define('wireframe-component', class WireframeComponent extends HTMLElement {
  /**
   * `connectedCallback` is a custom-element lifecycle callback
   * which fires whenever the element is added to the document
   */
  connectedCallback() {
    var currentHTML = ''
    const root = this.attachShadow({mode: 'open'})
    console.log('innerHTML:', this.innerHTML)
    const Element = document.createElement('div')
    Element.innerHTML = `<style>:host {background-color: blue}</style><em>hithere</em><p><slot /></p>`
    root.appendChild(Element)
    console.log('shadowRoot:', this.shadowRoot)
    // this.innerHTML = ``
  }
})