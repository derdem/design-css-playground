import express from "express";
import proxy from "express-http-proxy";

const router = express.Router();
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(proxy("http://frontend:4000", {
    filter: (req) => {
        return new Promise(function (resolve) {
            const apiRegEx = /\/api*/
            const { originalUrl } = req;
            const regExMatch = originalUrl.match(apiRegEx)
            resolve(regExMatch === null);
        });
    }
}));

app.listen(port, () => console.log(`listening on port: ${port}`))

