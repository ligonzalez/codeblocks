// app/api/route.js (App Router)
import { NextResponse } from 'next/server';
import { prisma } from "@/database"; // Your Prisma Client instance


export async function GET(request) {
    try {
        const data = await prisma.block.findMany(); // Example Prisma usage
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch blocks' }, { status: 500 });
    }
}

export async function POST(request) {
  const { title, code } = await request.json();
  console.log('Received data:', { title, code });
  try {
    const newCode = await prisma.block.create({
      data: {
        title,
        code,
      },
    });
    return NextResponse.json(newCode, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}