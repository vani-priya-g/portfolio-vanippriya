import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Experience = ({ resumeData }) => {
    const defaultExperience = [
        {
            title: 'Senior Developer',
            company: 'Tech Company',
            period: '2020 - Present',
            description: 'Led development of innovative solutions and mentored junior developers.',
            achievements: [
                'Improved application performance by 40%',
                'Implemented CI/CD pipeline',
                'Led team of 5 developers'
            ]
        },
        {
            title: 'Full Stack Developer',
            company: 'Startup Inc',
            period: '2018 - 2020',
            description: 'Developed full-stack applications using modern technologies.',
            achievements: [
                'Built scalable REST APIs',
                'Created responsive web applications',
                'Collaborated with cross-functional teams'
            ]
        }
    ];

    const experience = resumeData?.experience || defaultExperience;

    return (
        <section id="experience" className="section" style={{ position: 'relative' }}>
            <ShapeDecorations variant="default" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Experience & Projects</h2>

                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Timeline line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'var(--gradient-primary)',
                        opacity: 0.3
                    }}></div>

                    {experience.map((item, index) => (
                        <div
                            key={index}
                            className="fade-in-up"
                            style={{
                                marginBottom: 'var(--spacing-xl)',
                                paddingLeft: '60px',
                                position: 'relative',
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                left: '10px',
                                top: '8px',
                                width: '22px',
                                height: '22px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '50%',
                                border: '4px solid var(--color-bg-darker)',
                                boxShadow: 'var(--shadow-glow)'
                            }}></div>

                            <div className="card">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: 'var(--spacing-sm)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    <div>
                                        <h3 style={{ marginBottom: '0.25rem' }}>{item.title}</h3>
                                        <p style={{
                                            color: 'var(--color-primary)',
                                            fontWeight: 600,
                                            marginBottom: 0
                                        }}>
                                            {item.company}
                                        </p>
                                    </div>
                                    <span style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.875rem',
                                        color: 'var(--color-secondary)',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {item.period}
                                    </span>
                                </div>

                                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                    {item.description}
                                </p>

                                {item.achievements && item.achievements.length > 0 && (
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--spacing-xs)'
                                    }}>
                                        {item.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 'var(--spacing-sm)'
                                            }}>
                                                <span style={{
                                                    marginTop: '0.5rem',
                                                    width: '6px',
                                                    height: '6px',
                                                    background: 'var(--gradient-accent)',
                                                    borderRadius: '50%',
                                                    flexShrink: 0
                                                }}></span>
                                                <span style={{ color: 'var(--color-text-muted)' }}>
                                                    {achievement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
