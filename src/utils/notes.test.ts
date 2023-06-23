// Ignore TS errors, as we want to test the error message
// @ts-nocheck
import { getFrequencyFromNote } from "./notes";

describe("getFrequencyFromNote", () => {
  it("should return the correct frequency for 3 different notes on the same octave", () => {
    expect(getFrequencyFromNote("A4")).toBe(440);
    expect(getFrequencyFromNote("B4")).toBe(493.88);
    expect(getFrequencyFromNote("C4")).toBe(261.63);
  });

  it("should return the correct frequency for the same note on 3 different octaves", () => {
    expect(getFrequencyFromNote("A3")).toBe(220);
    expect(getFrequencyFromNote("A5")).toBe(880);
    expect(getFrequencyFromNote("A6")).toBe(1760);
  });

  it("should return the correct frequency for 4 different accidental notes (2 sharp and 2 flat)", () => {
    expect(getFrequencyFromNote("A#4")).toBe(466.16);
    expect(getFrequencyFromNote("Bb4")).toBe(466.16);
    expect(getFrequencyFromNote("C#4")).toBe(277.18);
    expect(getFrequencyFromNote("Db4")).toBe(277.18);
  });

  it("should return the correct frequency for edge cases lowest and highest notes", () => {
    expect(getFrequencyFromNote("C0")).toBe(16.35);
    expect(getFrequencyFromNote("G10")).toBe(25087.71);
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
