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
            <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full bg-gray-100">
                <BlockContent 
                    blocks={resumeData.body}
                    projectId="2dgwiew2"
                    dataset="production"
                />
            </div>
        </main>
    )
}