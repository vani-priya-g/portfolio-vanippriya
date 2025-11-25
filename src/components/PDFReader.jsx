import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFReader = ({ pdfPath, onDataExtracted }) => {
    const [numPages, setNumPages] = useState(null);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const extractTextFromPDF = async (pdf) => {
        let fullText = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
        }

        return fullText;
    };

    const parseResumeData = (text) => {
        // Simple parsing logic - can be enhanced based on resume format
        const lines = text.split('\n').filter(line => line.trim());

        // Extract name (usually first line or prominent text)
        const name = lines[0] || 'Professional Portfolio';

        // Try to find email
        const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
        const email = emailMatch ? emailMatch[0] : 'contact@example.com';

        // Try to find phone
        const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
        const phone = phoneMatch ? phoneMatch[0] : null;

        // Extract sections (this is a basic implementation)
        const data = {
            name,
            title: lines[1] || 'Professional',
            summary: lines.slice(2, 5).join(' ') || 'Experienced professional with a passion for excellence.',
            contact: {
                email,
                phone,
                location: 'Location'
            },
            about: text.substring(0, 300) + '...',
            skills: [
                { category: 'Technical Skills', items: [] },
                { category: 'Soft Skills', items: [] },
                { category: 'Tools', items: [] }
            ],
            experience: [],
            social: [
                { name: 'LinkedIn', url: '#', icon: 'in' },
                { name: 'GitHub', url: '#', icon: 'gh' }
            ]
        };

        return data;
    };

    useEffect(() => {
        const loadPDF = async () => {
            try {
                setLoading(true);

                // Try to load the PDF
                const loadingTask = pdfjs.getDocument(pdfPath);
                const pdf = await loadingTask.promise;

                // Extract text
                const extractedText = await extractTextFromPDF(pdf);
                setText(extractedText);

                // Parse resume data
                const resumeData = parseResumeData(extractedText);

                if (onDataExtracted) {
                    onDataExtracted(resumeData);
                }

                setLoading(false);
            } catch (err) {
                console.error('Error loading PDF:', err);
                setError(err.message);
                setLoading(false);

                // Provide default data if PDF fails to load
                if (onDataExtracted) {
                    onDataExtracted({
                        name: 'Professional Portfolio',
                        title: 'Developer | Designer | Creator',
                        summary: 'Crafting exceptional digital experiences with modern technologies.',
                        contact: {
                            email: 'contact@example.com',
                            phone: '+1 234 567 8900',
                            location: 'City, Country'
                        }
                    });
                }
            }
        };

        if (pdfPath) {
            loadPDF();
        }
    }, [pdfPath]);

    // This component doesn't render anything visible
    return null;
};

export default PDFReader;
