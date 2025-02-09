import React, { useEffect, useState } from 'react';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch('/mentors.json')
      .then((response) => response.json())
      .then((data) => setMentors(data))
      .catch((error) => console.error('Error fetching mentors:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Connect My Mentor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white p-4 rounded-lg shadow-md border">
            <img src={mentor.image_url} alt={mentor.name} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-xl font-semibold text-center mt-2">{mentor.name}</h2>
            <p className="text-center text-gray-600">{mentor.current_position}</p>
            <p className="text-center text-gray-500">Passout Year: {mentor.pass_out_year}</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
