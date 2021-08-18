export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "";

// scopes will allow user to do things that are mentioned in , like allow user to do this and that
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// substring(1): Start extraction from first position to rest of the string,split makes it an []array
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //   key=value ; split '=' says go to the first one and split it with the equal sign
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]); //initial is not an array it's an object
      return initial;
    }, {});
};

// array.join returns an array in string format can pass a sperator in join, %20 is ASCII for space url-encoded
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
