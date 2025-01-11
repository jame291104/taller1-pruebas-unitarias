import supertest from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model.js";


describe('Pruebas de controladores de users', () => {

    /*
        beforeEach: para ejecutar acciones que queramos que se hagan antes de cada prueba
        afterAll: para ejecutar acciones despues que acaba la prueba
    */

    beforeEach(async () => {
        await userModel.deleteMany({}) //Borra todo lo del db
    });

    afterAll(async () => {
        await mongoose.connection.close()
    });

    const testUser = {
        fullName: "Jhon Doe",
        email: 'jhon@ejemplo.com',
        password: '123'
    }

    //2.1 Defino bloque de preuba para POST
    describe('Prueba Post /users', () => {
        /*
            casos exitoso
            caso fallido
        */

        // Primer caso de prueba
        it("Debería crear un usuario correctamente", async () => {
            const res = await supertest(app).post('/usuarios').send(testUser)

            //Definir que esperamos de esa respuesta
            expect(res.statusCode).toBe(201)
        })

        // Segundo caso de prueba
        it("Debería devolver un error si falta un campo obligatorio", async () => {
            const res = await supertest(app).post('/usuarios').send({
                email: 'jhon@ejemplo.com'
            })

            //Definir que esperamos de esa respuesta
            expect(res.body).toHaveProperty('mensaje', 'Ocurrió un error al crear un usuario')
        })
    });

    //2.2 Defino bloque de preuba para GET
    describe('Prueba GET /users', () => {

        //primer caso de prueba: debería indicar que no hay usuarios almacenados
        it('Debería indicar que no hay usuarios almacenados', async () => {
            const res = await supertest(app).get('/usuarios')
            // console.log(res.statusCode);
            
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('mensaje', 'No hay usuarios almacenados')

        })

        // Si van a probar que funcione la peticion get teniendo usuarios almacenados
        //await new userModel(testUser).save()

    });
}
)