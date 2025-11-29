import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Import Projects and Education components
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
    // Resume data is hardcoded - no PDF reading needed
    const [resumeData] = useState({
        name: 'VANIPPRIYA G',
        title: 'Data Scientist / AI/ML Engineer',
        summary: 'AI/ML professional skilled in Python, Machine Learning, and Deep Learning, specializing in YOLO-based vision models, LLMs, and scalable data-driven solutions.',
        contact: {
            email: 'gvanipriya1010@gmail.com',
            phone: '+91 9003245169',
            location: 'Chennai, India'
        },
        about: 'AI/ML professional skilled in Python, Machine Learning, and Deep Learning, specializing in YOLO-based vision models, LLMs, and scalable data-driven solutions. Passionate about leveraging cutting-edge AI technologies to solve real-world problems and drive innovation.',
        specialties: [
            'Computer Vision (YOLO)',
            'Large Language Models (LLMs)',
            'Deep Learning & Neural Networks',
            'Data Analysis & Visualization'
        ],
        skills: [
            {
                category: 'Programming',
                items: ['Python', 'SQL']
            },
            {
                category: 'ML & AI',
                items: ['EDA', 'Feature Engineering', 'Model Evaluation', 'Time Series', 'CNN', 'LSTM', 'YOLO', 'LLM']
            },
            {
                category: 'Libraries',
                items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib']
            },
            {
                category: 'Visualization',
                items: ['Power BI', 'Tableau']
            },
            {
                category: 'Tools & Deployment',
                items: ['Git', 'GitHub', 'Streamlit', 'AWS']
            },
        ],
        experience: [
            {
                title: 'AI/ML Intern',
                company: 'Careyu Automation',
                period: 'Oct 2025 - Present',
                description: 'Working on cutting-edge AI/ML projects focusing on computer vision and large language models.',
                achievements: [
                    'Built YOLO-based computer vision models for real-time object detection and annotation tasks',
                    'Conducting data preprocessing and feature engineering to enhance model performance and accuracy',
                    'Fine-tuned Large Language Models (LLMs) for automation and intelligent data generation use cases'
                ]
            },
            {
                title: 'Dealing & Sales Executive',
                company: 'Goodwill Wealth Management',
                period: 'Oct 2020 - Aug 2021',
                description: 'Provided client support and managed financial operations.',
                achievements: [
                    'Assisted clients with account opening, trade execution, and compliance documentation',
                    'Maintained high client satisfaction through professional service delivery',
                    'Managed documentation and regulatory compliance processes'
                ]
            }
        ],
        projects: [
            {
                title: 'CNC Milling Performance Analysis and Fault Detection',
                description: 'Built an LSTM-based deep learning model for CNC tool wear prediction with real-time deployment.',
                achievements: [
                    'Built an LSTM-based deep learning model for CNC tool wear prediction, improving forecasting accuracy by 30% over baseline models',
                    'Boosted model training stability and convergence speed by 25% through data standardization and normalization techniques',
                    'Enhanced generalization and reduced overfitting by 40% using dropout layers and optimized neural network architecture',
                    'Deployed the predictive model with Streamlit on AWS EC2, enabling real-time maintenance insights and reducing downtime risk'
                ],
                tags: ['LSTM', 'Deep Learning', 'Streamlit', 'AWS EC2', 'Predictive Maintenance']
            },
            {
                title: 'Multiclass Fish Image Classification',
                description: 'Developed and deployed a CNN-based fish species classification system with multiple pre-trained models.',
                achievements: [
                    'Preprocessed & augmented fish images with TensorFlow\'s ImageDataGenerator to ensure dataset robustness',
                    'Trained a CNN and fine-tuned five pre-trained models (VGG16, ResNet50, MobileNet, InceptionV3, EfficientNetB0); selected top-performer based on validation accuracy',
                    'Evaluated all models with precision, recall, F1-score, and confusion matrices; visualized performance trends via accuracy/loss curves',
                    'Deployed a user-facing Streamlit app enabling real-time fish species prediction with confidence scores; saved best model as .h5'
                ],
                tags: ['CNN', 'Transfer Learning', 'TensorFlow', 'Streamlit', 'Image Classification']
            }
        ],
        education: [
            {
                degree: 'Advanced Programming Professional and Master Data Science',
                institution: 'IIT-M GUVI',
                period: 'Mar 2025 - Jun 2025',
                description: 'Comprehensive program focusing on advanced programming concepts, data science methodologies, and practical applications of AI/ML technologies.',
                achievements: [
                    'Advanced programming techniques and best practices',
                    'End-to-end data science project development',
                    'Real-world problem solving with AI/ML frameworks'
                ]
            },
            {
                degree: 'Bachelor of Engineering in Electronics and Communication',
                institution: 'Anna University',
                period: 'Aug 2015 - Apr 2019',
                description: 'Specialized in electronics, communication systems, and signal processing with strong foundations in mathematics and programming.',
                achievements: [
                    'Core coursework in Digital Signal Processing and Communication Systems',
                    'Built strong analytical and problem-solving capabilities',
                    'Developed programming skills applicable to AI/ML domain'
                ]
            }
        ],
        certificates: [
            { name: 'Big Data', issuer: 'Zeyobron', year: '2024' },
            { name: 'AI Fundamentals', issuer: 'Guvi', year: '2024' },
            { name: 'Machine Learning', issuer: 'Guvi', year: '2024' },
            { name: 'Time Series Forecasting', issuer: 'Guvi', year: '2024' }
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
                        {['About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item) => (
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
                <Education resumeData={resumeData} />
                <Experience resumeData={resumeData} />
                <Contact resumeData={resumeData} />
            </main>
        </div>
    );
}

export default App;
