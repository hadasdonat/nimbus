import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SearchField from '../components/SearchField';
import Card from '../components/Card';
import Title from '../components/Title';
import { aws, AWSPriceProps, FIVE, FiveConvertedProps } from '../data/FIVE_AND_AWS_WithTypes';
import FilterBar from '../components/FilterBar';

function ResultsPage() {
    let { provider } = useParams();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<
        AWSPriceProps[] | FiveConvertedProps[]
    >([]);
    const [awsCheckbox, setAwsCheckbox] = useState(true); // AWS il-central checkbox
    const [fiveSaasCheckbox, setFiveSaasCheckbox] = useState(true); // FIVE SaaS checkbox
    const [fiveNonSaasCheckbox, setFiveNonSaasCheckbox] = useState(true); // FIVE Non-SaaS checkbox

    useEffect(() => {
        let results: AWSPriceProps[] | FiveConvertedProps[] = [];

        if (provider === 'AWS') {
            results = aws.prices;

            // Filter AWS by il-central if the checkbox is checked
            if (awsCheckbox) {
                results = results.filter(
                    (item) =>
                        (item as AWSPriceProps).attributes['aws:region'].includes('il-central')
                );
            }

            // Apply search filter for AWS
            if (searchTerm) {
                results = results.filter((item) =>
                    (item as AWSPriceProps).attributes['aws:serviceName']
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );
            }
        } else if (provider === 'FIVE') {
            results = FIVE;

            // Filter FIVE by SaaS or Non-SaaS based on checkboxes
            results = results.filter((item) => {
                if (!fiveSaasCheckbox && item.serviceType === 'SaaS') return false;
                if (!fiveNonSaasCheckbox && item.serviceType === 'Non-SaaS') return false;
                return true;
            });

            // Apply search filter for FIVE
            if (searchTerm) {
                results = results.filter((item) =>
                    (item as FiveConvertedProps).serviceName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );
            }
        }

        setFilteredResults(results);
    }, [provider, searchTerm, awsCheckbox, fiveSaasCheckbox, fiveNonSaasCheckbox]);

    return (
        <div className="min-h-screen bg-white">
            <Title text={`תוצאות מוצרי ${provider === "FIVE" ? "תוצרי רכש מרכזי" : provider}:`} />
            <main className="p-6 px-28">
                <FilterBar />
                {/* <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <SearchField provider={provider} onSearch={setSearchTerm} />
          {provider === 'AWS' && (
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={awsCheckbox}
                onChange={(e) => setAwsCheckbox(e.target.checked)}
              />
              <span className="ms-2 text-sm font-medium text-gray-900">
                il-central only
              </span>
            </label>
          )}
          {provider === 'FIVE' && (
            <div className="flex gap-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={fiveSaasCheckbox}
                  onChange={(e) => setFiveSaasCheckbox(e.target.checked)}
                />
                <span className="ms-2 text-sm font-medium text-gray-900">SaaS</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={fiveNonSaasCheckbox}
                  onChange={(e) => setFiveNonSaasCheckbox(e.target.checked)}
                />
                <span className="ms-2 text-sm font-medium text-gray-900">Non-SaaS</span>
              </label>
            </div>
          )}
        </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((result, index) => (
                            <Card
                                key={index}
                                title={
                                    provider === 'AWS'
                                        ? (result as AWSPriceProps).attributes['aws:serviceName']
                                        : (result as FiveConvertedProps).serviceName
                                }
                                description={
                                    provider === 'AWS'
                                        ? (result as AWSPriceProps).attributes['aws:serviceUrl']
                                        : (result as FiveConvertedProps).priceLink
                                }
                            />
                        ))
                    ) : (
                        <div className="flex items-center justify-center col-span-full p-4 border border-gray-300 rounded-lg bg-gray-50">
                            <p className="text-gray-500 text-center">Nothing here</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ResultsPage;
