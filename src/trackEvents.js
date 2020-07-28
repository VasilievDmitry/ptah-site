function scrollEvent (current_max) {
  let documentHeight = document.body.scrollHeight
  let windowHeight = window.innerHeight
  let currentHeight = windowHeight + document.documentElement.scrollTop

  let current_value = getPercent(documentHeight, currentHeight)
  return(current_max > current_value ? current_max : current_value)
}

function fixTime () {
  const dateObj = new Date()
  return Math.floor(dateObj.getTime() / 1000)
}

function num (val) {
  val = Math.floor(val)
  return val < 10 ? '0' + val : val
}

function timeFormat (ms) {
  let sec = ms, hours = sec / 3600 % 24, minutes = sec / 60 % 60, seconds = sec % 60
  return num(hours) + ":" + num(minutes) + ":" + num(seconds)
}

function getPercent (doc, cur) {
  return !cur ? 0 : Math.floor(cur * 100 / doc)
}

function getTimeInterval (time) {
  if (time >= 0 && time < 30)
    return 'from 0 sec to 30 sec'
  if (time >= 30 && time < 60)
    return 'from 30 sec to 1 min'
  if (time >= 60 && time < 120)
    return 'from 1 min to 2 min'
  if (time >= 120 && time < 180)
    return 'from 2 min to 3 min'
  if (time >= 180 && time < 300)
    return 'from 3 min to 5 min'
  if (time >= 300 && time < 480)
    return 'from 5 min to 8 min'
  if (time >= 480)
    return 'more 8 min'
}

function getScrollingInterval (deep) {
  if (deep >= 0 && deep < 20)
    return 'from 0% to 20%'
  if (deep >= 20 && deep < 40)
    return 'from 20% to 40%'
  if (deep >= 40 && deep < 60)
    return 'from 40% to 60%'
  if (deep >= 60 && deep < 80)
    return 'from 60% to 80%'
  if (deep >= 80 && deep <= 100)
    return 'from 80% to 100%'
}

export {
  scrollEvent,
  fixTime,
  timeFormat,
  getTimeInterval,
  getScrollingInterval
}
