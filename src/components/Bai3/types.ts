// src/components/News/types.ts

export interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    publishedAt: string;
    url: string;
    imageUrl: string;
}

export interface NewsResponse {
    articles: NewsArticle[];
}