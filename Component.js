customElements.define('wf-c', class WFC extends HTMLElement {
  /**
   * `connectedCallback` is a custom-element lifecycle callback
   * which fires whenever the element is added to the document
   */
  connectedCallback() {
    const componentName = this.getAttribute('component') || 'Generic Component'
    const componentSize = parseInt(this.getAttribute('size') || 12)
    const width = (100 / 12 * componentSize)
    const spacingUnit = 5
    const root = this.attachShadow({mode: 'open'})
    const Element = document.createElement('div')
    Element.id = 'root'
    console.log({componentName, Element})
    Element.innerHTML = `
    <style>
      #root {
        display: inline-block;
        background-color: #CCC;
        padding: ${spacingUnit}px;
        margin: ${spacingUnit}px;
        border: ${spacingUnit}px solid #AAA;
        width: calc(${width}% - ${(spacingUnit*6)+4}px)
      }
    </style>
    <div><strong>${componentName}</strong></div>
    <slot><em>0kids</em></slot>`
    root.appendChild(Element)
  }
})

const styleTag = document.createElement('style')
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(`body {background-color: #EEE}`))
document.getElementsByTagName("head")[0].appendChild(styleTag)
