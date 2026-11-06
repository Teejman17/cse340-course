CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);


-- ========================================
-- Insert sample data: Organizations
-- ========================================


INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', 
'A nonprofit focused on improving community infrastructure through sustainable construction projects.',
'info@brightfuturebuilders.org',
'brightfuture-logo.png'),
('GreenHarvest Growers', 
'An urban farming collective promoting food sustainability and education in local neighborhoods.',
'contact@greenharvest.org',
'greenharvest-logo.png'),
('UnityServe Volunteers', 
'A volunteer coordination group supporting local charities and service initiatives.', 
'hello@unityserve.org',
'unityserve-logo.png');

-- ========================================
-- Create table projects
-- ========================================

CREATE TABLE projects (
	project_id SERIAL PRIMARY KEY,
	organization_id INTEGER REFERENCES organizations(organization_id),
	title VARCHAR(225) NOT NULL,
	description TEXT,
	location VARCHAR(255),
	date DATE
);

-- ========================================
-- Insert sample data: Projects
-- ========================================

INSERT INTO projects (organization_id, title, description, location, date)
VALUES
(2, 'Community Garden Planting', 'Planting fall vegetables and herbs in the raised beds.', 'GreenHarvest Community Center', '2026-11-07'),
(2, 'Composting Workshop', 'Teaching local residents home composting techniques.', 'GreenHarvest Urban Farm', '2026-11-12'),
(2, 'Community Tree Planting', 'Planting native shade trees along neighborhood streets and walking paths.', 'GreenHarvest Community Center', '2026-11-15'),
(2, 'Senior Center Garden Beds', 'Building accessible raised garden beds and planting flowers at a local senior living facility.', 'GreenHarvest Community Center', '2026-11-18'),
(2, 'Neighborhood Recycling Drive', 'Setting up a collection point and sorting recycable materials and electronic waste.', 'GreenHarvest Dump Facility', '2026-11-22'),
(1, 'Foundation Framing', 'Assisting constructions leads with framing exterior walls for a community build.', 'BrightFuture Job Site', '2026-11-10'),
(1, 'Safety Workshop', 'A workshop teaching basic tool safetly and home repair skills.', 'BrightFuture Hardware Supply', '2026-11-07'),
(1, 'Tool Maintenance Day', 'Cleaning, sharpening, and repairing donated hand tools and power tools for future community builds.', 'BrightFuture Service Center', '2026-11-17'),
(1, 'Parks Restroom Renovation', 'Minor carpentry repairs, sanding, and repainting wooden fixtures at the community park.', 'BrightFuture Community Park', '2026-11-21'),
(1, 'Food Pantry Construction', 'Building, and painting of multiple shelving that is to be used by the food pantry to stock and store bulk food donations.', 'BrightFuture Food Pantry', '2026-11-26'),
(3, 'Youth Mentorship Kickoff', 'Welcome event for mentors and local high school students.', 'UnityServe Community Hall', '2026-11-08'),
(3, 'Library Beautification', 'Painting murals and reading rooms inside the local underfunded public library.', 'UnityServe Library', '2026-11-16'),
(3, 'Backpack Drive', 'Organizing and packing school supplies and backpacks for children ahead of the school year.', 'UnityServe Community Hall', '2026-11-18'),
(3, 'After-School Tutoring Preparation', 'Organizing desks, computers, and learning supplies for a new youth after-school tutoring center.', 'UnityServe Tutoring Center', '2026-11-24'),
(3, 'Coat Drive', 'Collecting, sorting, and distributing winter coats and blankets before freezing weather hits.', 'UnityServe Community Hall', '2026-11-28');

-- ========================================
-- Verify Inserted sample data: Projects
-- ========================================

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