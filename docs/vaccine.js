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
 *      - in: query
 *        name: from
 *        schema:
 *          type: string
 *        description: Fecha inicial
 *      - in: query
 *        name: to
 *        schema:
 *          type: string
 *        description: Fecha final
 *    responses:
 *      '200':
 *        description: OK             
 *        
 */
