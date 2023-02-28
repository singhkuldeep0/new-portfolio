import type { NextApiRequest , NextApiResponse} from 'next'
import { projectDetailQuery } from '../../../utils/queries'
import {client} from '../../../sanity.cli'


export default async function handler(req:NextApiRequest , res:NextApiResponse){
    if(req.method === 'GET'){
        const { id } = req.query
        const query = projectDetailQuery(id);

        const data = await client.fetch(query)
     
        res.status(200).json(data[0])
    }
}