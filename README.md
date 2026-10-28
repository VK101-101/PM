# PlanForge - Modern Project Management Tool

A secure, feature-rich project management platform inspired by ClickUp, Linear, and Trello. Built with Next.js 15, TypeScript, and modern security practices.

## Features

- **Project Management**: Create workspaces, projects, and organize with spaces
- **Task Tracking**: Kanban boards, lists, calendars, and Gantt charts
- **Collaboration**: Team members, comments, mentions, and real-time updates
- **Security First**: 
  - Role-based access control (RBAC)
  - Multi-factor authentication ready
  - Input validation with Zod
  - CSRF protection
  - Secure session management
  - Rate limiting
  - SQL injection prevention
- **Views**: Board, List, Calendar, Timeline, and Table views
- **Automation**: Custom workflows and triggers
- **Time Tracking**: Track time spent on tasks
- **Notifications**: In-app and email notifications
- **Dark Mode**: Full dark mode support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: NextAuth.js v5
- **Database**: Prisma ORM with PostgreSQL/SQLite
- **UI Components**: Radix UI primitives
- **Validation**: Zod
- **Security**: bcryptjs, secure headers

## Security Protocols

- [x] Authentication & Authorization
- [x] Role-based permissions (Owner, Admin, Member, Guest)
- [x] Input sanitization and validation
- [x] CSRF protection
- [x] Secure HTTP headers
- [x] Session management
- [x] Password hashing (bcrypt)
- [x] Rate limiting on API routes
- [x] XSS prevention
- [x] SQL injection prevention via Prisma
- [x] Environment variable protection
- [x] Audit logging

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- PostgreSQL or SQLite database

### Installation

1. Clone the repository
```bash
git clone https://github.com/VK101-101/PM.git
cd PM
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure your database and authentication secrets in `.env.local`

5. Run database migrations
```bash
npx prisma migrate dev
```

6. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

See `.env.example` for required environment variables with security notes.

## Contributing

Contributions are welcome! Please read our contributing guidelines and ensure all security checks pass.

## License

MIT License
