"use client";

import { Card } from "@/components/ui/card";

import BlogForm from "@/components/forms/BlogForm";
import Image from "next/image";
export default function AboutPage() {
  function BlogCard({
    title,
    excerpt,
    date,
    author,
  }: {
    title: string;
    excerpt: string;
    date: string;
    author:string;
  }) {
    return (
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <time className="text-sm text-gray-500">{date}</time>
        <p className="text-gray-600 float-right">{author}</p>
      </Card>
    );
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" container px-4 mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About DocTime
        </h1>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-slate-50">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize healthcare accessibility by connecting patients
              with qualified medical professionals through a seamless digital
              platform, ensuring timely and efficient medical consultations for
              everyone.
            </p>
             <Image
                     src="/assets/images/mission.jpg"
                     height={1000}
                     width={1000}
                     alt="patient"
                     className="p-20 rounded-lg hover:scale-105 hover:duration-1000"
                   />
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-slate-50">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the leading global telemedicine platform, where quality
              healthcare is just a click away, breaking down geographical
              barriers and making professional medical care accessible to all.
            </p>
            <Image
          src="/assets/images/vision.jpg"
          height={1000}
          width={1000}
          alt="patient"
           className="p-20 rounded-lg hover:scale-105 hover:duration-1000"
        />
          </Card>
  
        </div>

        {/* Blog Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Trending Blogs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white hover:scale-105 duration-500">
              <BlogCard
                title="Understanding Telemedicine"
                excerpt="Learn how telemedicine is transforming healthcare delivery in the modern age..."
                date="Jan 8, 2024"
                author="Sonali Sharma"
              />
            </div>
            <div className="bg-white hover:scale-105 duration-500">
              <BlogCard
                title="Healthcare at Your Fingertips"
                excerpt="Discover how DocTime is making healthcare accessible to everyone..."
                date="Jan 7, 2024"
                author="Mohammad Imran"
              />
            </div>
            <div className="bg-white hover:scale-105 duration-500">
              <BlogCard
                title="The Future of Digital Health"
                excerpt="Explore the latest trends and innovations in digital healthcare..."
                date="Jan 6, 2024"
                author="Ajmal Khan"
              />
            </div>
          </div>
        </section>

        {/* Blog Submission Form */}
        <section className="mx-auto w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">
            Submit a Blog Post and get a chance to be featured on our page.
          </h2>
          <BlogForm />
        </section>
      </section>
    </div>
  );
}
