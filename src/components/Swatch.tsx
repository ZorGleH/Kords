import React, { useState } from "react";
import { Frequency, Note, NOTES, ACCIDENTALS, OCTAVES } from "../utils/models";
import {
  getHSLFromNote,
  getNoteFromFrequency,
  getFrequencyFromNote,
} from "../utils/notes";
import styled from "styled-components";

interface Props {
  /**
   * A music note between C0 and B10
   */
  note?: Note;
  /**
   * A frequency as a positive float
   */
  frequency?: Frequency;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  width: 200px;
  background-color: #fff;

  legend {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  input[type="text"],
  label {
    font: inherit;
    text-align: center;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    &:focus {
      outline: none;
      border-bottom: 1px solid #000;
    }
  }
`;

/**
 * A music note swatch
 */
export const NoteSwatch = ({ note, frequency }: Props) => {
  const [_note, setNote] = useState<Note | undefined>(
    note ? note : frequency ? getNoteFromFrequency(frequency) : undefined
  );

  const [_frequency, setFrequency] = useState<Frequency | undefined>(
    frequency ? frequency : note ? getFrequencyFromNote(note) : undefined
  );

  return (
    <Root style={{ backgroundColor: getHSLFromNote(_note) }}>
      <Fieldset>
        <legend>Note</legend>
        <input
          type="text"
          pattern="^[A-G][#b]?[0-9]$"
          value={_note}
          onChange={(e) => {
            const note = e.target.value as Note;
            setNote(note);
            setFrequency(getFrequencyFromNote(note));
          }}
        />
      </Fieldset>
      <Fieldset>
        <legend>Frequency</legend>
        <input
          type="range"
          min={16}
          max={32000}
          value={_frequency}
          onChange={(e) => {
            const frequency = parseInt(e.target.value);
            setFrequency(frequency);
            setNote(getNoteFromFrequency(frequency));
          }}
        />
        <label>{_frequency} Hz</label>
      </Fieldset>
    </Root>
  );
};
