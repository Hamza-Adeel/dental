import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  ChevronRight, 
  Calendar, 
  ArrowRight, 
  Share2, 
  Bookmark, 
  Sparkles,
  CheckCircle2,
  Stethoscope
} from "lucide-react";
import { BLOG_POSTS_DATA } from "@/data/dental-data";
import BlogCard from "@/components/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | BrightSmile Dental Clinic Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header & Meta */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{post.category}</span>
          </nav>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200/60 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
                  <div className="text-slate-500">{post.author.title}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content & Featured Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Cover Photo */}
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-72 sm:h-96">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Body */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase text-slate-400 mr-2">Topic Tags:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Doctor Callout Box */}
        <div className="bg-teal-50/80 border border-teal-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
          />
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">Written & Medically Reviewed by {post.author.name}</h4>
            <p className="text-xs text-slate-600">
              {post.author.title} at BrightSmile Dental Clinic. Dedicated to patient education and evidence-based clinical practices.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="shrink-0 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-md"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <h3 className="text-2xl font-bold text-slate-900">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <BlogCard key={rel.id} post={rel} />
          ))}
        </div>
      </section>
    </div>
  );
}
