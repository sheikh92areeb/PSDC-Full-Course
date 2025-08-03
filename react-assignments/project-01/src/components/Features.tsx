import { featuresData } from "../data/featuresData"
import FeatureCard from "./FeatureCard "

const Features = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mb-8 max-w-screen-md lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Designed for business teams like yours
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                    ))}                    
                </div>
            </div>
        </section>
    )
}

export default Features
