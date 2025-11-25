import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Skills = ({ resumeData }) => {
    const defaultSkills = [
        { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript'] },
        { category: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'Databases'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Docker'] },
    ];

    const skills = resumeData?.skills || defaultSkills;

    return (
        <section id="skills" className="section" style={{
            background: 'var(--color-bg-dark)',
            position: 'relative'
        }}>
            <ShapeDecorations variant="section" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="grid grid-3">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            className="card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--gradient-primary)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 'var(--spacing-md)',
                                transform: 'rotate(45deg)'
                            }}>
                                <span style={{
                                    transform: 'rotate(-45deg)',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}>
                                    {skillGroup.category?.charAt(0) || '•'}
                                </span>
                            </div>

                            <h3 style={{
                                fontSize: '1.25rem',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                {skillGroup.category}
                            </h3>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'var(--spacing-xs)'
                            }}>
                                {skillGroup.items?.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            border: '1px solid rgba(99, 102, 241, 0.3)',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: '0.875rem',
                                            color: 'var(--color-text-secondary)',
                                            transition: 'all var(--transition-base)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                                            e.target.style.borderColor = 'var(--color-primary)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                                            e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
