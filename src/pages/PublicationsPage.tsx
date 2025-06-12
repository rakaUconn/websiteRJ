import { useState } from 'react';
import { Book, ExternalLink, Calendar, User, Tag, Filter } from 'lucide-react';
import { contentService } from '../services/contentService';

export default function PublicationsPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const publications = contentService.getPublications();
  
  // Get unique years and types for filtering
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [...new Set(publications.map(pub => pub.type))];

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const matchesType = selectedType === 'all' || pub.type === selectedType;
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesYear && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal': return 'bg-blue-100 text-blue-800';
      case 'conference': return 'bg-green-100 text-green-800';
      case 'preprint': return 'bg-yellow-100 text-yellow-800';
      case 'thesis': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic publications, research papers, and contributions to the field of optical engineering and computational imaging
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">{publications.length}</div>
            <div className="text-sm text-gray-600">Total Publications</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">
              {publications.filter(p => p.type === 'journal').length}
            </div>
            <div className="text-sm text-gray-600">Journal Articles</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">
              {publications.filter(p => p.type === 'conference').length}
            </div>
            <div className="text-sm text-gray-600">Conference Papers</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">
              {years.length > 0 ? `${Math.max(...years)} - ${Math.min(...years)}` : 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Publication Years</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h2 className="text-lg font-semibold">Filter Publications</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Publication Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {formatAuthors(pub.authors)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {pub.year}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTypeColor(pub.type)}`}>
                  {pub.type}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-blue-600 font-medium mb-1">{pub.journal}</p>
                {pub.volume && pub.pages && (
                  <p className="text-gray-600 text-sm">
                    Volume {pub.volume}, Pages {pub.pages}
                  </p>
                )}
              </div>

              {pub.abstract && (
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">{pub.abstract}</p>
                </div>
              )}

              {pub.tags.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={16} className="text-gray-400" />
                    {pub.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    DOI: {pub.doi}
                  </a>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <Book size={14} />
                    Full Text
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <Book className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No publications found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
