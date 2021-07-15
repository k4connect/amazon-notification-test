import "./App.css";
import { TextField, Snackbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { sendNotification } from "./utils/notifications";
import { ACCESS_TOKEN, RECIPIENT_ID } from "./constants";

const App = () => {
  const [isSending, setIsSending] = useState(false);
  const [wasSent, setWasSent] = useState(false);
  const [message, setMessage] = useState("This is a test notification");
  const [recipientID, setRecipientID] = useState(RECIPIENT_ID);
  const [accessToken, setAccessToken] = useState(ACCESS_TOKEN);
  const [resultMessage, setResultMessage] = useState("");

  const handleSendNotification = () => {
    setIsSending(true);
    sendNotification(accessToken, message, recipientID)
      .then(() => {
        setResultMessage("The notification was sent!");
      })
      .catch(() => {
        setResultMessage("There was an error sending the notification");
      })
      .finally(() => {
        setIsSending(false);
        setWasSent(true);
      });
  };

  return (
    <div className="App">
      <h2>NOTIFICATION SENDING TEST</h2>
      <TextField
        label="Recipient ID"
        helperText="Enter the recipient ID you want to send the notification to"
        value={recipientID}
        onChange={(e) => setRecipientID(e.target.value)}
        style={{ width: "90%", marginBottom: 50 }}
      />
      <TextField
        label="Access Token"
        helperText="Enter the Access Token"
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
        style={{ width: "90%", marginBottom: 50 }}
      />
      <TextField
        label="Notification message"
        helperText="Type the message you want to sent to the recipient"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={5}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 30 }}
        onClick={handleSendNotification}
        disabled={isSending || wasSent}
      >
        {isSending ? "Sending, please wait..." : "Send notification"}
      </Button>
      <Snackbar open={!!resultMessage} message={resultMessage} />
    </div>
  );
};

export default App;
