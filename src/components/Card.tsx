interface CardProps {
    title: string;
    description: string;
    link?: string
}

function ResultCard({ title, description, link }: CardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col gap-2">
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="text-sm text-gray-600"> {description}</p>
            <a
                href={link ? link : description}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
            >
                View Service
            </a>
        </div>
    );
}

export default ResultCard;
