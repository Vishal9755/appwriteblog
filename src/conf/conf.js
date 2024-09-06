// const conf = {
//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// }
// // there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

// export default conf

const conf = {
    appwriteUrl: "https://cloud.appwrite.io/v1",  // Ensure no trailing slash
    appwriteProjectId: "66db2173003058e7fb89",
    appwriteDatabaseId: "66db23080030f2a62bb3",
    appwriteCollectionId: "66db2326000653c45ba2",
    appwriteBucketId: "66db2470001d25ce9cc9"
  };
  
  export default conf