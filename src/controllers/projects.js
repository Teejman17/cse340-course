import { getAllProjects, getProjectDetails, getUpcomingProjects } from '../models/projects.js';
import { getCategoriesByProjectId, getProjectByCategoryId } from '../models/categories.js';

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

    const categories = await getCategoriesByProjectId(projectId);
    
    res.render('project', {
        title: project.title,
        project: project,
        categories: categories
    });
};
    

export { showProjectsPage, showProjectDetailsPage };