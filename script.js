import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 211,
  duration: "10s",
};

export default function() {
  http.get("http://localhost:3002/api/rooms/100000/images");
  sleep(1);
};