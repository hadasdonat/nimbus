function FilterBar() {
  return (
    <div className="flex flex-grow w-full items-center justify-between gap-4 p-4 px-32 border rounded-lg shadow-sm" dir="ltr">
      <div className="flex items-center gap-4 w-1/2 justify-between">
        <button className="px-6 py-2 border-2 border-blue-500 rounded-lg h-12 text-sm font-medium text-blue-700 hover:bg-gray-100">
          נקה סינון
        </button>
        <div className="relative w-1/2">
          <select className="p-2 px-4 border-2 border-gray-300 rounded-lg h-12 text-sm font-medium text-gray-700 w-full" dir="rtl">
            <option value="">בחירת קטגוריה</option>
            <option value="category1">קטגוריה 1</option>
            <option value="category2">קטגוריה 2</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col w-1/2 justify-end">
        <p className="text-sm font-medium text-gray-500 text-right">* סינון תוצאות</p>

        <div className="flex items-center gap-6" dir="rtl">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox rounded border-gray-300"
            />
            SaaS
          </label>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox rounded border-gray-300"
            />
            No-SaaS
          </label>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox rounded border-gray-300"
            />
            בארץ
          </label>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox rounded border-gray-300"
            />
            בחו"ל
          </label>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox rounded border-gray-300"
            />
            רובד 1
          </label>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox rounded border-gray-300"
            />
            רובד 5
          </label>
        </div>

      </div>
    </div>
  );
}

export default FilterBar;
