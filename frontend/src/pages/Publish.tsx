import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, { title, content }, {
            headers: { authorization: localStorage.getItem("token") }
        });
        navigate(`/blog/${response.data.blogId}`);
    };

    return (
        <div>
            <Appbar />
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="w-full h-25 mb-4 rounded-lg bg-slate-300 mt-2">
                        <div className="px-4 pt-6 bg-white font-medium p-4 text-gray-900 dark:text-white">
                            <label htmlFor="title" className="sr-only">Your Title</label>
                            <textarea onChange={(e) => setTitle(e.target.value)} id="title" className="w-full h-14 text-5xl text-gray-900 bg-white-100 focus:outline-none block resize-none" placeholder="Title" required></textarea>
                            <TextEditor onChange={(e) => setContent(e.target.value)} />
                            <button type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Publish Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div>
            <div className="mt-2">
                <div className="w-full mb-4">
                    <div className="flex items-center justify-between border">
                        <div className="my-2 mt-5 bg-white rounded-b-lg w-full">
                            <label htmlFor="editor" className="sr-only">Publish post</label>
                            <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-m resize-none text-gray-800 bg-white-200" placeholder="Write your thoughts..." required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}