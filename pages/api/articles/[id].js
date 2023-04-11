import { articleDetailQuery } from '../../../utils/queries'
import {client} from '../../../sanity.cli'


export default async function handler(req , res){
    if(req.method === 'GET'){
        const { id } = req.query
        console.log(id)
        const query = articleDetailQuery(id);

        const data = await client.fetch(query)
     
        res.status(200).json(data[0])
    }
}