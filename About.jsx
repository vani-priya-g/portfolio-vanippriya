import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const About = ({ resumeData }) => {
    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <ShapeDecorations variant="section" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">About Me</h2>

                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div className="card fade-in-up">
                        <h3 style={{ color: 'var(--color-primary)' }}>Background</h3>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            {resumeData?.about ||
                                'Passionate professional with expertise in creating innovative solutions. ' +
                                'Dedicated to excellence and continuous learning in the ever-evolving tech landscape.'}
                        </p>
                    </div>

                    <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 style={{ color: 'var(--color-secondary)' }}>What I Do</h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-sm)'
                        }}>
                            {(resumeData?.specialties || [
                                'Full-Stack Development',
                                'UI/UX Design',
                                'Problem Solving',
                                'Team Collaboration'
                            ]).map((item, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <span style={{
                                        width: '8px',
                                        height: '8px',
                                        background: 'var(--gradient-primary)',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                    }}></span>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
