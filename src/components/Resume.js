import React from 'react'
import { Document, Page } from 'react-pdf';

import ResumePDF from '../Phong-Lo-Resume.pdf';

export default function Resume() {
    return (
        <Document file={ResumePDF} className="bg-gray-300 min-h-screen p-12">
            <Page pageNumber={1} />
        </Document>
    )
}