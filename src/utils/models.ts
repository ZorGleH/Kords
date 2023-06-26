// Degrees
const DEGREES = ["A", "B", "C", "D", "E", "F", "G"] as const;
type Degree = (typeof DEGREES)[number];

// Accidentals
const ACCIDENTALS = ["#", "b", ""] as const;
type Accidental = (typeof ACCIDENTALS)[number];

// Octaves
const OCTAVES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const MIN_OCTAVE = OCTAVES.slice(0, 1)[0];
const MAX_OCTAVE = OCTAVES.slice(-1)[0];
type Octave = (typeof OCTAVES)[number];

// Compound note type
type Note = `${Degree}${Accidental}${Octave}`;

// Frequency type
type Frequency = number;

// A4 reference value
const A4 = 440;

// Note values
const NOTES: { [key: string]: number } = {
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

const NOTE_REGEX = /^([A-G][b#]?)([0-9]|10)$/;

export type { Note, Degree, Octave, Accidental, Frequency };
export {
  A4,
  MIN_OCTAVE,
  MAX_OCTAVE,
  NOTES,
  DEGREES,
  ACCIDENTALS,
  OCTAVES,
  NOTE_REGEX,
};
