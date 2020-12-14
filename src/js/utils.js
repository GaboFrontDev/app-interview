export function getBostonForecast() {
  const baseURL = process.env.API_URL || "http://localhost:8008";
  return fetch(`${baseURL}/boston`, {
  });
}