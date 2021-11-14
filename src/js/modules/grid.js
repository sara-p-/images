export default function grid() {
  // **************** Variables ************** //
  const imageList = document.querySelector('#image-list')
  const gridRange = document.querySelector('#grid-rows')

  gridRange.addEventListener('input', (e) => {
    let rowNumber = e.target.value
    imageList.className = 'list'
    imageList.classList.add('grid--' + rowNumber)
  })
}
