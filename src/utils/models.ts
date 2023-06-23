type Degree = "A" | "B" | "C" | "D" | "E" | "F" | "G";

type Accidental = "#" | "b" | "";

type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type Note = `${Degree}${Accidental}${Octave}`;

type Frequency = number;

const A4 = 440;
const MIN_OCTAVE = 0;
const MAX_OCTAVE = 10;
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

export type { Note, Degree, Octave, Accidental, Frequency };
export { A4, MIN_OCTAVE, MAX_OCTAVE, NOTES };
