import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User2, Share2, Copy, CheckCircle2, AlertCircle, Twitter, Linkedin, Facebook } from 'lucide-react';

const dockerCommands = [
  {
    name: 'List all running containers',
    command: 'docker ps',
    description: 'Shows all containers that are currently running'
  },
  {
    name: 'List all containers',
    command: 'docker ps -a',
    description: 'Shows all containers (running and stopped)'
  },
  {
    name: 'Start a container',
    command: 'docker run -d nginx',
    description: 'Starts an Nginx container in detached mode'
  },
  {
    name: 'Stop a container',
    command: 'docker stop <container_id>',
    description: 'Stops a running container'
  },
  {
    name: 'Remove a container',
    command: 'docker rm <container_id>',
    description: 'Removes a stopped container'
  },
  {
    name: 'Clean up system',
    command: 'docker system prune',
    description: 'Removes unused data (stopped containers, unused networks, dangling images)'
  }
];

const faqs = [
  {
    question: 'What is Docker container management?',
    answer: 'Docker container management refers to the practice of organizing, deploying, and maintaining Docker containers throughout their lifecycle in a production environment.'
  },
  {
    question: 'Why is container management important?',
    answer: 'Effective container management ensures optimal resource utilization, improved security, and seamless scaling of applications in production environments.'
  },
  {
    question: 'What are the best practices for Docker in production?',
    answer: 'Key practices include using official base images, implementing proper security measures, regular updates and maintenance, and efficient resource management.'
  }
];

const BlogPost = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const { blogId } = useParams();

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071"
          alt="Docker Containers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <Link
              to="/blogs"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Docker Container Management: Master the Art of Containerization
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
              <div className="flex items-center">
                <User2 className="w-4 h-4 mr-2" />
                Azfar Alam
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                March 10, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                7 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Social Share */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-gray-400">Share this article:</span>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              In today's fast-paced development environment, mastering Docker container management
              is crucial for maintaining efficient and scalable applications. This comprehensive
              guide will walk you through essential concepts, best practices, and practical
              commands for managing Docker containers in production.
            </p>

            <h2 className="text-2xl font-bold mb-4">What Are Docker Containers?</h2>
            <p className="text-gray-300 mb-8">
              Docker containers are lightweight, standalone, and executable packages that include
              everything needed to run a piece of software, including the code, runtime,
              system tools, libraries, and settings. They ensure consistency across different
              development and production environments.
            </p>

            <h2 className="text-2xl font-bold mb-4">Benefits of Docker in Production</h2>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              <li className="mb-2">Consistent environments across development and production</li>
              <li className="mb-2">Improved resource utilization and scaling</li>
              <li className="mb-2">Faster deployment and easier maintenance</li>
              <li className="mb-2">Better isolation and security</li>
            </ul>

            {/* Commands Section */}
            <h2 className="text-2xl font-bold mb-4">Essential Docker Commands</h2>
            <div className="space-y-4 mb-8">
              {dockerCommands.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/10 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={() => handleCopyCommand(item.command)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {copiedCommand === item.command ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <code className="block bg-black/50 rounded p-2 font-mono text-sm mb-2">
                    {item.command}
                  </code>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Pro Tips */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-500 mb-2">Pro Tip</h3>
                  <p className="text-gray-300">
                    Always clean up unused Docker images and containers with{' '}
                    <code className="bg-black/30 rounded px-2 py-1">docker system prune</code>{' '}
                    to save space and maintain system performance.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/10 rounded-lg p-6"
                >
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Master Docker?
            </h3>
            <p className="text-gray-300 mb-6">
              Join our community to learn more about DevOps practices and container management.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;