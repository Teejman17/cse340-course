import { getAllOrganizations } from '../models/organizations.js';

const showOrganizationPage = async (req, res) => {
    const organizations = await getAllOrganizations();
    const title = 'Our Partne Organizations';

    res.render('organizations', { title, organizations });
};

export { showOrganizationPage };