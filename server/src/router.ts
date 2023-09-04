import { Router } from "express";
const router = Router();
router.get('/posts', (req, res)=>{
    res.json({
        message:"Hello"
    })
})
router.get('/posts/:id', ()=>{})
router.post('/posts', ()=>{})
router.put('/posts/:id',()=>{})
router.delete('/posts/:id',()=>{})

router.get('/comments', ()=>{})
router.get('/comments/:id', ()=>{})
router.post('/comments', ()=>{})
router.delete('/comments/:id',()=>{})

export default router;