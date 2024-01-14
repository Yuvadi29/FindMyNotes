import React, { useState } from 'react';
import axios from "axios";

const UploadNote = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [file, setFile] = useState("");

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

    return (
        <div>
            <form onSubmit={submitFile}>
                <h4>Upload PDF</h4>
                <br />

                <input
                    type="text"
                    placeholder='Title'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br />

                <input
                    type="text"
                    placeholder='Description'
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />

                <br />

                <input
                    type="text"
                    placeholder='Tags'
                    required
                    onChange={(e) => setTags(e.target.value)}
                />
                <br />


                <input
                    type="file"
                    placeholder='File'
                    accept='application/pdf'
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UploadNote