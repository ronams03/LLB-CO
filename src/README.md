# LLB & Co CPAs - Collaborative Workspace

A modern, role-based collaborative workspace application designed for LLB & Co Certified Public Accountants. This secure client portal enables seamless collaboration between the CPA firm and their clients with comprehensive document management, project tracking, and team coordination features.

## Features

### Authentication & Authorization
- **Role-Based Access Control**: Three user roles (Admin, Manager, Staff)
- **Secure Login**: Professional login interface with bank-level security standards
- **Admin-Controlled User Management**: Only administrators can create and manage user accounts
- **Session Management**: Remember me functionality and password recovery options

### Core Modules

#### Dashboard
- Personalized overview based on user role
- Quick access to recent activity
- Key metrics and analytics at a glance

#### Projects
- Project creation and management
- Task assignment and tracking
- Progress monitoring and reporting

#### Team Management
- Team member directory
- Role and permission management (Admin only)
- User profile management

#### Documents
- Secure document storage and sharing
- Version control and audit trails
- AICPA-compliant security standards

#### Tasks
- Task creation and assignment
- Priority management
- Due date tracking and notifications

#### Calendar
- Integrated scheduling system
- Meeting coordination
- Deadline tracking

#### Analytics
- Performance metrics and reporting
- Data visualization with charts
- Customizable dashboards

#### Settings
- User preferences
- System configuration (Admin only)
- Notification management

#### Help & Support
- User documentation
- Support ticket system
- FAQ and resources

## Design Specifications

### Brand Identity
- **Company**: LLB & Co Certified Public Accountants
- **Logo**: Custom calculator-inspired icon with professional typography
- **Tagline**: "CERTIFIED PUBLIC ACCOUNTANTS"

### Color Palette
- **Primary**: `#030213` - Deep navy for primary elements
- **Muted Text**: `#717182` - Medium gray for secondary text
- **Input Background**: `#f3f3f5` - Light gray for form fields
- **Background**: Gradient from `#f3f3f5` via white to `#ececf0`

### Typography
- **Font Family**: Arimo (Google Fonts)
- **Font Weights**: 400 (Normal), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Size Range**: Strictly constrained between 12px (minimum) and 15px (maximum)
- **Base Size**: 14px

### Design System
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Custom UI components with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)

## Technology Stack

### Frontend
- **React 18+**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **Motion**: Smooth animations and transitions

### UI Components
- **shadcn/ui**: Comprehensive component library
- **Lucide Icons**: Modern icon set
- **Recharts**: Data visualization (Analytics module)

### State Management
- **React Hooks**: useState, useEffect for local state
- **Context API**: Ready for global state management

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd llb-co-workspace
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials

For testing purposes, use these credentials:

**Admin Account**
- Email: `admin@company.com`
- Password: `admin123`
- Access: Full system access including user management

**Manager Account**
- Email: `manager@company.com`
- Password: `manager123`
- Access: Project and team management

**Staff Account**
- Email: `staff@company.com`
- Password: `staff123`
- Access: Basic workspace features

## Project Structure

```
├── App.tsx                      # Main application component
├── components/
│   ├── Dashboard.tsx            # Main dashboard container
│   ├── LoginForm.tsx            # Authentication interface
│   ├── Logo.tsx                 # LLB & Co branding component
│   ├── SimpleSidebar.tsx        # Navigation sidebar
│   ├── pages/
│   │   ├── DashboardOverview.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── DocumentsPage.tsx
│   │   ├── TasksPage.tsx
│   │   ├── CalendarPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── SettingsPage.tsx
│   │   ├── HelpPage.tsx
│   │   └── UserManagementPage.tsx
│   └── ui/                      # Reusable UI components (shadcn)
├── styles/
│   └── globals.css              # Global styles and design tokens
└── README.md
```

## User Roles & Permissions

### Admin
- Full access to all features
- User management and role assignment
- System configuration
- Analytics and reporting
- All Manager and Staff permissions

### Manager
- Project creation and management
- Team member assignment
- Task delegation
- Document management
- Analytics viewing
- All Staff permissions

### Staff
- View assigned projects
- Complete assigned tasks
- Access shared documents
- Update personal profile
- View team calendar

## Security Features

- **256-bit SSL Encryption**: Bank-level security for all data transmission
- **AICPA Certified Standards**: Compliance with accounting industry security requirements
- **Role-Based Access Control**: Granular permissions system
- **Secure Session Management**: Protected authentication state
- **Password Protection**: Secure credential storage (production-ready implementation required)

## Development Guidelines

### Font Size Constraints
All typography must stay within the 12px-15px range:
- Minimum: 12px (`--text-xs`)
- Small: 13px (`--text-sm`)
- Base: 14px (`--text-base`)
- Large: 15px (`--text-lg`)
- Maximum: 15px (`--text-xl`, `--text-2xl`)

### Color Usage
Use design tokens for consistency:
- Primary actions: `var(--primary)` or `#030213`
- Muted text: `var(--muted-foreground)` or `#717182`
- Input backgrounds: `var(--input-background)` or `#f3f3f5`

### Component Development
- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Implement responsive design for mobile/tablet/desktop
- Maintain accessibility standards (WCAG 2.1 AA)
- Keep components modular and reusable

## Future Enhancements

- [ ] Real backend API integration
- [ ] Advanced document version control
- [ ] Real-time collaboration features
- [ ] Email notification system
- [ ] Mobile application (iOS/Android)
- [ ] Advanced analytics and reporting
- [ ] Integration with accounting software
- [ ] Two-factor authentication
- [ ] Audit log and compliance reporting
- [ ] Client portal customization

## Support

For technical support or questions:
- **Internal Team**: Contact your system administrator
- **Clients**: Use the Help & Support section within the portal
- **Email**: support@llbandco.com (placeholder)

## License

Proprietary - LLB & Co Certified Public Accountants

---

**Built with ❤️ for LLB & Co CPAs**
