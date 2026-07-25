import {useState, useEffect} from 'react';
import {fetchUserRepos} from "../content/GithubService";
import {projectFallbacks} from "../content/projects";


export const useGithubRepos = (username, limit = 6) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRepos = async () => {
            try {
                const data = await fetchUserRepos(username, limit);
                setRepos(data);
            } catch (err) {
                setError(err);
                setRepos(projectFallbacks(username).slice(0, limit));
            } finally {
                setLoading(false);
            }
        };

        loadRepos();
    }, [username, limit]);

    return {repos, loading, error};
};


