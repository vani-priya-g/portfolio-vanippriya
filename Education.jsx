import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Education = ({ resumeData }) => {
    const education = resumeData?.education || [];
    const certificates = resumeData?.certificates || [];

    return (
        <section id="education" className="section" style={{ position: 'relative' }}>
            <ShapeDecorations variant="default" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Education & Certifications</h2>

                {/* Education Timeline */}
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto var(--spacing-xl) auto',
                    position: 'relative'
                }}>
                    <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>Academic Background</h3>
                    
                    {/* Timeline line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50px',
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
                                marginBottom: 'var(--spacing-lg)',
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
                                        <h3 style={{ marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}>{item.degree}</h3>
                                        <p style={{
                                            color: 'var(--color-secondary)',
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
                                        color: 'var(--color-text-muted)',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {item.period}
                                    </span>
                                </div>

                                <p style={{ marginBottom: 0, color: 'var(--color-text-secondary)' }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certificates Section */}
                {certificates.length > 0 && (
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>Certifications</h3>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-sm)'
                        }}>
                            {certificates.map((cert, index) => (
                                <div key={index} className="card fade-in-up" style={{
                                    padding: 'var(--spacing-sm) var(--spacing-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)',
                                    flex: '1 1 calc(33.333% - var(--spacing-sm))',
                                    minWidth: '250px',
                                    animationDelay: `${index * 0.1}s`,
                                    background: 'rgba(15, 23, 42, 0.6)'
                                }}>
                                    <div style={{
                                        color: 'var(--color-accent)',
                                        fontSize: '1.2rem'
                                    }}>
                                        🎖️
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                                            {cert.name}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
                                            {cert.issuer}
                                        </div>
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
