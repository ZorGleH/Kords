// Ignore TS errors, as we want to test the error message
// @ts-nocheck

// Note frequencies from https://en.wikipedia.org/wiki/Scientific_pitch_notation#Table_of_note_frequencies

import {
  getFrequencyFromNote,
  getNoteFromFrequency,
  getHSLFromNote,
} from "./notes";

describe("getFrequencyFromNote", () => {
  it("should return the correct frequency for 3 different notes on the same octave", () => {
    expect(getFrequencyFromNote("C0")).toBe(16.35);
    expect(getFrequencyFromNote("C#1")).toBe(34.65);
    expect(getFrequencyFromNote("Db1")).toBe(34.65);
    expect(getFrequencyFromNote("D#3")).toBe(155.56);
    expect(getFrequencyFromNote("Eb3")).toBe(155.56);
    expect(getFrequencyFromNote("E4")).toBe(329.63);
    expect(getFrequencyFromNote("F5")).toBe(698.46);
    expect(getFrequencyFromNote("F#6")).toBe(1479.98);
    expect(getFrequencyFromNote("Gb6")).toBe(1479.98);
    expect(getFrequencyFromNote("G7")).toBe(3135.96);
    expect(getFrequencyFromNote("G#8")).toBe(6644.88);
    expect(getFrequencyFromNote("Ab8")).toBe(6644.88);
    expect(getFrequencyFromNote("A9")).toBe(14080.0);
    expect(getFrequencyFromNote("A#10")).toBe(29834.48);
    expect(getFrequencyFromNote("Bb10")).toBe(29834.48);
  });

  it("should throw an error if the note is invalid", () => {
    const errorMessage =
      "Invalid note, should begin with one of the following: C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#, Ab, A, A#, Bb, B, followed by an octave between 0 and 10";

    expect(() => getFrequencyFromNote()).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("H4")).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("")).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("5")).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("A")).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("A#")).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("A#-1")).toThrow(errorMessage);
    expect(() => getFrequencyFromNote("A#12")).toThrow(errorMessage);
  });
});

describe("getNoteFromFrequency", () => {
  it("should return the correct note for a given frequency", () => {
    expect(getNoteFromFrequency(16.35)).toBe("C0");
    expect(getNoteFromFrequency(34.65)).toBe("C#1");
    expect(getNoteFromFrequency(155.56)).toBe("D#3");
    expect(getNoteFromFrequency(329.63)).toBe("E4");
    expect(getNoteFromFrequency(698.46)).toBe("F5");
    expect(getNoteFromFrequency(1479.98)).toBe("F#6");
    expect(getNoteFromFrequency(3135.96)).toBe("G7");
    expect(getNoteFromFrequency(6644.88)).toBe("G#8");
    expect(getNoteFromFrequency(14080.0)).toBe("A9");
    expect(getNoteFromFrequency(29834.48)).toBe("A#10");
  });
});

describe("getHSLFromNote", () => {
  it("should return the correct HSL color for a given note", () => {
    expect(getHSLFromNote("C0")).toBe("hsl(0, 100%, 50%)");
    expect(getHSLFromNote("C#1")).toBe("hsl(30, 100%, 50%)");
    expect(getHSLFromNote("Db1")).toBe("hsl(30, 100%, 50%)");
    expect(getHSLFromNote("D#3")).toBe("hsl(90, 100%, 50%)");
    expect(getHSLFromNote("Eb3")).toBe("hsl(90, 100%, 50%)");
    expect(getHSLFromNote("E4")).toBe("hsl(120, 100%, 50%)");
    expect(getHSLFromNote("F5")).toBe("hsl(150, 100%, 50%)");
    expect(getHSLFromNote("F#6")).toBe("hsl(180, 100%, 50%)");
    expect(getHSLFromNote("Gb6")).toBe("hsl(180, 100%, 50%)");
    expect(getHSLFromNote("G7")).toBe("hsl(210, 100%, 50%)");
    expect(getHSLFromNote("G#8")).toBe("hsl(240, 100%, 50%)");
    expect(getHSLFromNote("Ab8")).toBe("hsl(240, 100%, 50%)");
    expect(getHSLFromNote("A9")).toBe("hsl(270, 100%, 50%)");
    expect(getHSLFromNote("A#10")).toBe("hsl(300, 100%, 50%)");
    expect(getHSLFromNote("Bb10")).toBe("hsl(300, 100%, 50%)");
    expect(getHSLFromNote("B10")).toBe("hsl(330, 100%, 50%)");
  });
});
