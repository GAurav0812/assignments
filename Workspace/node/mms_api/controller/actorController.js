const actorService = require('../service/actorService');
const constants = require('../constants');

module.exports.createActor = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await actorService.createActor(req.body);
    response.status = 200;
    response.message = constants.actorMessage.ACTOR_CREATED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: createActor', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

module.exports.getAllActors = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await actorService.getAllActors(req.query);
    response.status = 200;
    response.message = constants.actorMessage.ACTOR_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: getAllActors', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

module.exports.getActorById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await actorService.getActorById(req.params);
    response.status = 200;
    response.message = constants.actorMessage.ACTOR_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: getActorById', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

module.exports.updateActor = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await actorService.updateActor({
      id: req.params.id,
      updateInfo: req.body
    });
    response.status = 200;
    response.message = constants.actorMessage.ACTOR_UPDATED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: updateActor', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

module.exports.deleteActor = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await actorService.deleteActor(req.params);
    response.status = 200;
    response.message = constants.actorMessage.ACTOR_DELETED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: deleteActor', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}