import { NextApiRequest , NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    // Logic to fetch data from DB
    res.status(200).json({name : "hello"});
}