import Link from "next/link";
import { CheckCircle, Kanban, Users, Shield, Zap, BarChart3 } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Kanban,
      title: "Multiple Views",
      description: "Board, List, Calendar, Timeline, and Table views to work your way",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration with comments, mentions, and assignments",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "RBAC, 2FA ready, encrypted data, and comprehensive audit logs",
    },
    {
      icon: Zap,
      title: "Powerful Automation",
      description: "Automate workflows and repetitive tasks to save time",
    },
    {
      icon: BarChart3,
      title: "Insights & Reports",
      description: "Track progress with dashboards, reports, and time tracking",
    },
    {
      icon: CheckCircle,
      title: "Everything in One Place",
      description: "Tasks, docs, goals, and more unified in a single platform",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Kanban className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">PlanForge</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/signin"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Project Management
          <span className="text-blue-600"> Reimagined</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          PlanForge brings together tasks, docs, goals, and team collaboration in one secure,
          powerful platform. Build, track, and ship projects faster than ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start for Free
          </Link>
          <Link
            href="#features"
            className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything your team needs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Powerful features with enterprise-grade security built in
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Badge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Security First Approach
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Built with security protocols including RBAC, input validation, CSRF protection,
            secure sessions, rate limiting, and comprehensive audit logging.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Kanban className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900 dark:text-white">PlanForge</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2026 PlanForge. Built with security in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
