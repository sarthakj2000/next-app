import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Await the findUnique call
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  // Create a new user with the correct data structure
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword, // TypeScript should correctly infer the type here
    },
  });

  return NextResponse.json({ email: newUser.email });
}
