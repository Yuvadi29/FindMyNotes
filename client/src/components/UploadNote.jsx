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
    }

    const showPDF = (files) => {
        window.open(`http://localhost:7000/files/${files}`, "_blank", "noreferrer");
    }

    return (
        <div>
            <p className='justify-center items-center flex text-3xl'>Navbar</p>
            <br />

            <form onSubmit={submitFile} className='max-w-sm mx-auto'>
                <div className="justify-center min-h-[90vh] pt-[20px] pr-0 pb-[20px] pl-0 flex flex-col items-center border-2 shadow-lg border-gray-600">

                    <div className="pt-[2vh] pb-[2vh] pr-0 pl-0 items-center m-0 text-[#094166] font-bold">Upload Your Notes</div>


                    <div className="relative ">
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
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">

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

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center items-center">Submit</button>

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