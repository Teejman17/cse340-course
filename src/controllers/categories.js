import { getAllCategories, getCategoryById, getCategoriesByProjectId, getProjectByCategoryId  } from '../models/categories.js';

const showCategoriesPage = async (req, res) => {
    const categories = await getAllCategories();
    const title = 'Categories';

    res.render('categories', { title, categories });
};

const getCategoryDetails = async (req, res, next) => {
    const category_id = req.params.id;

    const category = await getCategoryById(category_id);
    const projects = await getProjectByCategoryId(category_id);

    res.render('category', {
        title: category.name,
        category: category,
        projects: projects
    });
}

export { showCategoriesPage, getCategoryDetails };