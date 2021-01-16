const textEl = document.getElementById('text')
const text = 'Be The Change You Wish To See In The World.'
let index = 1
let speed = 200 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, index)
    index++

    //checks to see if at the end of sentence ans starts index at 1
    if (index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}


