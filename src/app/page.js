"use client";
import { useEffect, useState } from "react";
import { Search, Star, Globe2, Sun } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const apiKey = process.env.NEXT_PUBLIC_NASA_KEY;
console.log("API Key:", process.env.NEXT_PUBLIC_NASA_KEY);
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

const DATA = [
  {
    name: "Mercury",
    type: "Planet",
    radius: "2,439.7 km",
    distance: "57.9 million km from the Sun",
    info: "Mercury is the smallest planet in our solar system and closest to the Sun.",
  },
  {
    name: "Venus",
    type: "Planet",
    radius: "6,051.8 km",
    distance: "108.2 million km from the Sun",
    info: "Venus has a thick, toxic atmosphere and is the hottest planet in our solar system.",
  },
  {
    name: "Earth",
    type: "Planet",
    radius: "6,371 km",
    distance: "149.6 million km from the Sun",
    info: "Earth is the only planet known to support life, with vast oceans and diverse ecosystems.",
  },
  {
    name: "Mars",
    type: "Planet",
    radius: "3,389.5 km",
    distance: "227.9 million km from the Sun",
    info: "Mars is known as the Red Planet due to its reddish appearance, caused by iron oxide on its surface.",
  },
  {
    name: "Jupiter",
    type: "Planet",
    radius: "69,911 km",
    distance: "778.5 million km from the Sun",
    info: "Jupiter is the largest planet in our solar system and has a strong magnetic field.",
  },
  {
    name: "Saturn",
    type: "Planet",
    radius: "58,232 km",
    distance: "1.4 billion km from the Sun",
    info: "Saturn is famous for its stunning ring system, composed of ice and rock particles.",
  },
];

export default function GalaxyPage() {
  const [query, setQuery] = useState("");
  const [apod, setApod] = useState({});

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
        options
      );

      if (!response.ok) {
        // This handles 504, 403, 429, etc.
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched APOD:", data);
      setApod(data);
    } catch (error) {
      console.error("Error fetching APOD:", error);
      // Optional fallback to demo data
      setApod({
        title: "Unable to fetch NASA APOD",
        url: "https://via.placeholder.com/600x400?text=NASA+APOD+Unavailable",
        explanation:
          "The NASA APOD API could not be reached. Please try again later.",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const filtered = DATA.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white p-8">
      <header className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
          <Sun className="text-yellow-400" /> Galaxy Explorer
        </h1>
        <p className="text-gray-400 mt-2">
          Learn about stars, suns, and planets in our universe.
        </p>
      </header>

      <div className="max-w-xl mx-auto mb-10 flex items-center gap-2">
        <Input
          placeholder="Search for a planet or star..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white/10 border border-white/20 text-white placeholder-gray-400"
        />
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Search />
        </Button>
      </div>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((item, index) => (
          <Card
            key={index}
            className="bg-white/5 border border-white/10 hover:border-blue-400 transition-all duration-200"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                {item.type === "Planet" ? (
                  <Globe2 className="text-green-400" />
                ) : (
                  <Star className="text-yellow-400" />
                )}
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold text-gray-100">Type:</span>{" "}
                {item.type}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold text-gray-100">Radius:</span>{" "}
                {item.radius}
              </p>
              <p className="text-sm text-gray-300 mb-3">
                <span className="font-semibold text-gray-100">Distance:</span>{" "}
                {item.distance}
              </p>
              <p className="text-sm text-gray-400">{item.info}</p>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="text-center text-gray-500 mt-16 text-sm">
        © {new Date().getFullYear()} Galaxy Explorer. All rights reserved.
      </footer>
    </div>
  );
}
