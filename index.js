require('dotenv').config();
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const BASE_URL = 'https://api.hubapi.com';

// Vector-owned fields — always overwrite these
const VECTOR_PROPS = ['last_visited', 'lead_source'];

// The contact you want to sync
const incomingContact = {
  properties: {
    email: 'john.smith@acme.com',
    firstname: 'John',
    lastname: 'Smith',
    company: 'Acme Corp',
    last_visited: new Date().toISOString(),
    lead_source: 'Vector Reveal'
  }
};

// Step 1: Try to retrieve the contact by email
async function getContact(email) {
  // YOUR CODE HERE
  // Hit the retrieve endpoint
  // Return the contact if found, null if 404
  const options = {
  method: 'GET',
  headers: {Authorization: `Bearer ${HUBSPOT_API_KEY}`}
};

fetch('https://api.hubapi.com/crm/objects/2026-03/contact/{objectId}', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
}

// Step 2: Create a new contact
async function createContact(properties) {
  // YOUR CODE HERE
  // Hit the create endpoint
  // Return the result
}

// Step 3: Update an existing contact
async function updateContact(contactId, properties) {
  // YOUR CODE HERE
  // Hit the patch endpoint
  // Return the result
}

// Step 4: Your mergeProperties function from the mock
function mergeProperties(original, incoming) {
  // YOUR CODE HERE — you already wrote this one
}

// Step 5: Main sync function that orchestrates everything
async function syncContact(incomingContact) {
  const email = incomingContact.properties.email;
  
  console.log(`Syncing contact: ${email}`);
  
  const existing = await getContact(email);
  
  if (!existing) {
    // Contact doesn't exist — create it
    // YOUR CODE HERE
  } else {
    // Contact exists — merge and update
    // YOUR CODE HERE
  }
}

// Run it
syncContact(incomingContact);