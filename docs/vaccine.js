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
 *      - in: query
 *        name: type
 *        schema:
 *          type: string
 *        description: Tipo efector (Público o Privado)
 *      - in: query
 *        name: gender
 *        schema:
 *          type: string
 *        description: Genero (F o M)
 *      - in: query
 *        name: ageGroup
 *        schema:
 *          type: string
 *        description: Grupo etareo. ([30 o menos, 31 a 40, 41 a 50, 51 a 60, 61 a 70, 71 a 80, 81 a 90, 91 o mas])
 *    responses:
 *      '200':
 *        description: OK             
 *        
 */
