"use client";

import Link from "next/link";
import { useState } from "react"

export default function CreatePostPage () {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const createPost = async () => {
        
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-4 mt-6 p-6 border border-indigo-700 rounded">
                <h1 className="text-gray-800 text-2xl font-medium">Create a new post</h1>
                <div className="flex flex-col gap-4 text-indigo-800">
                    <div className="flex flex-col">
                        <label htmlFor="title">Title</label>
                        <input
                            value={ title }
                            name="title"
                            type="text"
                            placeholder="Enter Title"
                            className="outline-none placeholder:text-indigo-700 placeholder:opacity-60 border border-indigo-800 rounded p-1.5 text-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="content">Content</label>
                        <textarea
                            name="content"
                            placeholder="Enter Content"
                            className="outline-none placeholder:text-indigo-700 placeholder:opacity-60 border border-indigo-800 rounded p-1.5 text-lg"
                        />
                    </div>
                    <div className="flex justify-between">
                        <Link href="/" className="border border-red-600 py-1 px-2 rounded text-red-600 hover:text-white hover:bg-red-600 transition-all duration-400">
                            Cancel
                        </Link>
                        <button onClick={createPost} className="border border-indigo-600 py-1 px-2 rounded text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all duration-400">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}