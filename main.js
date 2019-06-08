customElements.define('wf-c', class WFC extends HTMLElement {
  getInformation() {
    const {name, size} = this.getProps()
    const parentName = this.parentNode.getAttribute('component')
    return {
      columns: size,
      name: name,
      parentName,
      tag: `<${name} />`,
    }
  }

  constructor() {
    super()
    this.addEventListener('click', (e) => {
      if(e.target===this) {
        const info = this.getInformation()
        console.log({info})
      }
    })
  }

  getProps() {
    return {
      name:this.getAttribute('component') || 'Generic Component',
      size: parseInt(this.getAttribute('size')) || 12,
    }
  }

  /**
   * `connectedCallback` is a custom-element lifecycle callback
   * which fires whenever the element is added to the document
   */
  connectedCallback() {
    const {name, size} = this.getProps()
    const width = (100 / 12 * size)
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
    <div><strong>${name}</strong></div>
    <slot><em>no children</em></slot>`
    root.appendChild(Element)
  }
})

const styleTag = document.createElement('style')
styleTag.type = 'text/css'
styleTag.appendChild(document.createTextNode(`body {background-color: #EEE; font-size: 18px;}`))
document.getElementsByTagName("head")[0].appendChild(styleTag)
