export const curatedProjects = [
    {
        repoName: 'Can-I-Run-It',
        displayName: 'Can I Run It?',
        description: 'Full Stack PC game performance checker. Featuring hardware catalog, game requirements, and compatibility checks.',
    },
    {
        repoName: 'Gmail-AdvancedSystemProgramming',
        displayName: 'Gmail-like Mail System',
        description: 'A full-stack mail system built as an advanced systems programming project.',
    },
    {
        repoName: 'Android-FollowMeProject',
        displayName: 'FollowMe',
        description: 'An Android project that enables a follow-me mission for drones such as the DJI Spark.',
    },
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
