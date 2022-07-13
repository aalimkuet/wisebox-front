//BASE_URL = "http://localhost:2000/api";

const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:2000/api"
  : "https://your_deployment.server.com";

const ApiRoute = {
  countryList: `${server}/get_country/`,
  signup: `${server}/user/create/`,
};

export default ApiRoute;
