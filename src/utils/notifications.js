import axios from "axios";

const sendNotification = (accessToken, message, recipientID) =>
  axios.post("http://localhost:4000", {
    url: "https://api.amazonalexa.com/v3/notifications",
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
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
