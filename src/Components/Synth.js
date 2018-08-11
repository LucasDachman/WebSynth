import React from 'react'
import WebMidi from 'webmidi';
import MidiUtils from '../Utils/MidiUtils.js'

export default class Synth extends React.Component {

  componentDidMount() {
    MidiUtils.enable((success) => {
      if (success) {
        const inputs = MidiUtils.devicesNames();
        this.setState({ devicesNames: inputs });
        this.input = WebMidi.getInputByName(inputs[0]);
        this.addListeners();
      }
    });
  }

  render() {
    return <div>Hi</div>;
  }

  addListeners() {

    this.input.addListener('noteon', 'all', (e) => {
      console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
    });

    this.input.addListener('noteoff', 'all', (e) => {
      console.log("Received 'noteoff' message (" + e.note.name + e.note.octave + ").");
    });

  }


}