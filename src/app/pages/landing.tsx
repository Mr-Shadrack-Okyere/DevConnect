import { Link } from 'react-router';
import { DevButton } from '../components/DevButton';
import { DevCard } from '../components/DevCard';
import { Code2, Users, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing() {
  const features = [
    {
      icon: Code2,
      title: 'Showcase Projects',
      description: 'Display your best work and get discovered by potential collaborators.',
    },
    {
      icon: Users,
      title: 'Connect with Developers',
      description: 'Build your network and find like-minded developers to work with.',
    },
    {
      icon: Rocket,
      title: 'Collaborate & Build',
      description: 'Work together on exciting projects and grow your skills.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-gradient-start to-background-gradient-end relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">DevConnect</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <DevButton variant="ghost">Sign In</DevButton>
          </Link>
          <Link to="/login">
            <DevButton variant="primary">Get Started</DevButton>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Connect. Build.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Collaborate.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              DevConnect helps developers showcase projects, find collaborators, and grow their
              network. Join the community today.
            </p>
            <div className="flex gap-4">
              <Link to="/app">
                <DevButton variant="primary" size="lg">
                  Get Started
                </DevButton>
              </Link>
              <Link to="/app">
                <DevButton variant="outline" size="lg">
                  Explore Developers
                </DevButton>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main illustration placeholder - using abstract shapes */}
              <div className="relative w-full h-[500px] rounded-2xl bg-gradient-to-br from-card to-card-secondary border border-border p-8 shadow-2xl">
                <div className="absolute top-8 left-8 w-32 h-32 bg-primary/20 rounded-2xl" />
                <div className="absolute top-8 right-8 w-24 h-24 bg-primary-glow/20 rounded-full" />
                <div className="absolute bottom-8 left-8 w-40 h-24 bg-primary/10 rounded-2xl" />
                <div className="absolute bottom-16 right-8 w-36 h-36 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-2xl backdrop-blur-sm" />
                
                {/* Floating code blocks */}
                <div className="absolute top-1/4 right-1/4 bg-card-secondary/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-xl">
                  <div className="flex gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-20 bg-primary/50 rounded" />
                    <div className="h-2 w-16 bg-primary-glow/50 rounded" />
                    <div className="h-2 w-24 bg-primary/30 rounded" />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Powerful features designed to help developers connect, collaborate, and build amazing
            projects together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <DevCard hover className="text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </DevCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-20">
        <DevCard className="text-center bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using DevConnect to grow their careers.
          </p>
          <Link to="/app">
            <DevButton variant="primary" size="lg">
              Start Building Today
            </DevButton>
          </Link>
        </DevCard>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 DevConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
