import { Link } from "react-router";

interface CatalogCardProps {
    provider: string;
    url?: string;
    imgUrl: string;
}

export default function CatalogCard({ provider, imgUrl, url }: CatalogCardProps) {
    return (
        <div className="flex flex-row h-24 w-72 max-w-md border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow ease-out bg-white">
            <div className="flex items-center justify-center bg-gray-200 w-1/3">
                <img
                    src={imgUrl}
                    alt="Image Placeholder"
                    className="h-12 w-12 object-contain"
                />
            </div>
            <Link to={`/catalog/${url ? url : provider}`}>
                <div className="flex flex-col flex-grow p-4 justify-center">
                    <div className="text-lg font-bold text-primary">
                        {provider}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">לקטגוריות</div>
                </div>
            </Link>
        </div>
    );
}
