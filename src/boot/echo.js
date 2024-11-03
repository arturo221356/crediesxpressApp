import Echo from "laravel-echo";

import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "reverb",
  key: "1zvbcihcnyzbgkzkpwun",
  wsHost: "www.crediexpress.net",
  wsPort: process.env.REVERB_PORT ?? 443,
  wssPort: process.env.REVERB_PORT ?? 443,
  forceTLS: "https",
  enabledTransports: ["ws", "wss"],
});