import React from 'react';


const VerticalBarChart = () => {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow-md min-h-screen flex items-center justify-center" id="chart">
      <h2 className="text-xl font-semibold mb-4">Vertical Bar Chart</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-blue-500 h-20 relative">
            <div className="h-3/4 bg-blue-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              30%
            </div>
          </div>
          <div className="w-16 bg-green-500 h-28 relative">
            <div className="h-3/4 bg-green-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              40%
            </div>
          </div>
          <div className="w-16 bg-red-500 h-16 relative">
            <div className="h-3/4 bg-red-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              20%
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-blue-500 h-28 relative">
            <div className="h-1/2 bg-blue-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              25%
            </div>
          </div>
          <div className="w-16 bg-green-500 h-20 relative">
            <div className="h-1/2 bg-green-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              20%
            </div>
          </div>
          <div className="w-16 bg-red-500 h-24 relative">
            <div className="h-1/2 bg-red-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              30%
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-blue-500 h-24 relative">
            <div className="h-1/4 bg-blue-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              15%
            </div>
          </div>
          <div className="w-16 bg-green-500 h-20 relative">
            <div className="h-1/4 bg-green-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              15%
            </div>
          </div>
          <div className="w-16 bg-red-500 h-28 relative">
            <div className="h-1/4 bg-red-700"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-700 text-xs">
              15%
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VerticalBarChart;

