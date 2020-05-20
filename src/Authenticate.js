export default function () {
  let token = window.location.hash.substr(1);
  if (token) {
    const o = Object.fromEntries(new URLSearchParams(token));
    return o.access_token;
  } else {
    redirectToSpotifyAuthentication();
  }
}

function redirectToSpotifyAuthentication() {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "e80adc99d312467b8d6b55a35f1bb4b5";
  const redirectUri = `${window.location.protocol}//${window.location.host}`;
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
}
