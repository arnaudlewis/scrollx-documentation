document.addEventListener('DOMContentLoaded', init)

function init() {
  sourceCodeTabs()
}

function sourceCodeTabs() {
  const sourceCodeItems = Array.from(document.querySelectorAll('.doc-source-code'))
  sourceCodeItems.map((item, index) => {
    const tabs = Array.from(item.querySelectorAll('.tab'))
    const containers = Array.from(item.querySelectorAll('.code-wrapper > pre'))

    const resetTabs = () => {
      tabs.map((tab) => tab.classList.remove('active'))
      containers.map((c) => c.classList.remove('active'))
    }

    tabs.map((tab, index) => {
      tab.addEventListener('click', function() {
        resetTabs()
        const currentIndex = tabs.indexOf(this)
        this.classList.add('active')
        console.log(containers)
        containers[currentIndex].classList.add('active')
      })
    })

  })
}
