import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';
import Education from './Education';

function App() {
    const [resumeData] = useState({
        name: 'VANIPPRIYA G',
        title: 'AI/ML Engineer | Computer Vision | Generative AI',
        summary: 'AI/ML Engineer with hands-on experience in building and deploying real-world AI systems, including YOLO-based computer vision models and LLM-based applications using RAG and agentic AI frameworks. Skilled in Python, Deep Learning, and AWS, with a focus on scalable, production-ready solutions.',
        contact: {
            email: 'gvanipriya1010@gmail.com',
            phone: '+91 9003245169',
            location: 'Chennai, India'
        },
        about: 'AI/ML professional skilled in Python, Machine Learning, and Deep Learning, specializing in YOLO-based vision models, LLMs, and scalable data-driven solutions. Passionate about leveraging cutting-edge AI technologies to solve real-world problems and drive innovation.',
        specialties: [
            'Computer Vision (YOLO)',
            'Generative AI & LLMs',
            'Deep Learning',
            'Cloud Deployment (AWS)'
        ],
        skills: [
            {
                category: 'Core Skills',
                items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI']
            },
            {
                category: 'Computer Vision',
                items: ['YOLO (v5, v8)', 'OpenCV', 'Image Processing']
            },
            {
                category: 'Programming & Data',
                items: ['Python', 'SQL']
            },
            {
                category: 'Frameworks & Libs',
                items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
            },
            {
                category: 'GenAI & Agentic AI',
                items: ['LLMs', 'RAG', 'Prompt Engineering', 'LangChain', 'CrewAI', 'Embeddings', 'Claude']
            },
            {
                category: 'Deployment',
                items: ['AWS (EC2)', 'REST API', 'Streamlit', 'Git/GitHub']
            }
        ],
        experience: [
            {
                title: 'Junior AI/ML Engineer (Computer Vision)',
                company: 'Careyu Automation',
                period: 'Jan 2026 – Present',
                description: 'Designing and deploying YOLO-based object detection models for real-time defect detection.',
                achievements: [
                    'Designed and deployed YOLO-based object detection models for real-time defect detection on 10K+ industrial images',
                    'Improved model accuracy by 15–25% through hyperparameter tuning and dataset optimization',
                    'Reduced false positives by ~20%, improving reliability of inspection system',
                    'Built end-to-end computer vision pipeline, reducing manual inspection effort by 30%',
                    'Represented Careyu Automation at MIT (Anna University) and conducted Vision AI sessions for students'
                ]
            },
            {
                title: 'Freelance Data Science Trainer',
                company: 'BTree Systems',
                period: 'Jan 2026 – Present',
                description: 'Delivering training on Python, Machine Learning, and AI concepts.',
                achievements: [
                    'Delivered training on Python, Machine Learning, and AI concepts',
                    'Guided students with hands-on ML exercises and real-world examples'
                ]
            },
            {
                title: 'AI/ML Intern (Computer Vision)',
                company: 'Careyu Automation',
                period: 'Oct 2025 – Jan 2026',
                description: 'Developed YOLO-based models for defect detection.',
                achievements: [
                    'Developed YOLO-based models for defect detection with high precision and recall',
                    'Performed image preprocessing, dataset annotation, and model training',
                    'Assisted in model tuning and performance evaluation'
                ]
            },
            {
                title: 'Machine Learning Intern',
                company: 'Cognifyz Technologies',
                period: 'Aug 2025',
                description: 'Built ML models on huge datasets, improving prediction accuracy.',
                achievements: [
                    'Built ML models on datasets with 10K+ records, improving prediction accuracy',
                    'Performed EDA and feature engineering, enhancing model performance by ~10–15%'
                ]
            }
        ],
        projects: [
            {
                title: 'CNC Machine Fault Detection & Performance Analysis',
                description: 'Developed LSTM-based predictive model using CNC sensor time-series data for machine fault detection.',
                achievements: [
                    'Performed data preprocessing, feature engineering, and model training and Deployed on AWS cloud infrastructure',
                    'Achieved ~93% prediction accuracy, reduced false positives by 30%, enabling early fault detection & reduced downtime'
                ],
                tags: ['LSTM', 'Data Sci', 'AWS EC2', 'Time Series']
            },
            {
                title: 'Industrial Defect Detection Platform',
                description: 'Developed YOLO-based computer vision models for automated defect detection in industrial components.',
                achievements: [
                    'Performed image preprocessing, dataset annotation, and model optimization',
                    'Deployed the AI-powered defect detection pipeline on AWS cloud infrastructure for scalable real-time inspection',
                    'Built REST API for model inference and integrated with real-time inspection system'
                ],
                tags: ['YOLO', 'Computer Vision', 'AWS', 'REST API']
            },
            {
                title: 'AI Chatbot for Intelligent Q&A',
                description: 'Developed LLM-powered chatbot for intelligent question answering.',
                achievements: [
                    'Developed LLM-powered chatbot for intelligent question answering',
                    'Built AI agents using CrewAI with LLMs (Claude/Anthropic) for task automation and intelligent workflows'
                ],
                tags: ['LLMs', 'CrewAI', 'Claude', 'Agentic AI']
            }
        ],
        education: [
            {
                degree: 'Advanced Programming in Data Science',
                institution: 'IIT-M GUVI',
                period: 'Mar 2025 – Dec 2025',
                description: 'Intensive program covering advanced Machine Learning and Application Development.'
            },
            {
                degree: 'B.E. Electronics and Communication Engineering',
                institution: 'Nadar Saraswathi College of Engineering',
                period: 'Aug 2015 – Apr 2019',
                description: 'Core engineering concepts alongside electronics fundamentals.'
            }
        ],
        certificates: [
            { name: 'Artificial Intelligence Fundamentals', issuer: 'GUVI' },
            { name: 'Machine Learning', issuer: 'GUVI' },
            { name: 'Time Series Forecasting', issuer: 'GUVI' },
            { name: 'Microsoft Power BI', issuer: 'GUVI' },
            { name: 'Big Data', issuer: 'Zeyobron' }
        ],
        social: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vanippriya-g-b17aa2179/', icon: 'in' },
            { name: 'GitHub', url: 'https://github.com/vani-priya-g', icon: 'gh' }
        ]
    });

    return (
        <div className="App">
            {/* Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(2, 6, 23, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                padding: 'var(--spacing-sm) 0',
                zIndex: 1000
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h3 style={{
                        margin: 0,
                        fontSize: '1.25rem',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        {resumeData?.name?.split(' ')[0] || 'Portfolio'}
                    </h3>

                    <div style={{
                        display: 'flex',
                        gap: 'var(--spacing-lg)',
                        flexWrap: 'wrap'
                    }}>
                        {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    transition: 'color var(--transition-base)'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main style={{ paddingTop: '60px' }}>
                <Hero resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Skills resumeData={resumeData} />
                <Projects resumeData={resumeData} />
                <Experience resumeData={resumeData} />
                <Education resumeData={resumeData} />
                <Contact resumeData={resumeData} />
            </main>
        </div>
    );
}

export default App;
