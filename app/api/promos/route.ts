import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Promo } from "@/models/promos"; // Make sure the path is correct


const allowedOrigins = [
  "https://frontend-rho-jet-76.vercel.app",
  "https://book-website-rho-sooty.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
];

export function withCORS(res: NextResponse, req: NextRequest): NextResponse {
  const origin = req.headers.get("origin");
  if (origin && (allowedOrigins.includes(origin) || process.env.NODE_ENV === "development")) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res;
}


export const revalidate = 0;

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const newPromo = new Promo(body);
        await newPromo.save();
        return NextResponse.json({ success: true, data: newPromo });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectToDatabase();
        const promos = await Promo.find({});
        return NextResponse.json(promos, { status: 200 });
    } catch (error) {
        console.error("GET error:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const data = await req.json();

        if (!id) {
            return NextResponse.json({ success: false, message: "ID missing" }, { status: 400 });
        }

        const updatedPromo = await Promo.findByIdAndUpdate(id, data, { new: true });
        if (!updatedPromo) {
            return NextResponse.json({ success: false, message: "Promo not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "Promo updated", data: updatedPromo }, { status: 200 });
    } catch (error) {
        console.error("PUT error:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ success: false, message: "ID missing" }, { status: 400 });
        }

        const deletedPromo = await Promo.findByIdAndDelete(id);
        if (!deletedPromo) {
            return NextResponse.json({ success: false, message: "Promo not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "Promo deleted" }, { status: 200 });
    } catch (error) {
        console.error("DELETE error:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}