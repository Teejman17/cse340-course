import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showCategoriesPage, getCategoryDetails, showAssignCategoriesForm, processAssignCategoriesForm, showNewCategoryForm, processNewCategoryForm, showEditCategoryForm, processEditCategoryForm, categoryValidation } from './controllers/categories.js';
import { showOrganizationPage, showNewOrganizationForm, processNewOrganizationForm, organizationValidation, showEditOrganizationForm, processEditOrganizationForm } from './controllers/organizations.js';
import { showProjectsPage, showProjectDetailsPage, showNewProjectForm, processNewProjectForm, projectValidation, showEditProjectForm, processEditProjectForm } from './controllers/projects.js';
import { testErrorPage } from './controllers/errors.js';

const router = express.Router();

router.get('/', showHomePage);
router.get('/categories', showCategoriesPage);
router.get('/organizations', showOrganizationPage);
router.get('/category/:id', getCategoryDetails);
router.get('/organization/:id', showOrganizationPage);
router.get('/projects', showProjectsPage);
router.get('/project/:id', showProjectDetailsPage);
router.get('/errors', testErrorPage);
router.get('/edit-organization/:id', showEditOrganizationForm);

// Route for new organization page
router.get('/new-organization', showNewOrganizationForm)

// Route to handle new organization form submission
router.post('/new-organization', organizationValidation, processNewOrganizationForm);

// Route to handle edit organization form submission
router.post('/edit-organization/:id', organizationValidation, processEditOrganizationForm);

// Route for new project page
router.get('/new-project', showNewProjectForm);

// Route to handle new project form submission
router.post('/new-project', projectValidation, processNewProjectForm);

// Route for edit project page
router.get('/edit-project/:id', showEditProjectForm);

router.post('/edit-project/:id', projectValidation, processEditProjectForm);

router.get('/assign-categories/:projectId', showAssignCategoriesForm);

router.post('/assign-cateogories/:projectId', processAssignCategoriesForm);

router.get('/new-category', showNewCategoryForm);
router.post('/new-category', categoryValidation, processNewCategoryForm);
router.get('/edit-category/:id', showEditCategoryForm);
router.post('/edit-category/:id', categoryValidation, processEditCategoryForm);


export default router;