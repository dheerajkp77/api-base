const hostname = window.location.hostname;

const base = {
  localhost: "http://localhost:3000/",
  platform: "http://localhost:3000/",
};

let apiBase = "";

if (hostname === "localhost") {
  apiBase = base.localhost;
} else {
  apiBase = base.platform;
}

export default apiBase;
