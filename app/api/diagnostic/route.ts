import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.company) {
      return NextResponse.json(
        { success: false, error: "Missing required contact fields (name, email, company)." },
        { status: 400 }
      );
    }

    // In production, this can forward to a CRM, webhook, or Postgres database.
    console.log("[Velora Diagnostic Submission Received]:", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      employees: data.employees,
      dailyTrips: data.dailyTrips,
      vendorCount: data.vendorCount,
      etms: data.etms,
      biggestChallenge: data.biggestChallenge,
      shareData: data.shareData,
    });

    return NextResponse.json({
      success: true,
      message: "Diagnostic request successfully received. The Velora team will review your operational profile.",
      referenceId: `VEL-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: "Internal server error processing submission." },
      { status: 500 }
    );
  }
}
