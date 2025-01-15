import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Code2, Brain, Rocket, Users, BarChart3, MessageSquare, ChevronRight, Star, Shield, Zap, CheckCircle2 } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="inline-block">
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Transforming Tech Careers
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 animate-fade-in">
            Elevate Your Tech Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Join the next generation of tech leaders with our cutting-edge DevOps solutions and expert career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-400">
            <button
              onClick={() => navigate('/services')}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center gap-2"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold transition-all hover:scale-105 hover:bg-white/20 border border-white/20"
            >
              View Services
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="text-white/80 w-8 h-8" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)]"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Teacode</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience excellence in tech education and career development with our comprehensive solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent)]"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transform your career with our professional services tailored for modern tech professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    ₹{service.price}
                  </span>
                  <button 
                    onClick={() => navigate('/services')}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] text-center hover:transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)]"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Community</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Connect with like-minded professionals, share experiences, and grow together in our thriving tech community.
            </p>
            <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2 mx-auto">
              <MessageSquare className="w-5 h-5" />
              Join WhatsApp Community
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark text-gray-400">
  <div className="container mx-auto px-6 text-center">
    {/* Developed By Section */}
    <p className="text-sm text-gray-300 font-medium mb-4">
      Developed with ❤️ by{' '}
      <a
        href="https://www.linkedin.com/in/divya-satpute/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold underline hover:no-underline"
      >
        Divya Satpute
      </a>
    </p>
    
    {/* Copyright Notice */}
    <p className="text-sm mb-4">
      © 2025{' '}
      <a
        href="https://www.helpopshub.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline hover:no-underline"
      >
        HelpOpsHub
      </a>. All rights reserved.
    </p>
    
    {/* Social Icons */}
    <div className="flex justify-center space-x-6">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.8c-3.3.7-4-1.5-4-1.5a3.2 3.2 0 00-1.3-1.7c-1-.6.1-.6.1-.6a2.5 2.5 0 011.8 1.2 2.6 2.6 0 003.6 1 2.6 2.6 0 01.8-1.6c-2.6-.3-5.3-1.3-5.3-5.7a4.5 4.5 0 011.2-3.1 4.1 4.1 0 01.1-3.1s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.2-1.5 3.3-1.2 3.3-1.2a4.1 4.1 0 01.1 3.1 4.5 4.5 0 011.2 3.1c0 4.4-2.7 5.3-5.3 5.7a3 3 0 01.9 2.4v3.5c0 .3.2.6.8.5A12 12 0 0012 0z" />
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-9 19H7V9h3v10zm-1.5-11.2a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM20 19h-3v-5.4c0-1.3-1.2-1.6-1.6-1.6-.9 0-1.4.6-1.6 1.2V19h-3V9h3v1.4c.5-.7 1.2-1.4 2.6-1.4 2 0 3.6 1.2 3.6 4v5z" />
        </svg>
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.1 4.2A19.3 19.3 0 0016.7 3c-.3.6-.7 1.3-1 1.8a17.9 17.9 0 00-7.3 0A18.4 18.4 0 007.3 3 19.3 19.3 0 003.9 4.2a19.7 19.7 0 00-3.1 14.5 20 20 0 006.2 3.1 13.7 13.7 0 001.2-2.2 11.2 11.2 0 01-1.8-.9c.1-.1.2-.2.3-.3 3.5 1.5 7.2 1.5 10.7 0l.3.3c-.6.4-1.2.7-1.8.9a13.7 13.7 0 001.2 2.2 20 20 0 006.2-3.1 19.7 19.7 0 00-3-14.5zM8.1 14.8c-1 0-1.7-.9-1.7-1.8s.8-1.7 1.8-1.7 1.7.8 1.7 1.8-.7 1.7-1.8 1.7zm7.8 0c-1 0-1.7-.9-1.7-1.8s.8-1.7 1.8-1.7 1.7.8 1.7 1.8-.8 1.7-1.8 1.7z" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

const features = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Fast-Track Growth",
    description: "Accelerate your career progression with our proven strategies and expert guidance."
  },
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: "DevOps Mastery",
    description: "Master modern DevOps practices with hands-on experience and expert mentorship."
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Industry Standards",
    description: "Learn and implement best practices that align with current industry demands."
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "Expert Guidance",
    description: "Get personalized mentorship from seasoned industry professionals."
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Career Launch",
    description: "Launch your dream career with strategic planning and continuous support."
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Community Power",
    description: "Join a thriving community of tech enthusiasts and industry experts."
  }
];

const popularServices = [
  {
    title: "DevOps Services",
    description: "Comprehensive DevOps solutions to optimize your development pipeline.",
    price: "300",
    features: [
      "Infrastructure as Code",
      "CI/CD Pipeline Setup",
      "24/7 Monitoring"
    ]
  },
  {
    title: "Career Guidance",
    description: "Personalized career counseling sessions with industry experts.",
    price: "500",
    features: [
      "Career Path Planning",
      "Interview Preparation",
      "Skill Gap Analysis"
    ]
  },
  {
    title: "LinkedIn Optimization",
    description: "Enhance your professional presence with an optimized profile.",
    price: "250",
    features: [
      "Profile Enhancement",
      "Custom Banner Design",
      "Content Strategy"
    ]
  }
];

const stats = [
  {
    value: "500+",
    label: "Clients Served"
  },
  {
    value: "95%",
    label: "Success Rate"
  },
  {
    value: "50+",
    label: "Expert Mentors"
  },
  {
    value: "24/7",
    label: "Support"
  }
];

export default Home;