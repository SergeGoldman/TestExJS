// Создаем блок с датой заселения
let date = newEl('div')
date.innerHTML = '27.04.2022'
date.classList.add('date')

// Добавляем дату в календарь
calendar.append(date)

// Создаем блок с часами заселения
let dateName = '27.04.2022'
let times = newEl('div')
let hour = 9
for (i = 0; i < 4; i++){
  let timesRow = newEl('div')
  for (j = 0; j < 4; j++) {
    let time = newEl('span')
    time.classList.add('timeButton')
    if (hour == 24) hour = 0;
    time.innerHTML = hours[hour]
    let booked = response[dateName][hours[hour]]['booked']
    time.classList.add('booked-' + booked)
    time.onclick = () => {
      if (!booked) {
        // addClickCount()
        time.classList.toggle('buttonClicked')
        selectedTimes(times, addClickCount())
      }
    }
    time.setAttribute('dateName', dateName)
    time.setAttribute('timeName', hours[hour])
    timesRow.append(time)
    if (j < 3) {
      let timeSpace = newEl('span')
      timeSpace.classList.add('timeSpace')
      timesRow.append(timeSpace)
    }
    hour++
  }
  times.append(timesRow)
}
calendar.append(times)