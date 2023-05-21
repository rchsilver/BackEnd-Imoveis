import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { handleErros } from "./error";
import { usersRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { categoryRoute } from "./routes/category.routes";
import { realEstateRoute } from "./routes/realEstate.routes";
import { scheduleRoute } from "./routes/schedules.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoryRoute);
app.use("/realEstate", realEstateRoute);
app.use("/schedules", scheduleRoute);

app.use(handleErros);

export default app;
