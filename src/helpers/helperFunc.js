
import Router from "next/router";
const router = Router;

export const handleRouting = (path) => {
  router.push(path);
};
export const handleRoutingWithReplace = (path) => {
  router.replace(path);
};

export const handlePop = () => {
  router.back();
};

export const redirectToExternalURL = (url) => {
if(url)
  window.location.href = url;
};