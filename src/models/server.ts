import express, { Application, Request, Response } from 'express'
import routeProducto from '../routes/productos'
import db from '../db/connection'
import cors from 'cors';

class Server{

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.route();
        this.dbConnect();
    }
    
    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        });
    }

    route(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msj: "API Working"
            });
        });
        this.app.use('/api/productos', routeProducto)
    }

    middlewares(){
        //Parseamos el body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConnect(){
        try {
            await db.authenticate();
        console.log("Base de datos conectada")
        } catch (error) {
            console.log(error);
            console.log("Error al conectar con la base de datos");
        }
    }
}

export default Server;