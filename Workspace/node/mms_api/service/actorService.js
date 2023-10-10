const Actor = require('../database/models/actorModel');
const { formatMongoData, checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.createActor = async (serviceData) => {
  try {
    let actor = new Actor({ ...serviceData });
    let result = await actor.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Something went wrong: Service: createActor', error);
    throw new Error(error);
  }
}

module.exports.getAllActors = async ({ skip = 0, limit = 10 }) => {
  try {
    let actors = await Actor.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    return formatMongoData(actors);
  } catch (error) {
    console.log('Something went wrong: Service: getAllActors', error);
    throw new Error(error);
  }
}

module.exports.getActorById = async ({ id }) => {
  try {
    checkObjectId(id);
    let actor = await Actor.findById(id);
    if (!actor) {
      throw new Error(constants.actorMessage.ACTOR_NOT_FOUND);
    }
    return formatMongoData(actor);
  } catch (error) {
    console.log('Something went wrong: Service: getActorById', error);
    throw new Error(error);
  }
}

module.exports.updateActor = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let actor = await Actor.findOneAndUpdate(
      { _id: id },
      updateInfo,
      { new: true }
    )
    if (!actor) {
      throw new Error(constants.actorMessage.ACTOR_NOT_FOUND);
    }
    return formatMongoData(actor);
  } catch (error) {
    console.log('Something went wrong: Service: updateActor', error);
    throw new Error(error);
  }
}

module.exports.deleteActor = async ({ id }) => {
  try {
    checkObjectId(id);
    let actor = await Actor.findByIdAndDelete(id);
    if (!actor) {
      throw new Error(constants.actorMessage.ACTOR_NOT_FOUND);
    }
    return formatMongoData(actor);
  } catch (error) {
    console.log('Something went wrong: Service: deleteActor', error);
    throw new Error(error);
  }
}