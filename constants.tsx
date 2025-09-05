
import React from 'react';
// FIX: Removed imports for icon components that are not defined in IconComponents.tsx and are not used in this file.
import { HeartIcon, MoonIcon, ActivityIcon, BrainIcon, ShieldIcon, UserGroupIcon, ChartBarIcon, CpuChipIcon } from './components/IconComponents';

export const NAV_LINKS = [
  { name: 'Features', href: '/features' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Security', href: '/#security' },
  { name: 'ROI', href: '/#roi' },
  { name: 'Compare', href: '/compare' },
  { name: 'FAQ', href: '/faq' },
];

export const TRACKING_FEATURES = [
  {
    icon: <HeartIcon />,
    title: 'Heart Rate & HRV',
    description: 'Monitor heart rate and variability to assess cardiovascular health and resilience trends.'
  },
  {
    icon: <MoonIcon />,
    title: 'Sleep Patterns',
    description: 'Tracks sleep duration, quality, and stages (REM, deep, light) to help optimize rest.'
  },
  {
    icon: <ActivityIcon />,
    title: 'Activity Levels',
    description: 'Measures daily activity, including steps, distance, and calories burned to encourage movement.'
  },
  {
    icon: <BrainIcon />,
    title: 'Stress Management',
    description: 'Analyzes physiological signals to provide trend insights into stress levels and recovery.'
  },
];

export const INTELLIGENT_FEATURES = [
  {
    icon: <CpuChipIcon />,
    title: 'Productivity Index',
    description: 'Correlates wellness data with focus and energy patterns, offering insights for peak performance.'
  },
  {
    icon: <ShieldIcon />,
    title: 'Recovery & Readiness',
    description: 'Synthesizes sleep, activity, and HRV data to provide a daily readiness score.'
  },
  {
    icon: <UserGroupIcon />,
    title: 'AI Sleep Coach',
    description: 'Provides personalized, actionable recommendations to improve sleep quality over time.'
  },
  {
    icon: <ChartBarIcon />,
    title: 'Proactive Health Alerts',
    description: 'Delivers early pattern signals based on personal trends, suggesting when to rest or take action.'
  }
];

export const EMPLOYER_SOLUTIONS = [
    {
      title: 'Aggregated Insights',
      description: 'Access anonymous, population-level health trends to inform wellness strategies without compromising individual privacy.',
    },
    {
      title: 'Seamless Integration',
      description: 'Plan for future integrations with HRIS platforms like Workday and SAP, plus SSO solutions like Okta.',
    },
    {
      title: 'Bulk Provisioning',
      description: 'Effortlessly manage device distribution and onboarding for teams of any size, from pilot programs to full rollouts.',
    },
    {
      title: 'Admin & Privacy Controls',
      description: 'Robust admin dashboard to manage programs and ensure data privacy standards are met at every level.',
    },
];

export const ROI_METRICS = [
    { value: '85%', label: 'Average Engagement Rate', description: '+20% vs. industry average' },
    { value: '92%', label: 'Employee Satisfaction', description: '+15% since implementation' },
    { value: '70%', label: 'Program Participation', description: '+25% participation growth YoY' },
];

export const CASE_STUDIES = [
    {
        logoUrl: 'https://via.placeholder.com/150/1A2233/F5F7FB?text=TechCorp',
        title: 'TechCorp Boosts Employee Engagement by 30%',
        description: 'A leading software company faced challenges with low employee engagement in their wellness program. Sigma Life provided a personalized, data-driven approach that led to a 30% increase in participation and a 15% improvement in overall employee satisfaction.',
    },
    {
        logoUrl: 'https://via.placeholder.com/150/1A2233/F5F7FB?text=HealthFirst',
        title: 'HealthFirst Reduces Healthcare Costs by 20%',
        description: 'This national healthcare provider used Sigma Life’s comprehensive tracking and insights to help employees make informed decisions, resulting in a 20% reduction in healthcare spending within the first year.',
    },
    {
        logoUrl: 'https://via.placeholder.com/150/1A2233/F5F7FB?text=GlobalRetail',
        title: 'Global Retail Achieves 90% Employee Retention',
        description: 'A multinational retail chain, struggling with high employee turnover, fostered a culture of wellness and support, leading to a remarkable 90% employee retention rate and significant savings in recruitment and training costs.',
    },
];