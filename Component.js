customElements.define('wf-c', class WFC extends HTMLElement {
  /**
   * `connectedCallback` is a custom-element lifecycle callback
   * which fires whenever the element is added to the document
   */
  connectedCallback() {
    const componentName = this.getAttribute('component') || 'Generic Component'
    const componentSize = parseInt(this.getAttribute('size') || 12)
    const width = Math.floor(100 / 12 * componentSize)
    const spacingUnit = 5
    const root = this.attachShadow({mode: 'open'})
    const Element = document.createElement('div')
    console.log({componentName, Element})
    Element.innerHTML = `
    <style>
      div {
        display: inline-block;
        background-color: #CCC;
        padding: ${spacingUnit}px;
        margin: ${spacingUnit}px;
        border: ${spacingUnit}px solid #AAA;
        width: calc(${width}% - ${spacingUnit*6}px)
      }
    </style>
    <em>${componentName}</em>
    <slot>No Children</slot>`
    root.appendChild(Element)
  }
})

const styleTag = document.createElement('style').innerHTML = 'body {background-color: orange}'

const head = document.getElementsByTagName('head').appendChild(styleTag)
