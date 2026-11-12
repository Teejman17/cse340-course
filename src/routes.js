import express from 'express';

import { showHomePage } from './controllers/home.js';
import { showCategoriesPage } from './controllers/categories.js';
import { showOrganizationsPage } from './controllers/organizations.js';
import { showProjectsPage } from './controllers/projects.js';
import { testErrorPage } from './controllers/errors.js';

const router = express.Router();

router.get('/', showHomePage);
router.get('/categories', showCategoriesPage);
router.get('/organizations', showOrganizationsPage);
router.get('/projects', showProjectsPage);
router.get('/errors', testErrorPage);

export default router;