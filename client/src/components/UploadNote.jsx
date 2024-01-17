import React, { useEffect, useState } from 'react';
import axios from "axios";

const UploadNote = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [file, setFile] = useState("");
    const [allFiles, setAllFiles] = useState("");


    useEffect(() => {
        getFiles();
    });

    const getFiles = async () => {
        try {
            const result = await axios.get("http://localhost:7000/notes/getFiles");
            setAllFiles(result.data.data);
        } catch (error) {
            console.error("Error fetching files:", error);
        }
    }

    const submitFile = async (e) => {

        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("tags", tags);
            formData.append("file", file);

            console.log(title, description, tags, file);

            const result = await axios.post("http://localhost:7000/notes/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            console.log("Frontnd Data: ", result);
            alert("Note Uploaded Successfully ");
        } catch (error) {
            console.log(error);
            alert("Failed to Upload the Note");
        }
    }

    const showPDF = (files) => {
        window.open(`http://localhost:7000/files/${files}`, "_blank", "noreferrer");
    }

    return (
        <div>
            <p className='justify-center items-center flex text-3xl'>Navbar</p>
            <br />

            <form onSubmit={submitFile} className='max-w-screen-md mx-auto'>
                <div className="justify-center min-h-[90vh] pt-[20px] pr-0 pb-[20px] pl-0 flex flex-col items-center border-2 shadow-lg border-gray-600">

                    <div className=" pb-[2vh] items-center m-0 text-[#094166] font-bold text-3xl">Upload Your Notes</div>

                    <div className="relative w-[550px] ">
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder='Title'
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '

                            />
                        </div>

                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder='Description'
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            />
                        </div>

                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder='Tags'
                                required
                                onChange={(e) => setTags(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            />
                        </div>


                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100  ">

                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className='w-8 h-8 mb-4 text-gray-500 ' aria-hidden="true" xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 20 16'
                                    >
                                        <path stroke='currentColor' strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth="2"
                                            d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2 '
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">
                                            Click to Upload
                                        </span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">PDF</p>
                                    <input
                                        type="file"
                                        placeholder='File'
                                        accept='application/pdf'
                                        required
                                        id='dropzone-file'
                                        onChange={(e) => setFile(e.target.files[0])}
                                        className='hidden'
                                    />
                                </div>
                            </label>
                        </div>
                        <br />

                        <button type='submit'>Submit</button>
                        {/* <div className="relative inline-flex cursor-pointer items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <button type='submit' className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Upload</button>
                            <button type='submit' className="relative invisible">Upload</button>
                        </div> */}

                    </div>

                </div>

            </form>

            <div>
                <h4>Uploaded Files</h4>
                {allFiles.length === 0
                    ? "No files uploaded yet."
                    : allFiles.map((data) => (
                        <>
                            <h6 key={data._id}>File: {data.fileName}</h6>
                            <button onClick={() => showPDF(data.files)}>Show PDF</button>
                        </>
                    ))}
            </div>
        </div>
    )
}

export default UploadNote