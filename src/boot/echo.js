import Echo from "laravel-echo";

import Pusher from "pusher-js";

import axios from "axios";

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "reverb",
  key: "1zvbcihcnyzbgkzkpwun",
  wsHost: "www.crediexpress.net",
  //   wsPort: 443,
  //   wssPort: 443,
  //   forceTLS: "https",
  enabledTransports: ["ws", "wss"],

  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        axios
          .post(
            "https://www.crediexpress.net/broadcasting/auth",
            {
              socket_id: socketId,
              channel_name: channel.name,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
              },
            },
          )
          .then((response) => {
            callback(false, response.data);
          })
          .catch((error) => {
            callback(true, error);
          });
      },
    };
  },
});
