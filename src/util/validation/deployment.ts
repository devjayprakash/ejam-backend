export let deploymentValidation = {
  name: {
    type: "string",
    presence: true,
  },
  deployedAt: {
    type: "date",
  },
  url: {
    type: "string",
    presence: true,
  },
  versions: {
    type: "array",
  },
};
