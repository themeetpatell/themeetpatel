import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare,
  Clock,
  XCircle,
  Lightbulb,
  Rocket,
  Heart,
  Award,
  Filter,
  Search,
  UserCheck,
  Bot
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const BiggMatePage = () => {
  const problems = [
    {
      icon: <XCircle className="w-8 h-8" />,
      title: "Wrong Connections",
      description: "Endless networking without real alignment. You connect with people who look good on paper but lack commitment or shared vision.",
      stat: "6+ months wasted per bad match",
      color: "text-red-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Cofounder Conflicts",
      description: "Mismatched working styles, values, or financial expectations lead to breakups. 65% of startups fail due to cofounder disputes.",
      stat: "#1 preventable startup failure cause",
      color: "text-orange-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Wasted Time & Money",
      description: "Months spent vetting without efficient compatibility assessment. No clear way to know if someone is the right fit upfront.",
      stat: "Delayed launch and lost runway",
      color: "text-yellow-600"
    }
  ];

  const features = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Pitch Home",
      subtitle: "Your startup discovery hub",
      description: "Browse community pitches, filter by industry and role, and find ideas that excite you. The central marketplace where founders showcase their vision.",
      benefits: ["Smart Filters", "Live Feed", "Save Favorites"]
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "My Pitches",
      subtitle: "Create and manage your startup pitches",
      description: "Create and manage your startup pitches. Track responses, update status, and control visibility.",
      benefits: ["Track Engagement", "Manage Visibility", "Update Status"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Cofounder Finder",
      subtitle: "AI-powered matching",
      description: "AI-powered matching to find cofounders with complementary skills and aligned vision.",
      benefits: ["Smart Matching", "Skill Alignment", "Vision Matching"]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Founder CRM",
      subtitle: "Lightweight relationship manager",
      description: "Lightweight relationship manager to track conversations and commitments.",
      benefits: ["Stay Organized", "Track Progress", "Manage Relationships"]
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Co-Founders",
      subtitle: "Get intelligent assistance",
      description: "Get intelligent assistance for pitch refinement and messaging.",
      benefits: ["AI-Powered", "Pitch Refinement", "Smart Messaging"]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Profile",
      description: "Share your skills, experience, and startup vision",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Post Your Pitch",
      description: "Describe your idea and what you need",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Get Matched",
      description: "AI finds compatible cofounders for you",
      icon: <Zap className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Connect & Decide",
      description: "Review pitch-backs, align, and move forward",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      icon: <Filter className="w-8 h-8" />,
      title: "No More Random Networking",
      description: "Finally, a way to skip endless coffee chats and find people who actually match my vision and skill gaps.",
      supporters: "200+ agree"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Pitch-First Approach",
      description: "Love that I can showcase my idea upfront. No more wondering if there's mutual interest before investing time.",
      supporters: "180+ agree"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Serious Founders Only",
      description: "Tired of platforms full of idea tourists. BiggMate's vetting process means I'm connecting with committed builders.",
      supporters: "150+ agree"
    }
  ];

  const whyBuild = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Own Your Future",
      description: "Stop trading time for a paycheck. Build something that's yours. Control your destiny, make your own rules, and reap the rewards of your hard work."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Solve Real Problems",
      description: "Turn your passion into purpose. Build solutions to problems you care deeply about. Create impact that matters and change lives—starting with yours."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Build Legacy",
      description: "Create something that outlasts you. Build a team, a culture, and a movement. Leave a mark on the world and inspire others to dream bigger."
    }
  ];

  const cofounderBenefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Find Your Match",
      description: "Meet cofounders who share your vision, complement your skills, and push you forward. The right partner is out there."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Move Faster Together",
      description: "With a cofounder, you double your effort, halve your burden, and accelerate from idea to impact. Speed wins."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Launch & Scale",
      description: "Get support through the tough days, celebrate wins together, and build a company that thrives. Success is sweeter shared."
    }
  ];

  return (
    <>
      <Helmet>
        <title>BiggMate - Find Your Perfect Co-Founder | The Meet Patel</title>
        <meta name="description" content="BiggMate is an AI-powered cofounder matching platform helping founders find aligned partners faster. Join 547+ founders on the waitlist. Launch: Valentine's Day 2026." />
        <meta name="keywords" content="cofounder matching, startup cofounder, find cofounder, AI matching platform, entrepreneur networking, startup platform" />
        <link rel="canonical" href="https://www.themeetpatel.com/biggmate" />
        
        {/* Open Graph */}
        <meta property="og:title" content="BiggMate - Find Your Perfect Co-Founder" />
        <meta property="og:description" content="Connect with visionary cofounders. Build the next revolution. Join 547+ founders on the waitlist." />
        <meta property="og:url" content="https://www.themeetpatel.com/biggmate" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BiggMate - Find Your Perfect Co-Founder" />
        <meta name="twitter:description" content="AI-powered cofounder matching platform. Join 547+ founders on the waitlist." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Rocket className="w-4 h-4" />
                <span>Launching Valentine's Day 2026 • 547+ Founders Waiting</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Find Your Perfect<br />Co-Builder
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with visionary cofounders. Build the next revolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg group"
                  onClick={() => window.open('https://www.biggmate.com', '_blank')}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <button
                  className="px-8 py-6 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </button>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Secure Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Verified Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Build a Startup Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Build a Startup?</h2>
              <p className="text-xl text-gray-600">Because the world needs your ideas</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {whyBuild.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="text-purple-600 mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl font-bold mb-8">But You Don't Have to Do It Alone</h3>
              <p className="text-lg text-gray-600 mb-8">The right cofounder makes all the difference</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cofounderBenefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">The Real Problem</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Why Finding a Cofounder<br />Is So Difficult
              </h2>
              <p className="text-xl text-gray-600">
                Founders are stuck in limbo, wasting precious time and money on mismatches
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className={`${problem.color} mb-4`}>{problem.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                      <p className="text-gray-600 mb-4">{problem.description}</p>
                      <div className={`${problem.color} font-bold text-sm uppercase tracking-wider`}>
                        📊 {problem.stat}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-16"
            >
              <p className="text-2xl font-bold text-gray-900 mb-4">
                This is where BiggMate changes everything.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                See How We Solve It
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Solution Highlight */}
        <section className="py-20 px-4 bg-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">What We're Building</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Finding the Right Cofounder<br />Shouldn't Be This Hard
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                65% of startups fail because of cofounder conflicts. We're building an intelligent platform that ensures alignment from day one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Complete<br />Cofounder Platform
              </h2>
              <p className="text-xl text-gray-600">
                Five powerful tools designed to help founders find their perfect match and build together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-purple-300 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="text-purple-600 mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-purple-600 font-semibold mb-3">{feature.subtitle}</p>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Simple Process</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Four simple steps to find your perfect cofounder</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="border-2 hover:border-purple-300 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl font-bold text-purple-100 mb-4">{step.number}</div>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-purple-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Buzz Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Why Founders Are Excited</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">The Waitlist Is Buzzing</h2>
              <p className="text-xl text-gray-600">Here's what early adopters are anticipating most</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="text-purple-600 mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4 italic">"{benefit.description}"</p>
                      <div className="text-purple-600 font-semibold text-sm">{benefit.supporters}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider opacity-90">Start Matching Today</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Ready to Find Your<br />Perfect Cofounder?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 547+ founders on the waitlist finding aligned partners faster
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg group"
                  onClick={() => window.open('https://www.biggmate.com', '_blank')}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={() => window.open('https://www.biggmate.com/about', '_blank')}
                >
                  Join Community
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                <Heart className="w-5 h-5" />
                <span>Launch: Valentine's Day 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-purple-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">547+</div>
                <div className="text-purple-200">Founders Waiting</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">65%</div>
                <div className="text-purple-200">Conflicts Prevented</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">AI</div>
                <div className="text-purple-200">Powered Matching</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-purple-200">Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BiggMatePage;
