import React from "react";
import styled from "styled-components";
import { Note, OCTAVES } from "../utils/models";
import { getHSLFromNote } from "../utils/notes";
import { map } from "lodash";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ccc;

  thead {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;

    th {
      padding: 0.5rem;
      width: 100px;
    }
  }

  tbody {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    text-align: center;

    tr {
      border-bottom: 1px solid #ccc;
    }

    td {
      padding: 0.5rem;
      width: 100px;
    }
  }
`;

const NOTES_WITH_ACCIDENTAL = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const NoteTable = () => (
  <Root>
    <Table>
      <thead>
        <tr>
          <th>Note</th>
          {map(OCTAVES, (octave) => (
            <th key={octave}>{octave}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {map(NOTES_WITH_ACCIDENTAL, (note) => (
          <tr key={note}>
            <td>{note}</td>
            {map(OCTAVES, (octave) => (
              <td
                key={octave}
                style={{
                  backgroundColor: getHSLFromNote((note as Note) + octave),
                }}
              >
                {note + octave}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  </Root>
);
