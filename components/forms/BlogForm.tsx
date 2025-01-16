import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { Send } from 'lucide-react';
import { createBlog } from '@/lib/actions/blog.action';
import { z } from 'zod';
import { BlogFormValidation } from '@/lib/validation';

const BlogForm = () => {
  const [fullname, setFullname] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [blogcontent, setContent] = useState('');
  const [errors, setErrors] = useState<{
    fullname?: { _errors: string[] };
    title?: { _errors: string[] };
    category?: { _errors: string[] };
    blogcontent?: { _errors: string[] };
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);

    const blog = {
      fullname,
      title,
      category,
      blogcontent,
    };

    // Validate form data
    const validation = BlogFormValidation.safeParse(blog);
    if (!validation.success) {
      setErrors(validation.error.format());
      setIsLoading(false);
      return;
    }

    try {
      const newBlog = await createBlog(blog);
      console.log("blog data: ", newBlog);
      setFullname('');
      setTitle('');
      setCategory('');
      setContent('');
      // Show success alert
      alert('Blog post submitted successfully!');
    } catch (error) {
      console.log("creating blog", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="fullname">
            Full Name
          </label>
          <Input
            id="fullname"
            placeholder="Enter your full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className='text-white'
          />
          {errors.fullname && (
            <div className="text-red-500 text-sm">{errors.fullname._errors.join(', ')}</div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Blog Title
          </label>
          <Input
            id="title"
            placeholder="Enter your blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
             className='text-white'
          />
          {errors.title && (
            <div className="text-red-500 text-sm">{errors.title._errors.join(', ')}</div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="category">
            Category
          </label>
          <Input
            id="category"
            placeholder="e.g., Healthcare, Technology, Wellness"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
             className='text-white'
          />
          {errors.category && (
            <div className="text-red-500 text-sm">{errors.category._errors.join(', ')}</div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="blogcontent">
            Blog Content
          </label>
          <Textarea
            id="blogcontent"
            placeholder="Write your blog content here..."
            className="min-h-[200px] text-white"
            value={blogcontent}
            onChange={(e) => setContent(e.target.value)}
            
          />
          {errors.blogcontent && (
            <div className="text-red-500 text-sm">{errors.blogcontent._errors.join(', ')}</div>
          )}
        </div>
        <Button type="submit" className="w-full bg-orange-400 text-white hover:bg-blue-900">
          {isLoading ? 'Submitting...' : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Blog Post
            </>
          )}
        </Button>
      </form>
    </section>
  );
};

export default BlogForm;
