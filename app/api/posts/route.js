import { NextResponse } from "next/server"
import connect from '@/utils/db'
import Post from '@/models/Post'

export const GET = async (req) => {

    try{
        await connect();

        const posts = await Post.find();
        return new NextResponse(posts, {status: 200})
    }catch(err){
        return new NextResponse('bad', {status: 500})
    }
}