import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  const now = new Date();
  const nextYear = new Date(now.setFullYear(now.getFullYear() + 1));
  res.cookie('cookiesTest', 'set cookies success,your cookies can be set by server', { expires: nextYear, httpOnly: true });
  res.render('index', { title: 'Express' });
});

router.get('/setCookies', (req: Request, res: Response) => {
  const now = new Date();
  const nextYear = new Date(now.setFullYear(now.getFullYear() + 1));
  res.cookie('cookiesTest', 'set cookies success,your cookies can be set by server', { expires: nextYear, httpOnly: true });
  res.status(200);
  res.end('SET COOKIES SUCCESS');
});

router.get('/getCookies', (req: Request, res: Response) => {
  res.status(200);
  res.end(JSON.stringify(req.cookies));
});

export default router;
