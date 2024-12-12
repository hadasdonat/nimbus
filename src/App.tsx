import CatalogCard from './components/CatalogCard';
import FilterBar from './components/FilterBar';
import Title from './components/Title';

function App() {
  return (
    <div>
      <div className="flex flex-col min-w-full items-center justify-center px-28" dir='rtl'>
        <Title text="ברוכים הבאים לקטלוג מוצרי נימבוס" />
        <FilterBar />
        <section className=' flex flex-grow gap-10 justify-between'>
          <CatalogCard provider='AWS' imgUrl='' />
          <CatalogCard provider='GCP' imgUrl='' />
          <CatalogCard provider='רובד 5' imgUrl='' url='FIVE' />
        </section>

      </div>
    </div>
  );
}

export default App;
