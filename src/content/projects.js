export const curatedProjects = [
    {
        repoName: 'Paze',
        displayName: 'Paze',
        description: 'Parallel Waze simulation built with Go, WebSockets, React, and Canvas.',
    },
    {
        repoName: 'Can-I-Run-It',
        displayName: 'Can I Run It?',
        description: 'Full Stack PC game performance checker. Featuring hardware catalog, game requirements, and compatibility checks.',
    },
    {
        repoName: 'Gmail-AdvancedSystemProgramming',
        displayName: 'Gmail-like Mail System',
        description: 'A full-stack mail system built as an advanced systems programming project.',
    }
];

export const projectFallbacks = (username) => curatedProjects.map((project) => ({
    ...project,
    id: project.repoName,
    name: project.repoName,
    html_url: `https://github.com/${username}/${project.repoName}`,
    homepage: '',
    topics: [],
    updated_at: null,
}));
