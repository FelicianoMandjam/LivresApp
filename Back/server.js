import app from "./app.js";
import { ENV } from "./config/env.js";

const PORT = ENV.PORT || 8080 

app.listen(PORT, ()=>{
    console.log(`Listenning at port : http://localhost:${PORT}`)
})