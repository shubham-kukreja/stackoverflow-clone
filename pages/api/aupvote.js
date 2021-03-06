import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { body } = req.query;
  console.log("body", body);
  let doc = await req.db
    .collection("questions")
    .findOne(
      { "answers.body": body },
      { $inc: { "answers.0.upvotes": 1 } }
    );
  res.json(doc);
});

export default (req, res) => handler.apply(req, res);
