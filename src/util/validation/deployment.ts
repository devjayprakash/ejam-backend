export let deploymentValidation = {
  name: {
    type: "string",
    presence: true,
  },
  deployedAt: {
    type: "date",
    presence: true,
  },
  url: {
    type: "string",
    persence: true,
    url: true,
  },
  versions: {
    type: "array",
  },
};
