import type { NextApiRequest , NextApiResponse} from 'next'
import { allProjectsQuery } from '../../../utils/queries'
import {client} from '../../../sanity.cli'


export default async function handler(req:NextApiRequest , res:NextApiResponse){
    if(req.method === 'GET'){
        const query = allProjectsQuery();

        const data = await client.fetch(query)
        res.status(200).json(data)
    }
}