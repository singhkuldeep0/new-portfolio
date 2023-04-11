import { articlesQuery } from '../../../utils/queries'
import {client} from '../../../sanity.cli'


export default async function handler(req , res){
    if(req.method === 'GET'){
        const query = articlesQuery();

        const data = await client.fetch(query)
        res.status(200).json(data)
    }
}