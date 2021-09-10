/**
 * @swagger
 * tags:
 *   name: Vaccine
 */

/**
 * @swagger
 * /:
 *  get:
 *    tags: [Vaccine]
 *    summary: Get vaccines
 *    parameters:
 *      - in: query
 *        name: vaccine
 *        schema:
 *          type: string  
 *        description: El nombre de la vacuna. Ej 'Sputnik'   
 *    responses:
 *      '200':
 *        description: OK             
 *        
 */
