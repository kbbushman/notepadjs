import express from 'express';
const router = express.Router();

export const createCellsRouter = (filename: string, dir: string) => {
  router.get('/cells', async (req, res) => {});

  router.post('/cells', async (req, res) => {});

  return router;
};
