import React from 'react';
import mediaList from '../data/mediaList.json';

const StudentList: React.FC = () => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LinkedIn</th>
                    </tr>
                </thead>
                <tbody>
                    {mediaList.student.map((s, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td className="py-4 px-4 whitespace-nowrap">{s.name}</td>
                            <td className="py-4 px-4 whitespace-nowrap">
                                <a 
                                    href={s.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    View Profile
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;