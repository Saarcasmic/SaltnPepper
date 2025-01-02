import React from 'react';
import { Award, Star, Users } from 'lucide-react';

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <StatItem
        icon={Award}
        title="Celebrity Chef Recognition"
        subtitle="Awarded by Sanjeev Kapoor, Vicky Ratnani & Kunal Kapoor"
      />
      <StatItem
        icon={Star}
        title="Professional Certification"
        subtitle="LAPT Institute in Bakery & Patisserie Arts (2023)"
      />
      <StatItem
        icon={Award}
        title="Business Excellence"
        subtitle="ANWA Business Except Award (2023)"
      />
      <StatItem
        icon={Users}
        title="Educational Impact"
        subtitle="Chief Guest at Multiple Premium Schools"
      />
      <StatItem
        icon={Star}
        title="Media Recognition"
        subtitle="Featured on DD National & DD UP (2023-24)"
      />
      <StatItem
        icon={Award}
        title="Community Impact"
        subtitle="Women Empowerment Honor - Agrawal Samaj (2022)"
      />
    </div>
  );
}

interface StatItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

function StatItem({ icon: Icon, title, subtitle }: StatItemProps) {
  return (
    <div className="flex items-start gap-3 group">
      <div className="relative">
        <Icon className="w-6 h-6 text-amber-600 flex-shrink-0 transition-transform group-hover:scale-110" />
        <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}