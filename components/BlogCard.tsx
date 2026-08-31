import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, User } from "lucide-react";
import { BlogPost } from "@/data/dental-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover-lift flex flex-col justify-between transition-all">
      <div>
        {/* Cover Photo */}
        <Link href={`/blog/${post.slug}`} className="block relative h-52 w-full overflow-hidden bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-800 shadow-sm">
            {post.category}
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Author & Read More */}
      <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-7 h-7 rounded-full object-cover border border-slate-200"
          />
          <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
