import { Product } from "@/models/Product"
import { connectToDB } from "@/utils/database"

// import type { NextApiRequest, NextApiResponse } from 'next'

// export const config = {
//     runtime: 'edge',
// };
 
export default async function handler(req, res) {

    const { skip } = req.query

  if (req.method === 'GET') {
    try {
        await connectToDB()

        // const posts = await Post.find({}).populate('user')
        const products = await Product.find({}, null, {
            sort: { '_id': -1 },
          }).skip(parseInt(skip)).limit(9);

        res.status(200).json(JSON.stringify(products))

        // return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        res.status(500).json("Failed to fetch all posts")
        // return new Response("Failed to fetch all posts", { status: 500 })
    }
  } else {
    // Handle any other HTTP method
  }
}