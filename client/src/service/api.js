import { create } from "apisauce";

const api = create({
  timeout: 30000,
  timeoutErrorMessage: "Server took too long to respond",
});

export default api;
