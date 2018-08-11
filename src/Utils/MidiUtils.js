import WebMidi from 'webmidi';
import _ from 'lodash';

let WebMidiEnabled = false;

const MidiUtils = {

  enable(callback) {
    WebMidi.enable(function (err) {
      if (err) {
        console.log("WebMidi could not be enabled." + err);
        const WebMidiEnabled = false;
        callback(false);
      } else {
        console.log("WebMidi enabled");
        console.log(WebMidi.inputs);
        callback(true);
      }
    });
  },

  devicesNames() {
    const names =  _.map(WebMidi.inputs, (inp) => inp.name);
    console.log(names);
    return names;
  }

};

export default MidiUtils;
