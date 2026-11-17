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

export { getAllCategories, getCategoryById, getCategoriesByProjectId, getProjectByCategoryId };