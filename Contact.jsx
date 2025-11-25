import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Contact = ({ resumeData }) => {
    const contactInfo = resumeData?.contact || {
        email: 'contact@example.com',
        phone: '+1 234 567 8900',
        location: 'City, Country'
    };

    const socialLinks = resumeData?.social || [
        { name: 'LinkedIn', url: '#', icon: 'in' },
        { name: 'GitHub', url: '#', icon: 'gh' }
    ];

    return (
        <section id="contact" className="section" style={{
            background: 'var(--color-bg-dark)',
            position: 'relative'
        }}>
            <ShapeDecorations variant="section" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Get In Touch</h2>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: '1.125rem',
                        marginBottom: 'var(--spacing-xl)',
                        color: 'var(--color-text-secondary)'
                    }}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="grid grid-3" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div className="card fade-in-up">
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto var(--spacing-md)',
                                fontSize: '1.5rem'
                            }}>
                                📧
                            </div>
                            <h4 style={{
                                fontSize: '0.875rem',
                                color: 'var(--color-text-muted)',
                                marginBottom: '0.5rem'
                            }}>
                                Email
                            </h4>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                style={{
                                    color: 'var(--color-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem'
                                }}
                            >
                                {contactInfo.email}
                            </a>
                        </div>

                        {contactInfo.phone && (
                            <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto var(--spacing-md)',
                                    fontSize: '1.5rem'
                                }}>
                                    📱
                                </div>
                                <h4 style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.5rem'
                                }}>
                                    Phone
                                </h4>
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    style={{
                                        color: 'var(--color-primary)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    {contactInfo.phone}
                                </a>
                            </div>
                        )}

                        {contactInfo.location && (
                            <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto var(--spacing-md)',
                                    fontSize: '1.5rem'
                                }}>
                                    📍
                                </div>
                                <h4 style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.5rem'
                                }}>
                                    Location
                                </h4>
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 0,
                                    fontSize: '0.95rem'
                                }}>
                                    {contactInfo.location}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Social Links with SVG Icons */}
                    <div style={{
                        display: 'flex',
                        gap: 'var(--spacing-md)',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textDecoration: 'none',
                                    color: 'var(--color-primary)',
                                    padding: 0
                                }}
                                title={social.name}
                            >
                                {social.name === 'LinkedIn' ? (
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                ) : (
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: 'var(--spacing-3xl)',
                paddingTop: 'var(--spacing-lg)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
            }}>
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.875rem'
                }}>
                    © {new Date().getFullYear()} {resumeData?.name || 'Professional Portfolio'}. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Contact;
