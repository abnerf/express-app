import app from "./app";

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log("### App is running at http://localhost:%d", PORT);
  console.log("### Press CTRL-C to stop\n");
});

export default server;
