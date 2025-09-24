const GITHUB_API_BASE = 'https://api.github.com';
// Hide entire repo if any of these topics present
const EXCLUDE_REPO_TOPICS = new Set(['hide-from-portfolio', 'biu']);
// Hide from UI chips, but still usable for sorting/labels
const EXCLUDE_UI_TOPICS = new Set(['featured']);
const PRIORITY_RX = /^priority-(\d+)$/i;

/**
 * Fetches the user's repos from GitHub using the official API
 * @param {string} username username to fetch for
 * @param {number|6} limit max amount of repos to return
 * @returns {Promise<*>} list of repos with metadata
 */
export const fetchUserRepos = async (username, limit = 6) => {
    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`);
        if (!response.ok) throw new Error('Failed to fetch repos');
        const filteredRepos = await filterRepos(await response.json());
        const sortedRepos = sortRepos(filteredRepos);
        return sortedRepos.slice(0, limit).map(r => ({
            ...r,
            topics: displayTopics(r.topics || []),
        }));
    } catch (error) {
        console.error('Error fetching repos:', error);
        throw error;
    }
};

/**
 * Filters given repos.
 * Removes ones with `biu` or `hide-from-portfolio` as topics - those aren't relevant to me.
 * @param repos list of repos
 * @returns {*} repos filtered
 */
const filterRepos = (repos) =>
    repos
        .filter(r => !r.fork && !r.archived && !r.disabled)
        .filter(r => !r.topics?.some(t => EXCLUDE_REPO_TOPICS.has(t)))
        .slice(0, 6);

/**
 * Sorts given repos according to priority provided in topics, then stars and finally recency of updates.
 * @param repos list of repos with metadata
 * @returns {*[]} sorted repos
 */
const sortRepos = (repos) =>
    [...repos].sort((a, b) => {
        const pa = priorityFromTopics(a.topics || []);
        const pb = priorityFromTopics(b.topics || []);

        if (pa !== pb) return pa - pb; // smaller = higher priority

        const sa = a.stargazers_count || 0;
        const sb = b.stargazers_count || 0;
        if (sa !== sb) return sb - sa;

        return new Date(b.updated_at) - new Date(a.updated_at);
    });

/**
 * Sets repos with topic `featured` first, then repos with `priority-X`.
 * The Smaller the value X, the higher the priority (min=1, max=10)
 * @param topics list of topics, default has no topics
 * @returns {number} priority level when showing the repos (0 = max priority, 10 = min priority)
 */
const priorityFromTopics = (topics = []) => {
    if (topics.includes('featured')) return 0; // featured always first
    const p = topics
        .map(t => PRIORITY_RX.exec(t))
        .filter(Boolean)
        .map(m => parseInt(m[1], 10));
    return p.length ? Math.min(...p) : Infinity;
};

/**
 * Creates a display-only topics array with featured/priority/biu removed
 * @param topics
 * @returns {*[]}
 */
const displayTopics = (topics = []) =>
    topics.filter(t => !EXCLUDE_UI_TOPICS.has(t) && !PRIORITY_RX.test(t));