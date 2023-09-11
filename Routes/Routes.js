import express from "express";
import {login,register} from "../Controller/controllers.js";
import { details,bookings } from "../Controller/TourControl.js";

const Routes = express.Router();

Routes.post('/login',login)

Routes.post('/register',register)

Routes.post('/travels',details)

Routes.post('/book',bookings)


export default Routes;