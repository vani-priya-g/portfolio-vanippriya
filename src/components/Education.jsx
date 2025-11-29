import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Education = ({ resumeData }) => {
    const defaultEducation = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University Name',
            period: '2015 - 2019',
            description: 'Focused on software engineering and data structures.',
            achievements: [
                'Graduated with honors',
                'Dean\'s list for 3 consecutive years',
                'Led student tech club'
            ]
        }
    ];

    const education = resumeData?.education || defaultEducation;
    const certificates = resumeData?.certificates || [];

    return (
        <section id="education" className="section" style={{ position: 'relative' }}>
            <ShapeDecorations variant="default" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Education</h2>

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

                    {education.map((item, index) => (
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
                                        <h3 style={{ marginBottom: '0.25rem' }}>{item.degree}</h3>
                                        <p style={{
                                            color: 'var(--color-primary)',
                                            fontWeight: 600,
                                            marginBottom: 0
                                        }}>
                                            {item.institution}
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

                                {item.description && (
                                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                        {item.description}
                                    </p>
                                )}

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

                {/* Certificates Section */}
                {certificates && certificates.length > 0 && (
                    <div style={{
                        maxWidth: '900px',
                        margin: 'var(--spacing-2xl) auto 0',
                    }}>
                        <h3 style={{
                            fontSize: '1.75rem',
                            marginBottom: 'var(--spacing-lg)',
                            textAlign: 'center',
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Professional Certificates
                        </h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 'var(--spacing-md)',
                        }}>
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="fade-in-up"
                                    style={{
                                        padding: 'var(--spacing-lg)',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 'var(--radius-lg)',
                                        transition: 'all var(--transition-base)',
                                        cursor: 'default',
                                        animationDelay: `${index * 0.1}s`,
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(139, 92, 246, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Gradient accent */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: 'var(--gradient-primary)'
                                    }}></div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-sm)',
                                        marginBottom: 'var(--spacing-xs)'
                                    }}>
                                        {/* Certificate icon */}
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'var(--gradient-primary)',
                                            borderRadius: 'var(--radius-md)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.25rem',
                                            flexShrink: 0
                                        }}>
                                            🏆
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <h4 style={{
                                                margin: 0,
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: 'var(--color-text-primary)',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {cert.name}
                                            </h4>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: 'var(--spacing-sm)'
                                    }}>
                                        <span style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--color-primary)',
                                            fontWeight: 500
                                        }}>
                                            {cert.issuer}
                                        </span>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--color-text-muted)',
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(139, 92, 246, 0.1)',
                                            borderRadius: 'var(--radius-full)'
                                        }}>
                                            {cert.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Education;
