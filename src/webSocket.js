const express = require("express");
const cors = require("cors");
const Stream = require("node-rtsp-stream");
const http = require("http");

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(3010, ()=>{

  console.log("Server WEBSOCKET running");

  stream = new Stream({
    streamUrl: 'rtsp://admin:Tendus2021@192.168.15.10:554/cam/realmonitor?channel=1&subtype=0&unicast=true',
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