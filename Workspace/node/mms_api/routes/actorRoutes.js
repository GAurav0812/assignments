const express = require('express');
const router = express.Router();
const actorController = require('../controller/actorController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const actorSchema = require('../apiSchema/actorSchema');
const tokenValidation = require('../middleware/tokenValidation');

router.post('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(actorSchema.createActorSchema),
    actorController.createActor
);

router.get('/:id',
    tokenValidation.validateToken,
    actorController.getActorById
);

router.put('/:id',
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(actorSchema.updateActorSchema),
    actorController.updateActor
);

router.get('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateQueryParams(actorSchema.getAllActorSchema),
    actorController.getAllActors
);

router.delete('/:id',
    tokenValidation.validateToken,
    actorController.deleteActor
)

module.exports = router;