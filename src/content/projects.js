export const curatedProjects = [
    {
        repoName: 'Paze-Showcase',
        displayName: 'Paze',
        icon: 'https://raw.githubusercontent.com/YuvalAnteby/Paze-Showcase/main/docs/paze.png',
        description: 'Parallel GPS simulation built with Go, WebSockets, React, and Canvas.',
    },
    {
        repoName: 'Can-I-Run-It',
        displayName: 'Can I Run It?',
        icon: 'https://i.imgur.com/nHVAmPm.png',
        description: 'Full Stack PC game performance checker. Featuring hardware catalog, game requirements, and compatibility checks.',
    },
    {
        repoName: 'Gmail-AdvancedSystemProgramming',
        displayName: 'Gmail-like Mail System',
        icon: 'https://raw.githubusercontent.com/YuvalAnteby/Gmail-AdvancedSystemProgramming/main/frontend/public/favicon.ico',
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
