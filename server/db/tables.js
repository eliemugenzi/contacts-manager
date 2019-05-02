export const contactsTable = `
CREATE TABLE IF NOT EXISTS contacts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    createdOn DATE NOT NULL
)
`;
