import axios from "axios";

const sendNotification = (message, recipientID) =>
  axios.post("http://localhost:4000", {
    url: "https://api.amazonalexa.com/v3/notifications",
    method: "post",
    headers: {
      Authorization:
        "Bearer Atza|IwEBIAXHchZvumHTWstlMD-36jHLGhkYieAP1KSpYtXq599w0CLuyqMwVpr2yNvXOQuCtN4efwD8-OQkQs1yJdrM62kHIMuh3cW4icGbBNsFsUA0AjX_e19BAX6ylfcknr8JMJTcvgRBcYlPc_usPfFHaPTsa14g-RGmPIVikJ3ARtnG8isY6no0nyvJiVovd5FaLCBZ67NTun342vxfiEsIKyvaDsxXDR3I0FAZ_3oWS1-fzWWTWlimPbZl_Bk8agCPehgruCi1A1NeE-bhJYhJS33ZMfUtPigOw7IBspaBsLY_3ILdYOc6tIltwmDGc45rlfAbgc8z8xN0QVb9mYFssxi9vbYt6eJEM7ZjA31YSeVgkXcftWVCLvC4TP9vdR8LhTuP6oQc8G4u2eSOCXjXRXCrStLmxhDytBRQdL5TUd29_w",
    },
    data: {
      recipients: [
        {
          type: "Unit",
          id: recipientID,
        },
      ],
      notification: {
        variants: [
          {
            type: "DeviceNotification",
            content: {
              variants: [
                {
                  type: "SpokenText",
                  values: [
                    {
                      locale: "en-US",
                      text: message,
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  });

export { sendNotification };
