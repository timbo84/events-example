import { connectDatabase, insertDocument } from "@/helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        message: "invalid email address.",
      });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ Message: "connecting to the database failed!" });
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
    } catch (error) {
      res.status(500).json({ Message: "inserting data failed!" });
    }

    res.status(201).json({ message: "Signed Up!" });
  }
}

export default handler;
