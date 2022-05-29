const { spawn } = require("child_process");

const startSream = (key, videoName) => {
  const arguments = [
    "-re",
    "-y",
    "-i",
    `${process.env.VIDEO_HOST}/${videoName}`,
    "-c:a",
    "copy",
    "-ac",
    "1",
    "-ar",
    "44100",
    "-b:a",
    "96k",
    "-vcodec",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-vf",
    "scale=-1:720",
    "-r",
    "30",
    "-g",
    "60",
    "-tune",
    "zerolatency",
    "-f",
    "flv",
    "-maxrate",
    "1000k",
    "-preset",
    "veryfast",
    key,
  ];

  const islem = spawn("ffmpeg", arguments);

  islem.stdout.on("data", (stdout) => {
    console.log(`Result: ${stdout}`);
  });

  islem.stderr.on("data", (stderr) => {
    console.log(`stderr: ${stderr}`);
  });
};

const apiIndex = async (req, res) => {
  res.status(200).send({ status: true, message: "Api server is runing" });
};

const stream = async (req, res) => {
  startSream(req.body.streamUrl, req.body.videoName);
  // res.status(200).send(req.body);
  // console.log(req.body);
};

module.exports = {
  apiIndex,
  stream,
};
