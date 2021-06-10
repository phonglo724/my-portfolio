import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import BlockContent from "@sanity/block-content-to-react";

export default function Resume() {

    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        sanityClient 
            .fetch(`*[_type == "resume"]{
                    body,
                    "name": author->name,
                    "authorImage": author->image
            }`).then((data) => setResumeData(data[0]))
            .catch(console.error)
    }, []);

    if (!resumeData) return <div>Loading...</div>;

    return (
        <main className="bg-gray-300 min-h-screen p-12">
            <div className="bg-gray-100 rounded-lg shadow-2xl lg:flex p-20">
                <BlockContent 
                    blocks={resumeData.body}
                    projectId="2dgwiew2"
                    dataset="production"
                />
            </div>
        </main>
    )
}