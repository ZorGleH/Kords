import {
  Note,
  Degree,
  Frequency,
  Octave,
  Accidental,
  NOTE_REGEX,
} from "./models";
import { A4, MIN_OCTAVE, MAX_OCTAVE, NOTES } from "./models";

// Compute index and octave from a note
const getNoteIndexAndOctave = (note: Note): [number, number] => {
  const [, noteName, _octave] = note.match(NOTE_REGEX) as RegExpMatchArray;
  return [NOTES[noteName], parseInt(_octave)];
};

// Return a frequency for a given note, based on A4 value
const getFrequencyFromNote = (note: Note): Frequency => {
  if (!NOTE_REGEX.test(note)) {
    throw new Error(
      `Invalid note, should begin with one of the following: ${Object.keys(
        NOTES
      ).join(
        ", "
      )}, followed by an octave between ${MIN_OCTAVE} and ${MAX_OCTAVE}`
    );
  }
  const [index, octave] = getNoteIndexAndOctave(note);
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

// Return a HSL color for a given note
// H is computed from the note index (C = 0, C# = 1, D = 2, ..., B = 11)
// S is computed from the octave
// L is computed from the octave
const getHSLFromNote = (note: Note): string | undefined => {
  const [index, octave] = getNoteIndexAndOctave(note);
  const hue = Math.round((index / 12) * 360);
  const saturation = 100 - Math.abs(5 - octave) * 5;
  const lightness = 50 - (5 - octave) * 3;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export { getFrequencyFromNote, getNoteFromFrequency, getHSLFromNote };
