// pages/api/test.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const testData = [
      { id: 1, name: "Sample Book", author: "Test Author" },
      { id: 2, name: "Sample Promo", isActive: true }
    ];

    return NextResponse.json(testData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}