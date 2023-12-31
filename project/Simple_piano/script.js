const audioContext = new AudioContext()


const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626 , active : false},
  { note: "Db", key: "S", frequency: 277.183 , active : false},
  { note: "D", key: "X", frequency: 293.665 , active : false},
  { note: "Eb", key: "D", frequency: 311.127 , active : false},
  { note: "E", key: "C", frequency: 329.628 , active : false},
  { note: "F", key: "V", frequency: 349.228 , active : false},
  { note: "Gb", key: "G", frequency: 369.994 , active : false},
  { note: "G", key: "B", frequency: 391.995 , active : false},
  { note: "Ab", key: "H", frequency: 415.305 , active : false},
  { note: "A", key: "N", frequency: 440 , active : false},
  { note: "Bb", key: "J", frequency: 466.164 , active : false},
  { note: "B", key: "M", frequency: 493.883 , active : false}
]

document.addEventListener('keydown',(e)=>{ // press down any key event
  if(e.repeat) return; //stop repeating the input when holding on a key
  const keyboardKey = e.code // get the input code
  const noteDetail = getNoteDetail(keyboardKey) // return an object with a matching input;

  if (noteDetail == null) return // it will stop function from moving forword

  noteDetail.active = true // set the active value as we need one key press at a time.


  playNotes()

})


document.addEventListener('keyup', e =>{
const keyboardKey  = e.code
const noteDetail  = getNoteDetail(keyboardKey)
if (noteDetail == null) return

  noteDetail.active = false; //to reset the key value to input the single key again.


  playNotes()


})


function getNoteDetail (inputKey) { 

  return NOTE_DETAILS.find(n => `Key${n.key}` === inputKey) // use find to go through an array of object and find the matching object


 }


// add active class for css

function playNotes() {
  NOTE_DETAILS.forEach(n => {
    const keyInput = document.querySelector(`[data-note = "${n.note}"]`)

    keyInput.classList.toggle('active',n.active) // toggle method add class when active is true

    if(n.oscillator != null){
      n.oscillator.stop();
      n.oscillator.disconnect()
    }

  })

  const activeNotes = NOTE_DETAILS.filter(n => n.active)
  
const gain = 1/activeNotes.length

  activeNotes.forEach(n => {
    startNote(n,gain)
  })
}



// no idea what the fuck happen

function startNote(noteDetail,gain){
  const gainNode = audioContext.createGain()
  gainNode.gain.value = gain
  
 const oscillator =audioContext.createOscillator();
console.log('before : ' +oscillator)


  oscillator.frequency.value = noteDetail.frequency;
  oscillator.type = 'sine';
  oscillator.connect(gainNode).connect(audioContext.destination)
  oscillator.start();
  noteDetail.oscillator = oscillator

  console.log('after : ' +oscillator)



}


// get the key input from input field
//play the audio
// match the note with the event keydown/keyup
// css matching and 'active' class add

