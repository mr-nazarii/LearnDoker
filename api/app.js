import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Hell yeah I did it!!!",
    },
    {
      id: "2",
      title: "Yeahhhhhh!!!!!!!",
    },
    {
      id: "3",
      title: "It worked",
    },
  ]);
});

app.listen(4000, () => console.log("The app is on port " + 4000));
