import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});
