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
            <form onSubmit={submitFile}>
                <p className='justify-center items-center flex text-3xl'>Navbar</p>
                <br />

                <div className="justify-center min-h-[90vh] pt-[20px] pr-0 pb-[20px] pl-0 flex flex-col items-center border-2 border-red-600">

                    <div className="pt-[2vh] pb-[2vh] pr-0 pl-0 items-center m-0 text-[#094166] font-bold">Upload Your Notes</div>


                    <div className="relative">
                        <input
                            type="text"
                            placeholder='Title'
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className='h-[40px] border-1 border-blue-950 rounded-[3px] pt-0 pb-0 pl-[15px] pr-[15px] text-md'

                        />

                        <br />

                        <input
                            type="text"
                            placeholder='Description'
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            className='h-[40px] border-1 border-blue-950 rounded-[3px] pt-0 pb-0 pl-[15px] pr-[15px] text-md'
                        />

                        <br />

                        <input
                            type="text"
                            placeholder='Tags'
                            required
                            onChange={(e) => setTags(e.target.value)}
                            className='h-[40px] border-1 border-blue-950 rounded-[3px] pt-0 pb-0 pl-[15px] pr-[15px] text-md'
                        />
                        <br />


                        <div className="flex items-center justify-center w-full">
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
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className='h-[40px] border-1 border-blue-950 rounded-[3px] pt-0 pb-0 pl-[15px] pr-[15px] text-md'
                                />
                            </div>
                        </div>
                        <br />

                        <button type='submit' className='bg-[#0077b6ff] text-white rounded-lg justify-center items-center flex flex-col'>Upload</button>
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