import DeploymentModel, { Deployment } from "../modals/deployment.modal";

/**
 * This controller reutrn a list of all the deployments
 * @returns Promise that resolves into a list of all the deployments
 */
export let getAllDeployments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      //as we do not have any params to search for so we are returning all the deployemnts
      //well this is not recommended to do in prod as there could be millions of deployments
      let deployments = await DeploymentModel.find({});
      resolve(deployments);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * This service created a new deployment
 * @param data All the data required for creating new deployment
 * @returns a promise that resolves into newly created deployment
 */
export let createDeployment = (data: Deployment) => {
  return new Promise(async (resolve, reject) => {
    try {
      let deployment = new DeploymentModel(data);
      let saved_deployment = await deployment.save();
      resolve(saved_deployment);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * This service delete a deployment
 * @param id it is the id of the deployment that is to be deleted
 * @returns a promise that resolves into delete information
 */
export let deleteDeployment = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let deleteInfo = await DeploymentModel.findByIdAndDelete(id);
      resolve(deleteInfo);
    } catch (err) {
      reject(err);
    }
  });
};
