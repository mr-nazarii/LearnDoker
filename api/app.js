import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "5",
      title: "Hello Breakfast",
    },
    {
      id: "2",
      title: "Hello Lunch",
    },
    {
      id: "3",
      title: "Hello Dinner",
    },
  ]);
});

app.listen(4000, () => console.log("The app is listening on port " + 4000));
