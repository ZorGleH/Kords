const A4 = 440;
const MIN_OCTAVE = 0;
const MAX_OCTAVE = 10;

const notes: { [key: string]: number } = {
  C: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  F: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
};

type Note = keyof typeof notes;

// Return a frequency for a given note, based on A4 value
export const getFrequencyFromNote = (
  note: `${Note}${"#" | "b" | ""}${number}`
): number | void => {
  const noteRegex = /^([A-G][b#]?)([0-9]|10)$/;

  if (!noteRegex.test(note)) {
    throw new Error(
      `Invalid note, should begin with one of the following: ${Object.keys(
        notes
      ).join(
        ", "
      )}, followed by an octave between ${MIN_OCTAVE} and ${MAX_OCTAVE}`
    );
  }
  const [, noteName, _octave] = note.match(noteRegex) as RegExpMatchArray;

  const index = notes[noteName];
  const octave = parseInt(_octave);
  const distanceFromA4 = (octave - 4) * 12 + index;

  // Compute frequency based on the note name and octave, rounded to 2 decimals,
  // according to the formula: frequency = 2^(n/12) * 440 Hz
  return Math.round(A4 * Math.pow(2, (distanceFromA4 - 9) / 12) * 100) / 100;
};