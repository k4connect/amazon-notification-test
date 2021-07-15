import "./App.css";
import { TextField, Snackbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { sendNotification } from "./utils/notifications";

const App = () => {
  const [isSending, setIsSending] = useState(false);
  const [wasSent, setWasSent] = useState(false);
  const [message, setMessage] = useState("This is a test notification");
  const [recipientID, setRecipientID] = useState(
    "amzn1.alexa.unit.did.AGAGPJ34FLNNVIR76DCG3SSMN6QBCYZ5G6P6HSADPBLYGCMEK7GJVKO2Z4PWLSYHKIR2O3MXX3XPVVFWVYKH74FMHDFIX3544ZXX5IMB"
  );
  const [resultMessage, setResultMessage] = useState("");

  const handleSendNotification = () => {
    setIsSending(true);
    sendNotification(resultMessage, recipientID)
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
