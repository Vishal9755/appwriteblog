// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";


// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
            
//     }

//     async createAccount({email, password, name}) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if (userAccount) {
//                 // call another method
//                 return this.login({email, password});
//             } else {
//                return  userAccount;
//             }
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({email, password}) {
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite serive :: getCurrentUser :: error", error);
//         }

//         return null;
//     }

//     async logout() {

//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite serive :: logout :: error", error);
//         }
//     }
// }

// const authService = new AuthService();

// export default authService

// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }

//     async createAccount({ email, password, name }) {
//         try {
//             // Log input details
//             console.log("Creating account with email:", email);
    
//             // Attempt to create a new user account
//             const userAccount = await this.account.createUser({
//                 userId: ID.unique(), // or provide a specific user ID if needed
//                 email,
//                 password,
//                 name
//             });
    
//             console.log("User account created:", userAccount);
    
//             // Automatically log in after account creation
//             console.log("Attempting to log in with email:", email);
//             if (userAccount) {
//                 const session = await this.login({ email, password });
//                 console.log("Login successful:", session);
//                 return session;
//             }
    
//             // Handle failure if userAccount is not returned
//             throw new Error("Account creation failed.");
//         } catch (error) {
//             // Log detailed error information
//             console.error("AuthService :: createAccount :: error", error);
//             throw new Error("Failed to create account. Please check your inputs and try again.");
//         }
//     }
    
    
    

//     async login({ email, password }) {
//         try {
//             // Correct method for creating a session
//             return await this.account.createSession(email, password);
//         } catch (error) {
//             console.error("AuthService :: login :: error", error);
//             throw new Error("Login failed. Please check your credentials and try again.");
//         }
//     }

//     async getCurrentUser() {
//         try {
//             const user = await this.account.get();
//             return user;
//         } catch (error) {
//             console.error("AuthService :: getCurrentUser :: error", error);
//             // Log detailed error message
//             if (error.response) {
//                 console.error("Error Response:", error.response);
//             }
//             if (error.message) {
//                 console.error("Error Message:", error.message);
//             }
//             return null;
//         }
//     }
    
//     async logout() {
//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.error("AuthService :: logout :: error", error);
//             throw new Error("Failed to log out. Please try again.");
//         }
//     }

//     // Optional: Check if a user is logged in
//     async isLoggedIn() {
//         try {
//             const user = await this.getCurrentUser();
//             return user !== null;
//         } catch {
//             return false;
//         }
//     }
// }

// const authService = new AuthService();
// export default authService;



// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         const endpoint = conf.appwriteUrl.endsWith('/') ? conf.appwriteUrl.slice(0, -1) : conf.appwriteUrl;
//         this.client.setEndpoint(endpoint).setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }

//     async createAccount({ email, password, name }) {
//         try {
//             // Use the correct method for creating a user
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
            
//             console.log("User account created:", userAccount);

//             // Automatically log in after account creation
//             if (userAccount) {
//                 return await this.login({ email, password });
//             }

//             // Handle failure if userAccount is not returned
//             throw new Error("Account creation failed.");
//         } catch (error) {
//             // Log detailed error information
//             console.error("AuthService :: createAccount :: error", error);
//             throw new Error("Failed to create account. Please check your inputs and try again.");
//         }
//     }

//     async login({ email, password }) {
//         try {
//             console.log("Logging in with email:", email);
//             return await this.account.createSession(email, password);
//         } catch (error) {
//             console.error("AuthService :: login :: error", error);
//             throw new Error("Login failed. Please check your credentials and try again.");
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.error("AuthService :: getCurrentUser :: error", error);
//             return null;
//         }
//     }

//     async logout() {
//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.error("AuthService :: logout :: error", error);
//             throw new Error("Failed to log out. Please try again.");
//         }
//     }
// }

// const authService = new AuthService();
// export default authService;



import conf from '../conf/conf.js';
import { Client, Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        const endpoint = conf.appwriteUrl.endsWith('/') ? conf.appwriteUrl.slice(0, -1) : conf.appwriteUrl;
        this.client.setEndpoint(endpoint).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            // Ensure proper user ID format if required
            const userId = ID.unique(); // This should be a valid user ID format
            
            // Attempt to create a new user account
            const userAccount = await this.account.create(userId, email, password, name);
            
            console.log("User account created:", userAccount);

            // Automatically log in after account creation
            if (userAccount) {
                return await this.login({ email, password });
            }

            // Handle failure if userAccount is not returned
            throw new Error("Account creation failed.");
        } catch (error) {
            // Log detailed error information
            console.error("AuthService :: createAccount :: error", error);
            throw new Error("Failed to create account. Please check your inputs and try again.");
        }
    }

    async login({ email, password }) {
        try {
            console.log("Logging in with email:", email);
            // Create a session with email and password
            return await this.account.createSession(email, password);
        } catch (error) {
            console.error("AuthService :: login :: error", error);
            throw new Error("Login failed. Please check your credentials and try again.");
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("AuthService :: logout :: error", error);
            throw new Error("Failed to log out. Please try again.");
        }
    }
}

const authService = new AuthService();
export default authService;
