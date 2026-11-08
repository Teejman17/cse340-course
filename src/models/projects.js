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

export { getAllProjects };