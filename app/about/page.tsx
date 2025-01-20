"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card } from "@/components/ui/card";

import BlogForm from "@/components/forms/BlogForm";
import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  const faqs = [
    {
      trigger: "Can I access DocTime on my mobile device?",
      content: " Yes, DocTime is a mobile-friendly platform and can be accessed on any device with a web browser. We are also working on a dedicated mobile app for enhanced user experience.",
    },
    {
      trigger: "Is my data secure?",
      content: "Absolutely. We use end-to-end encryption and comply with healthcare data protection standards to ensure your information is safe.",
    },
    {
      trigger: "Can I consult a doctor virtually through DocTime?",
      content: "Yes, we offer telemedicine features like video consultations. You can book a virtual appointment with your preferred doctor through the platform.",
    },
    {
      trigger: "How do I book or cancel an appointment?",
      content: "To book an appointment, go to the Appointments section, select your doctor, and choose a date and time. To cancel, navigate to your scheduled appointments and click on the Cancel button.",
    },
    {
      trigger: "How do I reset my password?",
      content: "Go to the Login page, click on Forgot Password, and follow the instructions to reset your password.",
    },
    {
      trigger: "Is there any AI assistance?",
      content: "Yes, it is under development. Soon it will be live on our website.",
    },
    
  ];
  function BlogCard({
    title,
    excerpt,
    date,
    author,
  }: {
    title: string;
    excerpt: string;
    date: string;
    author: string;
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8" style={{background:"linear-gradient(to right, white , pink  )"}}>
          About DocTime <Link href="/" className="text-blue-600 text-sm float-right m-2">
          Home
        </Link>
        </h1>
        {/* Link for home  */}
       
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-fuchsia-950 font-serif">
          Faq(Frequently Asked Questions)
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold mb-4">
                  {faq.trigger}
                </AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

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
