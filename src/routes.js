import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showCategoriesPage, getCategoryDetails } from './controllers/categories.js';
import { showOrganizationPage } from './controllers/organizations.js';
import { showProjectsPage, showProjectDetailsPage } from './controllers/projects.js';
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



export default router;