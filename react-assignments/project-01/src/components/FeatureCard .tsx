import type { FC, ReactNode } from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({title, description, icon}) => {
  return (
    <div>
        <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
            {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>  
  )
}

export default FeatureCard 
