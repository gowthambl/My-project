
import express from 'express';
import controller from './controller';



export default() => {

const route = new express.Router();


route.get('/',controller.first);
route.get('/api/getall',controller.getall);
route.get('/api/get/:id',controller.get);
route.post('/api/create',controller.create);
route.put('/api/update/:id',controller.update);

route.get('/api/delete/:id',controller.delete);
route.get('/api/delete/',controller.deleteall);


return route;

}
