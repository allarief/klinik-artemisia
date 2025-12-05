import { notFound } from "next/navigation";
import Image from "next/image";
import { articlesData } from "../../artikel/articlesData";

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params; // ⬅ FIX: tunggu params

  const article = articlesData.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      <Image
        src={article.image}
        width={800}
        height={500}
        alt={article.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />

      <article className="prose prose-lg text-justify whitespace-pre-line">
        {article.content}
      </article>
    </div>
  );
}
