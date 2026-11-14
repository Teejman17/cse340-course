import { getAllProjects, getProjectDetails, getUpcomingProjects } from '../models/projects.js';

const number_of_upcoming_projects = 5;

const showProjectsPage = async (req, res) => {
    const projects = await getUpcomingProjects(number_of_upcoming_projects);
    res.render('projects', {
        title: 'Upcoming Service Projects',
        projects: projects
    });

    const title = 'Service Projects';
};

const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;
    const project = await getProjectDetails(projectId);
    if (!project) {
        return res.status(404).send('Project not found');
    }
    
    res.render('project', {
        title: project.title,
        project: project
    });
};
    

export { showProjectsPage, showProjectDetailsPage };