import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

// Product data
const allProducts = [
  { 
    id: 'auraflo-1', 
    name: 'AuraFlo 1.0', 
    description: 'First generation smart yoga mat with precision sensing technology',
    category: 'products',
    price: 199,
    image: '/products/auraflo-1.jpg'
  },
  { 
    id: 'auraflo-2', 
    name: 'AuraFlo 2.0', 
    description: 'Second generation smart yoga mat with visual insight technology',
    category: 'products',
    price: 299,
    image: '/products/auraflo-2.jpg'
  },
  { 
    id: 'auraflo-3', 
    name: 'AuraFlo 3.0', 
    description: 'Latest generation smart yoga mat with AI coaching system',
    category: 'products',
    price: 399,
    image: '/products/auraflo-3.jpg'
  },
  { 
    id: 'yoga-bag', 
    name: 'Yoga Bag', 
    description: 'Premium carrying case for your AuraFlo mat',
    category: 'accessories',
    price: 49.99,
    image: '/accessories/case.jpg'
  },
  { 
    id: 'cleaning-kit', 
    name: 'Cleaning Kit', 
    description: 'Specialized cleaning tools for your mat',
    category: 'accessories',
    price: 29.99,
    image: '/accessories/cleaning-kit.jpg'
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { searchQuery, setSearchQuery, handleSearch } = useSearch();
  const [results, setResults] = useState(allProducts);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      const searchTerms = query.toLowerCase().split(' ');
      
      const filtered = allProducts.filter(product => {
        const searchText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
        return searchTerms.every(term => searchText.includes(term));
      });
      
      setResults(filtered);
    }
  }, [query, setSearchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="min-h-screen bg-aura-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-aura-darkBlack border-aura-purple/20"
              />
              <Button type="submit" className="bg-aura-purple hover:bg-aura-purple/80">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </form>

          {query && (
            <div>
              <h1 className="text-2xl font-bold mb-6">
                Search Results for "{query}"
              </h1>
              {results.length > 0 ? (
                <div className="grid gap-6">
                  {results.map((product) => (
                    <Card key={product.id} className="p-4 bg-aura-darkBlack border-aura-purple/20 hover:border-aura-purple transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-aura-purple mb-2">
                            {product.name}
                          </h2>
                          <p className="text-muted-foreground mb-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">
                              ${product.price}
                            </span>
                            <a
                              href={`/${product.category}/${product.id}`}
                              className="text-aura-purple hover:underline"
                            >
                              View Details →
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-4">
                    No results found for "{query}"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try using different keywords or check your spelling
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults; 