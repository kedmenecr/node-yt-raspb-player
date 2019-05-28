const fs = require('fs');
const portAudio = require('naudiodon');
 
// Create an instance of AudioIO with outOptions, which will return a WritableStream
var ao = new portAudio.AudioIO({
  outOptions: {
    channelCount: 2,
    sampleFormat: portAudio.SampleFormat16Bit,
    deviceId: -1 // Use -1 or omit the deviceId to select the default device
  }
});
 
// Create a stream to pipe into the AudioOutput
// Note that this does not strip the WAV header so a click will be heard at the beginning
var rs = fs.createReadStream('test.wav');
 
// Start piping data and start streaming
rs.pipe(ao);
ao.start();