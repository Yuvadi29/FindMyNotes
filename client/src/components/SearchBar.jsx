import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchStatus, setSearchStatus] = useState('');

    const user = useSelector((state) => state.user.userData);

    const username = user.userName;

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const notes = await axios.get("http://localhost:7000/notes/getFiles", {
                params: {
                    title: searchQuery,
                },
            });
            console.log(notes);

            if (notes.data.data.length > 0) {
                setSearchResults(notes.data.data);
                setSearchStatus('found');
            } else {
                setSearchResults([]);
                setSearchStatus('not-found');
            }
        } catch (error) {
            console.log("Error Fetching Data: ", error);
        }
    };

    const showPDF = async (files) => {
        window.open(`http://localhost:7000/files/${files}`, "_blank", "noreferrer");
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for Notes"
                        required
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            {searchStatus === 'found' && searchResults.length > 0 && (
                searchResults.map((notes) => (
                    <div key={notes._id} className='w-full mx-auto bg-white rounded-md overflow-hidden shadow-md my-4'>
                        <div className="p-4">
                            <h2 className='text-2xl font-bold mb-2'>{notes.fileName}</h2>
                            <h2 className='text-lg mb-2'>{notes.fileDescription}</h2>
                            <h2 className='text-lg mb-2'>Uploaded By: {username}</h2>
                            <button
                                className='bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded'
                                onClick={() => showPDF(notes.files)}
                            >
                                Show Pdf
                            </button>
                        </div>
                    </div>
                ))
            )}

            {searchStatus === 'not-found' && (
                <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
                    No Notes Found.
                </div>
            )}
        </div>
    );
};

export default SearchBar;
