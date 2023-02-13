import { Router } from "express";
import {AdRecord} from "../records/ad.records";

export const adRouter = Router()
    .get('/search/:name?', async (req, res) => {

        const ads = await AdRecord.findAll(req.params.name ?? '');

        res.json(ads)
    })

    .get('/:id', async  (req, res) => {

    })