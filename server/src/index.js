import { app } from "./app.js";
import 'dotenv/config';

app.listen(process.env.PORT, ()=> {
    console.log(`SERVER STARTED at localhost:${process.env.PORT}`)
})