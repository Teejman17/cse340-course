import { getAllCategories, getCategoryById, getCategoriesByProjectId, getProjectByCategoryId, updateCateogoryAssignments } from '../models/categories.js';
import { getProjectDetails } from '../models/projects.js';

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
};

const showAssignCategoriesForm = async (req, res) => {
    const projectId = req.params.projectId;
    const projectDetails = await getProjectDetails(projectId);
    const categories = await getAllCategories();
    const assignedCategories = await getCategoriesByProjectId(projectId);

    const title = 'Assign Categories to Project';
    res.render('assign-categories', { title, projectId, projectDetails, categories, assignedCategories });
};

const processAssignCategoriesForm = async (req, res) => {
    const projectId = req.params.projectId;
    const selectedCategories = req.body.categoryIds || [];

    const categoryIdsArray = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];
    await updateCategoryAssignments(projectId, categoryIdsArray);
    req.flash('success', 'Categories updated successfully.');
    res.redirect(`/project/${projectId}`)
}

export { showCategoriesPage, getCategoryDetails, showAssignCategoriesForm, processAssignCategoriesForm };