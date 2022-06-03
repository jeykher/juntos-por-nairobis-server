import mongoose from "mongoose";

import CONFIG from "../../config/config";
import KEYS from "../../keys/keys";

import Clicolor from "../../utils/colors/Clicolor";

(async () => {
    try {
        let mongoDBDriver: any | undefined = undefined; 
        switch(CONFIG.database.engine) {
            case "local":
                mongoDBDriver = `${CONFIG.database.driver}://${CONFIG.database.host}:${CONFIG.database.port}/${CONFIG.database.name}`;
                break;
            case "atlas":
                mongoDBDriver = `${CONFIG.database.driver}://${CONFIG.database.user}:${KEYS.mongoDBAtlas.key}@${CONFIG.database.host}/${CONFIG.database.name}?retryWrites=true&w=majority`;
                break;
            default:
                break;
        }
        Clicolor.waitingMessage("Establish MongoDB Atlas database connection...");
        const db: any = await mongoose.connect(mongoDBDriver);
        Clicolor.successMessage(`MongoDB Atlas database connection has been successfull`);
        Clicolor.successMessage(`Server has been connected ${db.connection.name} database`);
    }
    catch(error) {
        Clicolor.errorMessage("MongoDB database connection has failed!");
        console.error(error);
    }
})();
