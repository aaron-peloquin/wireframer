customElements.define('wf-c', class WFC extends HTMLElement {
  /**
   * `connectedCallback` is a custom-element lifecycle callback
   * which fires whenever the element is added to the document
   */
  connectedCallback() {
    const componentName = this.getAttribute('component') || 'Generic Component'
    const componentSize = parseInt(this.getAttribute('size')) || 12
    const width = (100 / 12 * componentSize)
    const spacingUnit = 4
    const root = this.attachShadow({mode: 'open'})
    const Element = document.createElement('div')
    Element.id = 'root'
    Element.innerHTML = `
    <style>
      #root {
        display: inline-block;
        vertical-align: top;
        color: #111;
        background-color: #8A8;
        padding: ${spacingUnit}px;
        margin: ${spacingUnit}px;
        border: ${spacingUnit}px solid #DDD;
        width: calc(${width}% - ${(spacingUnit*6)+4}px);
      }

      #root:hover {
        background-color: #A8A;
        color: #EEE;
        border-color: #444;
      }
    </style>
    <div><strong>${componentName}</strong></div>
    <slot><em>no children</em></slot>`
    root.appendChild(Element)
  }
})

const styleTag = document.createElement('style')
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(`body {background-color: #EEE; font-size: 18px;}`))
document.getElementsByTagName("head")[0].appendChild(styleTag)
