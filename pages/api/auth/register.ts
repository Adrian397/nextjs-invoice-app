import connectMongoDB from "@/database/connection";
import Users from "@/model/schema";
import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

const registrationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  connectMongoDB().catch((err) => res.json({ error: "Connection failed!" }));

  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Empty form data" });
    const { username, email, password } = req.body;

    //check user duplication
    const doesExist = await Users.findOne({ email });
    if (doesExist)
      return res.status(422).json({ message: "This email is already in use" });

    try {
      //create user and hash password
      const user = await Users.create({
        username,
        email,
        password: await hash(password, 12),
      });
      res.status(201).json({ status: true, user });
    } catch (err) {
      res.status(404).json({ err });
    }
  } else {
    res.status(500).json({ message: "Wrong HTTP method" });
  }
};

export default registrationHandler;
