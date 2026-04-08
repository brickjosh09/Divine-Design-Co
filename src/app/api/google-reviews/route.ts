import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

export async function GET() {
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    return NextResponse.json({ reviews: null, error: "Google API not configured" });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    const data = await res.json();

    if (data.result) {
      return NextResponse.json({
        reviews: data.result.reviews || [],
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
      });
    }

    return NextResponse.json({ reviews: null, error: "No results found" });
  } catch {
    return NextResponse.json({ reviews: null, error: "Failed to fetch reviews" });
  }
}
