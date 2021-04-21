// THIS IS WHERE WE TALK TO SANITY
// Go to "manage.sanity.io/"
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "2dgwiew2", // can find this under studio, sanity.json, and find your id
    dataset: "production"
})