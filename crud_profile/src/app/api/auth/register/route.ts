import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
  try {
    const { name, email, password } = await request.json();
    console.log(name, email, password);
    const hashedPassword = await bcrypt.hash(password, 5);
    await connect();
    
    await User.create({ name, email, password: hashedPassword });
    
    return NextResponse.json({message:'User has been created'}, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
