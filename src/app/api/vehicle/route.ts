import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { registrationNumber } = await req.json();

    if (!registrationNumber) {
      return NextResponse.json(
        { error: "Missing registration number" },
        { status: 400 }
      );
    }

    const dvlaRes = await fetch(
      "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.DVLA_API_KEY as string,
        },
        body: JSON.stringify({ registrationNumber }),
      }
    );

    if (!dvlaRes.ok) {
      return NextResponse.json(
        { error: "DVLA lookup failed" },
        { status: dvlaRes.status }
      );
    }

    const data = await dvlaRes.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}