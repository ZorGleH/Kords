import { Note, Degree, Frequency, Octave, Accidental } from "./models";
import { A4, MIN_OCTAVE, MAX_OCTAVE, NOTES } from "./models";

// Return a frequency for a given note, based on A4 value
const getFrequencyFromNote = (note: Note): Frequency | void => {
  const noteRegex = /^([A-G][b#]?)([0-9]|10)$/;

  if (!noteRegex.test(note)) {
    throw new Error(
      `Invalid note, should begin with one of the following: ${Object.keys(
        NOTES
      ).join(
        ", "
      )}, followed by an octave between ${MIN_OCTAVE} and ${MAX_OCTAVE}`
    );
  }
  const [, noteName, _octave] = note.match(noteRegex) as RegExpMatchArray;

  const index = NOTES[noteName];
  const octave = parseInt(_octave);
  const distanceFromA4 = (octave - 4) * 12 + index;

  // Compute frequency based on the note name and octave, rounded to 2 decimals,
  // according to the formula: frequency = 2^(n/12) * 440 Hz
  return Math.round(A4 * Math.pow(2, (distanceFromA4 - 9) / 12) * 100) / 100;
};

// Return a note for a given frequency
const getNoteFromFrequency = (frequency: Frequency): Note => {
  const distanceFromA4 = Math.round(
    12 * (Math.log(frequency / A4) / Math.log(2)) + 9
  );

  // octave is the distance from A4 to the note, between 0 and 10
  const octave = (Math.floor(distanceFromA4 / 12) + 4) as Octave;

  // index is the distance from the note to the closest A, between 0 and 11
  const index = ((distanceFromA4 % 12) + 12) % 12;

  // Find the note name from the index
  const noteName = Object.keys(NOTES).find(
    (key) => NOTES[key] === index
  ) as `${Degree}${Accidental}`;

  return `${noteName}${octave}`;
};

export { getFrequencyFromNote, getNoteFromFrequency };
