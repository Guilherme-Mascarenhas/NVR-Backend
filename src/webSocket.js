const express = require("express");
const cors = require("cors");
const Stream = require("node-rtsp-stream");

let stream;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/start-stream/:channel", (req, res) => {
	const { channel } = req.params;

	if (stream) {
		stream.stop();
	}

  stream = new Stream({
    streamUrl: 'rtsp://admin:"password"@"IP":"Port"/cam/realmonitor?channel=1&subtype=0&unicast=true',
    wsPort: 9999,
    ffmpegOptions:{
      '-stats':'',
      '-r': 30,
      '-vf': 'scale=640:480',
      '-bf': 0, 
      '-c:v': 'h264',
      '-rtsp_transport': 'tcp',
      '-f': 'image2pipe',
      '-vcodec': 'mjpeg',
      '-q:v': 2,
    }
  });
});