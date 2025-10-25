import { url } from "inspector";
import React from "react";
import Link from "next/link";
import { Article } from "@/utils/types";
import ArticleItem from "../components/articles/ArticleItem";

const ArticlePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok){
    throw new Error("Failed to fetch articles .. ")
  }

  const articles: Article[] = await res.json();
  return (
    <section className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ArticlePage;
