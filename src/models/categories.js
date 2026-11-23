import db from './db.js';

const getAllCategories = async () => {
    const query = `
    SELECT *
    FROM categories;
    `;

    const result = await db.query(query);
    return result.rows;
}


const getCategoryById = async (category_id) => {
    const query = `
    SELECT
        category_id,
        name
    FROM categories
    WHERE category_id = $1
    `;

    const result = await db.query(query, [category_id]);
    return result.rows[0];
};

const getCategoriesByProjectId = async (project_id) => {
    const query = `
    SELECT c.category_id,
        c.name
    FROM categories c
    JOIN project_categories pc ON c.category_id = pc.category_id
    WHERE pc.project_id = $1
    `;

    const result = await db.query(query, [project_id]);
    return result.rows;
};

const getProjectByCategoryId = async (category_id) => {
    const query = `
    SELECT p.project_id,
        p.title
    FROM projects p
    JOIN project_categories pc ON p.project_id = pc.project_id
    WHERE pc.category_id = $1
    `;

    const result = await db.query(query, [category_id]);
    return result.rows;
};

const assignCategoryToProject = async (projectId, categoryId) => {
    const query = `
    INSERT INTO project_categories (category_id, project_id)
    VALUES ($1, $2);
    `;

    await db.query(query, [categoryId, projectId]);
};

const updateCateogoryAssignments = async (projectId, categoryIds) => {
    const deleteQuery = `
    DELETE FROM project_categories
    WEHERE project_id = $1;
    `;

    await db.query(deleteQuery, [projectId]);

    for (const categoryId of categoryIds) {
        await assignCategoryToProject(projectId, categoryId);
    };
};

export { getAllCategories, getCategoryById, getCategoriesByProjectId, getProjectByCategoryId, assignCategoryToProject, updateCateogoryAssignments };