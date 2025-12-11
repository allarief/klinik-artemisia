import Image from "next/image";
import Link from "next/link";
import { articlesData } from "./articlesData";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-4 py-10 flex-1">
        <h1 className="text-3xl font-bold text-center mb-10">
          Artikel Kesehatan
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD ARTIKEL */}
          {articlesData.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={article.image}
                width={500}
                height={300}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 text-sm">{article.excerpt}</p>
              </div>
            </Link>
          ))}

          {/* ALWAYS SHOW 1 COMING SOON */}
          <div className="bg-gray-100 border border-gray-300 shadow-inner rounded-lg h-56 flex flex-col items-center justify-center">
            <p className="text-gray-700 text-lg font-semibold">Coming Soon</p>
            <p className="text-gray-500 text-sm mt-1">Konten akan segera hadir</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 shadow-inner rounded-lg h-56 flex flex-col items-center justify-center">
            <p className="text-gray-700 text-lg font-semibold">Coming Soon</p>
            <p className="text-gray-500 text-sm mt-1">Konten akan segera hadir</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 shadow-inner rounded-lg h-56 flex flex-col items-center justify-center">
            <p className="text-gray-700 text-lg font-semibold">Coming Soon</p>
            <p className="text-gray-500 text-sm mt-1">Konten akan segera hadir</p>
          </div>
        </div>
      </div>
    </div>
  );
}
