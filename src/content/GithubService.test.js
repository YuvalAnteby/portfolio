import {mergeCuratedProjects} from './GithubService';

test('keeps curated order and copy while enriching from GitHub', () => {
    const projects = mergeCuratedProjects([
        {id: 1, name: 'Can-I-Run-It', description: 'API copy', topics: ['featured', 'react']},
    ], 'YuvalAnteby');

    expect(projects[0]).toMatchObject({
        id: 1,
        displayName: 'Can I Run It?',
        topics: ['react'],
    });
    expect(projects[0].description).not.toBe('API copy');
    expect(projects[1].html_url).toContain('Gmail-AdvancedSystemProgramming');
});
