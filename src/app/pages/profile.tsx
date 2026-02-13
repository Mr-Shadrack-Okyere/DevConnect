import { DevCard } from '../components/DevCard';
import { DevButton } from '../components/DevButton';
import { TagPill } from '../components/TagPill';
import { Mail, Share2, Edit, Github, Twitter, Linkedin, MapPin, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  const skills = [
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'AI/ML',
    'DevOps',
    'UI/UX',
    'GraphQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Kubernetes',
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
  ];

  const stats = [
    { label: 'Projects', value: '24' },
    { label: 'Followers', value: '1.2K' },
    { label: 'Following', value: '432' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <DevCard className="relative overflow-hidden">
          {/* Cover Background */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-primary to-primary-glow -m-6 mb-0" />

          {/* Profile Content */}
          <div className="relative pt-20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-card">
                  SO
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-card" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Shadrack Okyere</h1>
                    <p className="text-lg text-primary mb-2">Full-stack Developer</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LinkIcon className="w-4 h-4" />
                        <a href="#" className="hover:text-primary transition-colors">
                          portfolio.dev
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DevButton variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </DevButton>
                    <DevButton variant="primary" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </DevButton>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Passionate full-stack developer with 5+ years of experience building scalable web
                  applications. Love working with modern technologies and collaborating on innovative
                  projects. Always learning and sharing knowledge with the community.
                </p>

                {/* Stats */}
                <div className="flex items-center gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DevCard>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column - Skills & Social */}
        <div className="space-y-6">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <DevCard>
              <h2 className="text-xl font-bold text-white mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <TagPill key={skill}>{skill}</TagPill>
                ))}
              </div>
            </DevCard>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <DevCard>
              <h2 className="text-xl font-bold text-white mb-4">Social Links</h2>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-primary-glow/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </DevCard>
          </motion.div>
        </div>

        {/* Right Column - Activity & About */}
        <div className="md:col-span-2 space-y-6">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <DevCard>
              <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer passionate about creating elegant solutions to complex
                  problems. With over 5 years of experience, I've worked on everything from small
                  startups to large-scale enterprise applications.
                </p>
                <p>
                  My expertise includes React, Node.js, TypeScript, and cloud technologies. I'm
                  particularly interested in AI/ML integration and building scalable architectures.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects,
                  writing technical articles, or mentoring aspiring developers.
                </p>
              </div>
            </DevCard>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <DevCard>
              <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  {
                    action: 'Created a new project',
                    title: 'E-Commerce Platform',
                    time: '2 hours ago',
                  },
                  {
                    action: 'Collaborated on',
                    title: 'AI Chat Application',
                    time: '1 day ago',
                  },
                  {
                    action: 'Completed',
                    title: 'Portfolio Website',
                    time: '3 days ago',
                  },
                  {
                    action: 'Joined collaboration',
                    title: 'Weather Dashboard',
                    time: '1 week ago',
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-foreground">
                        {activity.action}{' '}
                        <span className="text-primary font-medium">{activity.title}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DevCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
