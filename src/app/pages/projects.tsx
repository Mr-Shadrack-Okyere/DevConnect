import { useState } from 'react';
import { DevCard } from '../components/DevCard';
import { DevButton } from '../components/DevButton';
import { StatusBadge } from '../components/StatusBadge';
import { TagPill } from '../components/TagPill';
import { Search, Plus, LayoutGrid, List, Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-stack marketplace application with React, Node.js, and MongoDB',
      status: 'active' as const,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      views: 432,
      likes: 89,
      thumbnail: true,
    },
    {
      id: 2,
      name: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses',
      status: 'in-review' as const,
      tags: ['React', 'OpenAI', 'WebSocket', 'Express'],
      views: 287,
      likes: 64,
      thumbnail: true,
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations',
      status: 'completed' as const,
      tags: ['React', 'Framer Motion', 'Tailwind'],
      views: 598,
      likes: 142,
      thumbnail: true,
    },
    {
      id: 4,
      name: 'Task Management Tool',
      description: 'Collaborative task tracker with real-time updates',
      status: 'active' as const,
      tags: ['React', 'Firebase', 'TypeScript'],
      views: 345,
      likes: 78,
      thumbnail: true,
    },
    {
      id: 5,
      name: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with charts and forecasts',
      status: 'completed' as const,
      tags: ['React', 'Recharts', 'Weather API'],
      views: 512,
      likes: 96,
      thumbnail: true,
    },
    {
      id: 6,
      name: 'Social Media App',
      description: 'Instagram-like social platform with feeds and stories',
      status: 'active' as const,
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      views: 721,
      likes: 183,
      thumbnail: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage and explore your projects</p>
        </div>
        <DevButton variant="primary">
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </DevButton>
      </div>

      {/* Search and Filters */}
      <DevCard>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2 border border-border rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </DevCard>

      {/* Projects Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <DevCard variant="project" hover className="h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-48 -m-4 mb-4 rounded-t-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💼</div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                    {project.tags.length > 3 && (
                      <TagPill>+{project.tags.length - 3}</TagPill>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-2 border-t border-border">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{project.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 pt-4 border-t border-border">
                  <DevButton variant="outline" className="w-full" size="sm">
                    View Project
                  </DevButton>
                </div>
              </DevCard>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <DevCard hover className="flex items-center gap-6">
                {/* Thumbnail */}
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">💼</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </div>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center gap-6 flex-shrink-0">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{project.likes}</span>
                    </div>
                  </div>
                  <DevButton variant="outline" size="sm">
                    Manage
                  </DevButton>
                </div>
              </DevCard>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
