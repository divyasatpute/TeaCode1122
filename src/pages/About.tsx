import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  Server, 
  Laptop, 
  CheckCircle2, 
  Users, 
  Target, 
  TrendingUp, 
  Briefcase,
  Star,
  ChevronRight,
  MessageSquare,
  Clock,
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Empowering Your Tech Journey with TeaCode
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your Trusted Partner for DevOps, Career Growth, and Professional Optimization.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
          >
            Explore Services
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
          
          <div className="flex justify-center gap-8 mt-16">
            <Cloud className="w-12 h-12 text-purple-500 animate-pulse" />
            <Server className="w-12 h-12 text-pink-500 animate-pulse animation-delay-200" />
            <Laptop className="w-12 h-12 text-blue-500 animate-pulse animation-delay-400" />
          </div>
        </div>
      </section>

      {/* About TeaCode Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">TeaCode</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              TeaCode is your all-in-one technology and career partner, offering specialized DevOps solutions, 
              personalized career guidance, resume enhancement, and access to an exclusive tech community. 
              Whether you're a business looking for expert DevOps strategies or an individual aiming for 
              career excellence, TeaCode delivers unmatched services.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Starting from</span>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    ₹{service.price}
                  </span>
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white font-medium"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TeaCode */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">TeaCode</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/50 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Tech Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join TeaCode today and take the first step towards transforming your tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all inline-flex items-center justify-center"
              >
                Explore Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                Contact Us
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const highlights = [
  "Expert DevOps Services",
  "Personalized Career Guidance",
  "Resume & LinkedIn Optimization",
  "Vibrant Tech Community",
  "Affordable Pricing Plans",
  "24/7 Support"
];

const services = [
  {
    id: 'devops-services',
    name: "DevOps Services",
    description: "Expert solutions for cloud migration, CI/CD setup, and infrastructure management.",
    price: "2,500",
    icon: <Cloud className="w-6 h-6 text-white" />
  },
  {
    id: 'career-guidance',
    name: "Career Guidance",
    description: "Personalized mentorship to accelerate your professional growth.",
    price: "1,000",
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    id: 'linkedin-optimization',
    name: "LinkedIn Optimization",
    description: "Stand out with a professionally optimized LinkedIn profile.",
    price: "1,500",
    icon: <TrendingUp className="w-6 h-6 text-white" />
  },
  {
    id: 'resume-optimization',
    name: "Resume Optimization",
    description: "Get noticed with an ATS-friendly, professionally crafted resume.",
    price: "1,000",
    icon: <Briefcase className="w-6 h-6 text-white" />
  },
  {
    id: 'linkedin-banner',
    name: "LinkedIn Banner",
    description: "Custom designed banner to enhance your professional brand.",
    price: "800",
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'community-access',
    name: "Community Access",
    description: "Join our exclusive community of tech professionals.",
    price: "Free",
    icon: <Users className="w-6 h-6 text-white" />
  }
];

const benefits = [
  {
    title: "Industry Experts",
    description: "Work with certified professionals who bring years of experience.",
    icon: <Brain className="w-6 h-6 text-white" />
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered solutions to startups and Fortune 500 companies.",
    icon: <TrendingUp className="w-6 h-6 text-white" />
  },
  {
    title: "Tailored Solutions",
    description: "Customized services designed to meet your specific needs.",
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your technical needs.",
    icon: <Clock className="w-6 h-6 text-white" />
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability in all our services.",
    icon: <Shield className="w-6 h-6 text-white" />
  },
  {
    title: "Fast Implementation",
    description: "Quick deployment and implementation of solutions.",
    icon: <Zap className="w-6 h-6 text-white" />
  }
];

const testimonials = [
  {
    name: "John Smith",
    role: "DevOps Engineer",
    text: "TeaCode's DevOps services transformed our deployment pipeline. Their expertise and support are unmatched.",
  },
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    text: "The career guidance program helped me land my dream job. Highly recommend their services!",
  },
  {
    name: "Michael Brown",
    role: "Tech Lead",
    text: "Professional, efficient, and incredibly helpful. TeaCode's community is a goldmine of knowledge.",
  }
];

const faqs = [
  {
    question: "What services does TeaCode offer?",
    answer: "TeaCode offers a comprehensive range of services including DevOps solutions, career guidance, LinkedIn optimization, resume building, and access to an exclusive tech community."
  },
  {
    question: "How long does it take to complete a service?",
    answer: "Service completion times vary. DevOps services typically take 1-2 weeks, while profile optimization services are completed within 48-72 hours."
  },
  {
    question: "Do you offer customized solutions?",
    answer: "Yes, we tailor our services to meet your specific needs and requirements, ensuring the best possible outcomes for your goals."
  },
  {
    question: "What makes TeaCode different?",
    answer: "Our combination of expert professionals, personalized approach, and comprehensive service offerings sets us apart in delivering value to our clients."
  },
  {
    question: "How can I join the TeaCode community?",
    answer: "You can join our community by subscribing to our community access plan, which gives you access to exclusive resources, webinars, and networking opportunities."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, UPI, and net banking. All transactions are secure and encrypted."
  }
];

export default About;