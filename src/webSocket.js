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
		streamUrl: `rtsp://admin:Tendus2021@192.168.15.31:554/cam/realmonitor?channel=${channel}&subtype=0&unicast=true`,
		wsPort: 9999,
		ffmpegOptions: {
			"-stats": "",
			"-r": 30,
			"-vf": "scale=640:480",
			"-bf": 0,
			"-c:v": "h264",
			"-rtsp_transport": "tcp",
			"-f": "image2pipe",
			"-vcodec": "mjpeg",
			"-q:v": 2,
		},
	});

	res.json({
		error: false,
		massage: `Start stream in Channel: ${channel}`,
	});
});

app.get("/end-stream", (req, res) => {
	if (stream) {
		stream.stop();
		res.send("Connection closed");
	} else {
		res.send("Nenhuma conexão para encerrar");
	}
});

app.listen(3010, () => {
	console.log("Server WEBSOCKET running");
});
