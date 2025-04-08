import http from "http";
import { getSystemInfo } from "./utils.js";

const server = http.createServer((req, res) => {
  const systemInfo = getSystemInfo();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(systemInfo, null, 2));
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
