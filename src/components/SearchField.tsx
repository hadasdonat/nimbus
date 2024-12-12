interface SearchFieldProps {
    provider?: string;
    onSearch: (value: string) => void;
}

function SearchField({ provider, onSearch }: SearchFieldProps) {
    return (
        <div className="flex items-center justify-center w-full max-w-md mx-auto bg-gray-100 p-2 rounded-lg shadow-md">
            <input
                type="text"
                placeholder={`חיפוש בשירותי ${provider}`}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 bg-transparent border-none outline-none focus:ring-2 focus:ring-primary rounded-lg"
                dir="rtl"
            />
        </div>
    );
}

export default SearchField;
