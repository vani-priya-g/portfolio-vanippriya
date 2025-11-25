import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Hero = ({ resumeData }) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
            position: 'relative'
        }}>
            <ShapeDecorations variant="hero" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="fade-in-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
                        {resumeData?.name || 'Professional Portfolio'}
                    </h1>

                    <h3 style={{
                        color: 'var(--color-text-secondary)',
                        fontWeight: 500,
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        {resumeData?.title || 'Developer | Designer | Creator'}
                    </h3>

                    <p style={{
                        fontSize: '1.125rem',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-xl)',
                        color: 'var(--color-text-muted)'
                    }}>
                        {resumeData?.summary || 'Crafting exceptional digital experiences with modern technologies and creative solutions.'}
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: 'var(--spacing-md)',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => scrollToSection('experience')}
                        >
                            View Work
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'float 2s ease-in-out infinite'
            }}>
                <div style={{
                    width: '30px',
                    height: '50px',
                    border: '2px solid var(--color-primary)',
                    borderRadius: '20px',
                    position: 'relative'
                }}>
                    <div style={{
                        width: '6px',
                        height: '10px',
                        background: 'var(--gradient-primary)',
                        borderRadius: '3px',
                        position: 'absolute',
                        top: '8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animation: 'float 1.5s ease-in-out infinite'
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
