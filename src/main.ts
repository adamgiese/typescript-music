import * as Tone from 'tone'

interface Event {
  timestamp: number,
  callback: function,
}

const mainTransport = Tone.Transport

const scheduleEvents = (events: Event[], transport) => {
  events.forEach(event => {
    transport.schedule(event.callback, event.timestamp / 1000)
  })
}

const synth = new Tone.Synth().toDestination()

const twinkleEvents: Event[] = [
  {
    timestamp: 0,
    callback: () => {
      synth.triggerAttackRelease("C4", "4n")
    }
  },
  {
    timestamp: 500,
    callback: () => {
      synth.triggerAttackRelease("C4", "4n")
    }
  },
  {
    timestamp: 1000,
    callback: () => {
      synth.triggerAttackRelease("G4", "4n")
    }
  },
  {
    timestamp: 1500,
    callback: () => {
      synth.triggerAttackRelease("G4", "4n")
    }
  },
  {
    timestamp: 2000,
    callback: () => {
      synth.triggerAttackRelease("A4", "4n")
    }
  },
  {
    timestamp: 2500,
    callback: () => {
      synth.triggerAttackRelease("A4", "4n")
    }
  },
  {
    timestamp: 3000,
    callback: () => {
      synth.triggerAttackRelease("G4", "2n")
    }
  },
]

// setup the buttons

document.querySelector('#play').addEventListener('click', () => {
  Tone.Transport.start()
})

document.querySelector('#pause').addEventListener('click', () => {
  Tone.Transport.pause()
})

document.querySelector('#stop').addEventListener('click', () => {
  Tone.Transport.stop()
})

// schedule the events

scheduleEvents(twinkleEvents, mainTransport)
