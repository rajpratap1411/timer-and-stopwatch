let secs = 0
let min = 0
let hr = 0
let interval

function doisDigitos(digit) {
  if (digit < 10) {
    return ["0" + digit]
  } else {
    return [digit]
  }
}

function start() {
  timer()
  interval = setInterval(timer, 1000)
}

function pause() {
  clearInterval(interval)
}

function stop() {
  clearInterval(interval)

  secs = 0
  min = 0

  document.getElementById("timer").innerHTML = `00:00:00`
}

function timer() {
  secs++

  if (secs == 60) {
    min++
    secs = 0

    if (min == 60) {
      hr++
      min = 0
    }
  }

  document.getElementById("timer").innerHTML = `${doisDigitos(
    hr
  )}:${doisDigitos(min)}:${doisDigitos(secs)}`
}
