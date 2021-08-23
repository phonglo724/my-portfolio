import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import AboutMePhoto from '../images/about-me-photo.jpg';
import BlockContent from '@sanity/block-content-to-react';

export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative bg-gray-300 min-h-screen p-12">
            <section className="bg-gray-900 rounded-lg shadow-2xl lg:flex p-8">
                <img 
                    src={AboutMePhoto} 
                    alt="self" 
                    className="photo-front rounded-full self-portrait self-center" 
                />
                <div className="text-lg flex flex-col justify-center">
                    <h1 className="about-text text-4xl text-gray-100">
                        <strong className="text-2xl pl-8">Phong Lo</strong>
                    </h1>
                    <div className="prose lg:prose-xl text-gray-100 pl-8">
                        <BlockContent 
                            blocks={author.bio} 
                            projectId="2dgwiew2" 
                            dataset="production" 
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
