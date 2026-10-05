import { NextResponse } from "next/server";
import db from "@repo/db/client";

export const dynamic = "force-dynamic";

export const POST = async () => {
  const user = await db.user.create({
    data: {
      email: "asd",
      name: "adsads",
      number: "1234567890",
      password: "test123",
    },
  });

  return NextResponse.json({
    message: "User created successfully",
    user,
  });
};