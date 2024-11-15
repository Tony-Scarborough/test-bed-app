import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const TestBedApp = () => {
  const [collectibles, setCollectibles] = useState([]);
  const [newCollectible, setNewCollectible] = useState({
    name: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    setNewCollectible({
      ...newCollectible,
      [e.target.name]: e.target.value
    });
  };

  const handleImageCapture = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewCollectible({
        ...newCollectible,
        image: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCollectibles([...collectibles, newCollectible]);
    setNewCollectible({ name: '', description: '', image: null });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Collections - Asset-Lite</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Collectible</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name: </label>
              <input
                type="text"
                name="name"
                value={newCollectible.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description of picture: </label>
              <input
                type="text"
                name="description"
                value={newCollectible.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <div className="flex items-center space-x-2">
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageCapture}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('image').click()}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Add Image 
                </button>
                {newCollectible.image && <span>Add Photo</span>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Collectible
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collectibles.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="mt-2 max-w-full h-auto"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestBedApp;