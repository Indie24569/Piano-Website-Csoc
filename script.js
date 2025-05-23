const keyMap = {
  'a': 'C',
  'w': 'C#',
  's': 'D',
  'e': 'D#',
  'd': 'E',
  'f': 'F',
  't': 'F#',
  'g': 'G',
  'y': 'G#',
  'h': 'A',
  'u': 'A#',
  'j': 'B',
  'k': 'C2'
};

function playNote(note) {
  const Notefile = note.replace('#', 'sharp');
  const audio = new Audio(`sounds/${Notefile}.mp3`);
  audio.play();

  const key = document.querySelector(`.key[data-note="${note}"]`);
  if (key) {
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 150);
  }
}

function initPiano() {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    const note = key.dataset.note;

    key.addEventListener('mousedown', () => {
      playNote(note);
    });
  });

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keyMap[key]) {
      e.preventDefault();
      playNote(keyMap[key]);
    }
  });
}

document.addEventListener('DOMContentLoaded', initPiano);