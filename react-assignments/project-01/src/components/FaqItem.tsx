import type { FC } from "react";

interface FaqItemProps {
    question: string;
    answer: string;
    extra?: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer, extra }) => {
  return (
    <div className="mb-10 md:mb-0">
        <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
            <svg className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
            </svg>
            {question}
        </h3>
        <p className="text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: answer }} />
        {extra && <p className="text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: extra }} />}
    </div>
  )
}

export default FaqItem
