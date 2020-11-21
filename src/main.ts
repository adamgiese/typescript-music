import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination()

Tone.Transport.scheduleRepeat((time) => {
  synth.triggerAttackRelease("C4", "8n")
}, "4n")

// setup the buttons

document.querySelector('#play').addEventListener('click', () => {
  Tone.Transport.start()
})

document.querySelector('#pause').addEventListener('click', () => {
  Tone.Transport.pause()
})

document.querySelector('#stop').addEventListener('click', () => {
  Tone.Transport.pause()
})
