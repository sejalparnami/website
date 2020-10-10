import { createClient } from "contentful";

const spaceID = process.env.REACT_APP_CONTENTFUL_SPACE;
const apiKey = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
    space: spaceID,
    accessToken: apiKey,
});

const getData = () => client.getEntries().then((response) => response.items);

// const getCategory = () =>
//     client
//         .getContentType("entremets")
//         .then((response) => console.log(response.items));

export { getData };
