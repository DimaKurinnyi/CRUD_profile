import Post from '@/models/Post';
import connect from '@/utils/db';
import { GetStaticPropsContext } from 'next';
import { NextResponse } from 'next/server';

 type ParamsType= {
    params:{id: string}
 }

export const GET = async (request:any,{params}:ParamsType) => {
    const {id} =params
  try{
    await connect()
    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post),{status:200})
  }catch(err){return new NextResponse('Error', { status: 500 });}
  
};
export const DELETE = async (request:any,{params}:ParamsType) => {
  const {id} =params
try{
  await connect()
   await Post.findByIdAndDelete(id)

  return new NextResponse('Post has been deleted ',{status:200})
}catch(err){return new NextResponse('Error', { status: 500 });}

};