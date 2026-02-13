import { DevCard } from '../components/DevCard';
import { StatusBadge } from '../components/StatusBadge';
import { Users, FolderOpen, GitBranch, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const stats = [
    {
      icon: FolderOpen,
      title: 'Total Projects',
      value: '24',
      description: '+3 this month',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Active Users',
      value: '1,429',
      description: '+156 this week',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GitBranch,
      title: 'Collaborations',
      value: '89',
      description: '+12 this week',
      color: 'from-green-500 to-green-600',
    },
  ];

  const recentProjects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack marketplace with React and Node.js',
      status: 'active' as const,
      date: 'Feb 10, 2026',
    },
    {
      name: 'AI Chat Application',
      description: 'Real-time chat with AI integration',
      status: 'in-review' as const,
      date: 'Feb 8, 2026',
    },
    {
      name: 'Portfolio Website',
      description: 'Modern portfolio with animations',
      status: 'completed' as const,
      date: 'Feb 5, 2026',
    },
    {
      name: 'Task Management Tool',
      description: 'Collaborative task tracker',
      status: 'active' as const,
      date: 'Feb 3, 2026',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <DevCard className="bg-gradient-to-br from-primary/20 to-primary-glow/20 border-primary/30">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, Shadrack! 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your projects today.
              </p>
            </div>
            <TrendingUp className="w-16 h-16 text-primary opacity-50" />
          </div>
        </DevCard>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <DevCard variant="stat" hover>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
                    <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-sm text-green-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.description}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Decorative glow */}
                <div
                  className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-2xl -z-10`}
                />
              </DevCard>
            </motion.div>
          );
        })}
      </div>

      {/* Recently Active Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Recently Active Projects</h2>
          <button className="text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {recentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <DevCard hover className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary-glow/30 flex items-center justify-center">
                    <FolderOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge status={project.status} />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.date}
                  </span>
                </div>
              </DevCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
