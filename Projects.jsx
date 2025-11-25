import React from 'react';
import ShapeDecorations from './ShapeDecorations';

const Projects = ({ resumeData }) => {
    const projects = resumeData?.projects || [];

    return (
        <section id="projects" className="section" style={{
            background: 'var(--color-bg-dark)',
            position: 'relative'
        }}>
            <ShapeDecorations variant="section" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Projects</h2>

                <div className="grid grid-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card fade-in-up"
                            style={{
                                animationDelay: `${index * 0.2}s`,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Project Icon */}
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'var(--gradient-primary)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 'var(--spacing-md)',
                                fontSize: '2rem'
                            }}>
                                {index === 0 ? '🔧' : '🐠'}
                            </div>

                            {/* Project Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: 'var(--spacing-sm)',
                                color: 'var(--color-text-primary)'
                            }}>
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p style={{
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                {project.description}
                            </p>

                            {/* Achievements */}
                            {project.achievements && project.achievements.length > 0 && (
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--spacing-sm)',
                                    marginBottom: 'var(--spacing-md)',
                                    flex: 1
                                }}>
                                    {project.achievements.map((achievement, achIndex) => (
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
                                            <span style={{
                                                color: 'var(--color-text-muted)',
                                                fontSize: '0.95rem',
                                                lineHeight: 1.6
                                            }}>
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Technology Tags */}
                            {project.tags && project.tags.length > 0 && (
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 'var(--spacing-xs)',
                                    marginTop: 'auto'
                                }}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            style={{
                                                padding: '0.4rem 0.8rem',
                                                background: 'rgba(139, 92, 246, 0.1)',
                                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.8rem',
                                                color: 'var(--color-secondary)',
                                                fontWeight: 500
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
