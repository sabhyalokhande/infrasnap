import React, { useState } from 'react';

const SiteDailyReport = () => {
  const [tasks, setTasks] = useState([]);
  const [contractors, setContractors] = useState([
    { contractorName: '', typeOfWork: '', comment: '' }, // Default one contractor
  ]);
  const [visitors, setVisitors] = useState([]);

  // Add Task Function
  const addTask = () => {
    setTasks([...tasks, { taskName: '', workers: '' }]);
  };

  // Handle Task Input Change
  const handleTaskChange = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);
  };

  // Add Contractor Function
  const addContractor = () => {
    setContractors([
      ...contractors,
      { contractorName: '', typeOfWork: '', comment: '' },
    ]);
  };

  // Handle Contractor Input Change
  const handleContractorChange = (index, field, value) => {
    const updatedContractors = [...contractors];
    updatedContractors[index][field] = value;
    setContractors(updatedContractors);
  };

  // Add Visitor Function
  const addVisitor = () => {
    setVisitors([
      ...visitors,
      { name: '', occupation: '', contact: '', address: '' },
    ]);
  };

  // Handle Visitor Input Change
  const handleVisitorChange = (index, field, value) => {
    const updatedVisitors = [...visitors];
    updatedVisitors[index][field] = value;
    setVisitors(updatedVisitors);
  };

  return (
    <div className="relative max-w-full min-h-screen mx-auto p-4 rounded-md shadow-md">
      {/* Heading and Date */}
      <div className="flex justify-between mb-2">
        <h1 className="text-4xl font-bold">Site Daily Report</h1>
        <div className="flex items-center">
          <label htmlFor="date" className="text-2xl font-semibold mr-2 mb-1">Date:</label>
          <input type="date" id="date" className="text-md font-semibold border border-gray-300 p-1 rounded-md" />
        </div>
      </div>

      {/* Staff Work Section */}
      <div className="mb-0 bg-offwhite p-3 rounded-md">
        <h2 className="text-2xl font-semibold">Staff Workers</h2>
        <div className="grid grid-cols-2 gap-2">
          <input type="text" placeholder="Site Name" className="w-full border border-gray-300 p-1 rounded-md" />
          <input type="text" placeholder="Number of site staff" className="w-full border border-gray-300 p-1 rounded-md" />
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Today's Assigned Tasks:</h3>
          {tasks.map((task, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={task.taskName}
                onChange={(e) => handleTaskChange(index, 'taskName', e.target.value)}
                placeholder="Task name"
                className="flex-1 border border-gray-300 p-1 rounded-md"
              />
              <input
                type="text"
                value={task.workers}
                onChange={(e) => handleTaskChange(index, 'workers', e.target.value)}
                placeholder="Assigned number of workers"
                className="flex-1 border border-gray-300 p-1 rounded-md"
              />
            </div>
          ))}
          <button onClick={addTask} className="mt-2 bg-blue-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-blue-600">
            Add Task
          </button>
        </div>
      </div>

      {/* Contract Work Section */}
      <div className="mb-0 bg-offwhite p-3 rounded-md">
        <h2 className="text-2xl font-semibold">Contract Work:</h2>
        {contractors.map((contractor, index) => (
          <div key={index} className="space-y-1 mt-0">
            <input
              type="text"
              value={contractor.contractorName}
              onChange={(e) => handleContractorChange(index, 'contractorName', e.target.value)}
              placeholder="Contractor name"
              className="w-full border border-gray-300 p-1 rounded-md"
            />
            <input
              type="text"
              value={contractor.typeOfWork}
              onChange={(e) => handleContractorChange(index, 'typeOfWork', e.target.value)}
              placeholder="Type of work"
              className="w-full border border-gray-300 p-1 rounded-md"
            />
            <textarea
              value={contractor.comment}
              onChange={(e) => handleContractorChange(index, 'comment', e.target.value)}
              placeholder="Comments"
              className="w-full border border-gray-300 p-1 rounded-md"
            />
            <button onClick={() => setContractors(contractors.filter((_, i) => i !== index))} className="mt-2 bg-red-500 text-white font-semibold px-3 py-1 rounded-md hover:bg-red-600">
              Delete Contractor
            </button>
          </div>
        ))}
        <button onClick={addContractor} className="mt-2 bg-blue-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-blue-600">
          Add Contractor
        </button>
      </div>

      {/* Visitor Data Section */}
      <div className="mb-4 bg-offwhite p-3 rounded-md">
        <h2 className="text-2xl font-semibold">Visitor Data</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-1">#</th>
              <th className="border border-gray-300 p-1">Name</th>
              <th className="border border-gray-300 p-1">Occupation</th>
              <th className="border border-gray-300 p-1">Contact</th>
              <th className="border border-gray-300 p-1">Address</th>
              <th className="border border-gray-300 p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-1">{index + 1}</td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={visitor.name}
                    onChange={(e) => handleVisitorChange(index, 'name', e.target.value)}
                    className="w-full border border-gray-300 p-1"
                    placeholder="Name"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={visitor.occupation}
                    onChange={(e) => handleVisitorChange(index, 'occupation', e.target.value)}
                    className="w-full border border-gray-300 p-1"
                    placeholder="Occupation"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={visitor.contact}
                    onChange={(e) => handleVisitorChange(index, 'contact', e.target.value)}
                    className="w-full border border-gray-300 p-1"
                    placeholder="Contact"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={visitor.address}
                    onChange={(e) => handleVisitorChange(index, 'address', e.target.value)}
                    className="w-full border border-gray-300 p-1"
                    placeholder="Address"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <button onClick={() => setVisitors(visitors.filter((_, i) => i !== index))} className="bg-red-500 text-white font-semibold px-3 py-1 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addVisitor} className="mt-2 bg-blue-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-blue-600">
          Add Visitor
        </button>
      </div>

      {/* Submit Button positioned at the bottom right */}
      <button className="absolute bottom-20 right-4 bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600">
        Submit Report
      </button>
    </div>
  );
};

export default SiteDailyReport;