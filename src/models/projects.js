import db from './db.js';

const getAllProjects = async () => {
    const query = `
    SELECT
        projects.project_id,
        projects.title,
        projects.description,
        projects.location,
        projects.date,
        organizations.name AS organization_name
    FROM projects
    JOIN organizations ON projects.organization_id = organizations.organization_id
    ORDER BY projects.project_id;
    `;

    const result = await db.query(query);
    return result.rows;
}

const getUpcomingProjects = async (number_of_projects) => {
    const query = `
    SELECT
        projects.project_id AS project_id,
        projects.title,
        projects.description,
        projects.date,
        projects.location,
        projects.organization_id,
        organizations.name AS organization_name
        FROM projects
        JOIN organizations ON projects.organization_id = organizations.organization_id
        WHERE projects.date >= NOW()
        ORDER BY projects.date ASC
        LIMIT $1
    `;

    const result = await db.query(query, [number_of_projects]);
    return result.rows;

}

const getProjectDetails = async (id) => {
    const query = `
    SELECT
        projects.project_id AS project_id,
        projects.title,
        projects.description,
        projects.date,
        projects.location,
        projects.organization_id,
        organizations.name AS organization_name
    FROM projects
    JOIN organizations ON projects.organization_id = organizations.organization_id
    WHERE projects.project_id = $1
    `;

    const result = await db.query(query, [id]);
    return result.rows[0];
}

export { getAllProjects, getUpcomingProjects, getProjectDetails };