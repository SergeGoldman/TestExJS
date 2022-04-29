function newEl(elementName) {
  return document.createElement(elementName)
}

let hours = {}
for (i = 0; i < 24; i++) {
  if (i.toString().length < 2) hours[i] = '0'+i.toString()+':00'
  else hours[i] = i.toString()+':00'
}

let clickCount = 0
function addClickCount() {
  clickCount = clickCount + 1
  if (clickCount == 3) clickCount = 1
  return clickCount
}

function selectedTimes(e, countClick) {
  let times = e.querySelectorAll('.timeButton')
  if (countClick == 2) {
    let clicked = false
    let on = true
    times.forEach(time => {
      if (time.classList.contains('buttonClicked')) {
        clicked = !clicked
      } else {
        if (clicked && on) {
          if (time.classList.contains('booked-true')) {
            on = false
            countClick = 0
            return
          } 
          time.classList.toggle('buttonClicked')
        }
      }
    })
  }
  if (countClick == 1 || countClick == 0) {
    times.forEach(time => {
      if (time.classList.contains('buttonClicked')) {
        time.classList.remove('buttonClicked')
      }
    })
    event.target.classList.toggle('buttonClicked')
  }
}