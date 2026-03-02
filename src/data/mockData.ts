import { Zap, FileText, GitBranch, BarChart3, Users, Database } from "lucide-react";

export const features = [
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automate repetitive tasks with AI-powered workflows that learn and adapt to your business needs.",
  },
  {
    icon: FileText,
    title: "AI Forms",
    description: "Create intelligent forms that auto-fill, validate, and process submissions with zero manual effort.",
  },
  {
    icon: GitBranch,
    title: "Workflow Builder",
    description: "Design complex multi-step workflows visually. Drag, connect, and deploy in minutes.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your operations with customizable charts and automated reports.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share workflows, assign tasks, and collaborate in real-time with your entire team.",
  },
  {
    icon: Database,
    title: "Data Insights",
    description: "Transform raw data into actionable insights using AI-powered analysis and predictions.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Link your tools, data sources, and platforms in just a few clicks.",
  },
  {
    number: "02",
    title: "Automate",
    description: "Build AI-powered workflows that handle your most tedious tasks automatically.",
  },
  {
    number: "03",
    title: "Scale",
    description: "Grow without limits. Aidera scales with your business, handling millions of operations.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Nexlify",
    quote: "Aidera cut our operational overhead by 60%. The AI automation is genuinely impressive — it's like having an extra team member.",
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "Founder at Stackborne",
    quote: "We replaced 4 different tools with Aidera. The workflow builder alone saved us 20 hours per week.",
    avatar: "MR",
  },
  {
    name: "Elena Voss",
    role: "Head of Ops at Clarity",
    quote: "The analytics dashboard gives us insights we never had before. Decision-making is faster and more confident now.",
    avatar: "EV",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for individuals and small projects.",
    features: [
      "Up to 5 workflows",
      "1,000 AI operations/mo",
      "Basic analytics",
      "Email support",
      "1 team member",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    description: "Built for growing teams that need more power.",
    features: [
      "Unlimited workflows",
      "25,000 AI operations/mo",
      "Advanced analytics",
      "Priority support",
      "Up to 10 team members",
      "Custom integrations",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Enterprise-grade for serious operations.",
    features: [
      "Everything in Growth",
      "Unlimited AI operations",
      "Custom AI models",
      "Dedicated account manager",
      "Unlimited team members",
      "SSO & advanced security",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

export const dashboardStats = [
  { label: "Total Workflows", value: "24", change: "+3 this week", trend: "up" },
  { label: "AI Operations", value: "12,847", change: "+18% vs last month", trend: "up" },
  { label: "Forms Submitted", value: "1,293", change: "+7% vs last month", trend: "up" },
  { label: "Team Members", value: "8", change: "2 pending invites", trend: "neutral" },
];

export const recentActivity = [
  { action: "Workflow completed", detail: "Customer Onboarding Flow", time: "2 min ago", status: "success" },
  { action: "Form submitted", detail: "Feedback Survey #847", time: "15 min ago", status: "success" },
  { action: "Workflow paused", detail: "Invoice Processing", time: "1 hour ago", status: "warning" },
  { action: "New team member", detail: "alex@company.com joined", time: "3 hours ago", status: "info" },
  { action: "AI model updated", detail: "Sentiment Analysis v2.1", time: "5 hours ago", status: "success" },
];

export const workflows = [
  { id: 1, name: "Customer Onboarding", status: "active", runs: 342, lastRun: "2 min ago" },
  { id: 2, name: "Invoice Processing", status: "paused", runs: 128, lastRun: "1 hour ago" },
  { id: 3, name: "Lead Scoring", status: "active", runs: 891, lastRun: "5 min ago" },
  { id: 4, name: "Email Follow-up", status: "active", runs: 2103, lastRun: "30 sec ago" },
  { id: 5, name: "Data Cleanup", status: "draft", runs: 0, lastRun: "Never" },
  { id: 6, name: "Report Generation", status: "active", runs: 67, lastRun: "1 day ago" },
];

export const forms = [
  { id: 1, name: "Customer Feedback", submissions: 847, lastSubmission: "15 min ago", status: "active" },
  { id: 2, name: "Employee Survey", submissions: 234, lastSubmission: "2 hours ago", status: "active" },
  { id: 3, name: "Bug Report", submissions: 56, lastSubmission: "1 day ago", status: "active" },
  { id: 4, name: "Event Registration", submissions: 1203, lastSubmission: "5 min ago", status: "active" },
  { id: 5, name: "Contact Form", submissions: 389, lastSubmission: "30 min ago", status: "draft" },
];

export const chartData = [
  { name: "Mon", operations: 1200, workflows: 45 },
  { name: "Tue", operations: 1800, workflows: 52 },
  { name: "Wed", operations: 2400, workflows: 61 },
  { name: "Thu", operations: 2100, workflows: 58 },
  { name: "Fri", operations: 2800, workflows: 72 },
  { name: "Sat", operations: 1600, workflows: 38 },
  { name: "Sun", operations: 900, workflows: 22 },
];
