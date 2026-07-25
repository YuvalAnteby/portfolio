import {projectFallbacks} from './projects';

const GITHUB_API_BASE = 'https://api.github.com';
const EXCLUDE_UI_TOPICS = new Set(['featured', 'biu', 'hide-from-portfolio']);
const PRIORITY_RX = /^priority-(\d+)$/i;

export const fetchUserRepos = async (username, limit = 6) => {
    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch repos');
        return mergeCuratedProjects(await response.json(), username).slice(0, limit);
    } catch (error) {
        console.error('Error fetching repos:', error);
        throw error;
    }
};

export const mergeCuratedProjects = (repos, username) => {
    const reposByName = new Map(repos.map((repo) => [repo.name, repo]));

    return projectFallbacks(username).map((project) => ({
        ...project,
        ...reposByName.get(project.repoName),
        displayName: project.displayName,
        description: project.description,
        topics: displayTopics(reposByName.get(project.repoName)?.topics || []),
    }));
};

const displayTopics = (topics = []) =>
    topics.filter((topic) => !EXCLUDE_UI_TOPICS.has(topic) && !PRIORITY_RX.test(topic));
