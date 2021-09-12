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
 *        name: page
 *        schema:
 *          type: string
 *        description: Page number
 *      - in: query
 *        name: limit
 *        schema:
 *          type: string
 *        description: Results per page
 *      - in: query
 *        name: vaccine
 *        schema:
 *          type: string  
 *        description: El nombre de la vacuna. Ej 'Sputnik'
 *      - in: query
 *        name: from
 *        schema:
 *          type: string
 *        description: Fecha inicial (YYYY-MM-DD)
 *      - in: query
 *        name: to
 *        schema:
 *          type: string
 *        description: Fecha final (YYYY-MM-DD)
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

/**
 * @swagger
 * /pie:
 *  get:
 *    tags: [Vaccine]
 *    summary: Get first and second doses for the filters applied
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
 *        description: Fecha inicial (YYYY-MM-DD)
 *      - in: query
 *        name: to
 *        schema:
 *          type: string
 *        description: Fecha final (YYYY-MM-DD)
 *    responses:
 *      '200':
 *        description: OK
 *
 */

/**
 * @swagger
 * /lines:
 *  get:
 *    tags: [Vaccine]
 *    summary: Get first and second doses for the filters applied, grouped by month
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
 *        description: Fecha inicial (YYYY-MM-DD)
 *      - in: query
 *        name: to
 *        schema:
 *          type: string
 *        description: Fecha final (YYYY-MM-DD)
 *    responses:
 *      '200':
 *        description: OK
 *
 */
