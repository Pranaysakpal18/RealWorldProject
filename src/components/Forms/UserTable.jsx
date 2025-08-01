import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StatusFilter from './StatusFilter';

const UserTable = () => {
  const users = useSelector((state) => state.userForm.users);

  // 🔎 Search
  const [searchTerm, setSearchTerm] = useState('');

  // 🟢 Status Filter
  const [filterStatus, setFilterStatus] = useState('All');

  // 🔃 Multi-column Sort Config
  const [sortConfig, setSortConfig] = useState([]);

  // 📄 Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // ✅ Handle sorting when header is clicked
  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      const existing = prevConfig.find((item) => item.key === key);
      if (existing) {
        return prevConfig.map((item) =>
          item.key === key
            ? { ...item, direction: item.direction === 'asc' ? 'desc' : 'asc' }
            : item
        );
      } else {
        return [...prevConfig, { key, direction: 'asc' }];
      }
    });
  };

  // 🔍 Apply search and status filter
  const filteredUsers = users.filter((user) => {
    const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // 🔢 Apply multi-column sort
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    for (const { key, direction } of sortConfig) {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // 🧮 Pagination Logic
  const totalPages = Math.ceil(sortedUsers.length / pageSize);
  const paginatedUsers = sortedUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="p-4">
      {/* 🔎 Search and Filter */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to page 1 on new search
          }}
          className="border px-3 py-1 rounded w-1/2"
        />

        <StatusFilter value={filterStatus} onChange={(status) => {
          setFilterStatus(status);
          setCurrentPage(1); // Reset to page 1 on filter change
        }} />

        {/* 📄 Page Size Selector */}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border rounded px-2 py-1"
        >
          <option value={5}>5 / page</option>
          <option value={10}>10 / page</option>
          <option value={20}>20 / page</option>
        </select>
      </div>

      {/* 📊 Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {['name', 'email', 'role', 'status'].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                className="cursor-pointer border p-2 bg-gray-100"
              >
                {key.toUpperCase()}
                {sortConfig.find((item) => item.key === key) ? (
                  sortConfig.find((item) => item.key === key).direction === 'asc' ? ' 🔼' : ' 🔽'
                ) : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((user, index) => (
              <tr key={index} className="border">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 📦 Pagination Buttons */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages} — Showing {paginatedUsers.length} of {sortedUsers.length}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
