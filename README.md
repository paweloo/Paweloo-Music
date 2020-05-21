# Paweloo Music

Jest to projekt aplikacji muzycznej bazującej na API Spotify. Aplikacja nie jest jeszcze w pełni dynamiczna, ale wykorzystuje kilka elementów z API Spotify.

#### Aplikacja została stworzona z myślą o urządzeniach mobilnych i nie jest responsywna, więc przed jej uruchomieniem zaleca się włączenie emulacji telefonu w przeglądarce. Projekt został tworzony na widoku iPhone X.

## Logowanie
W celu przetestowania aplikacji należy zalogować się na swoje konto Spotify (poniżej dane konta testowego)<br>
login: nxj47415@eoopy.com<br>
hasło: test123123

Aby projekt załadował się poprawnie, istotnym elementem jest otwarcie aplikacji na porcie :3000, gdyż został on dodany do białej listy w celu przekierowania do niego po udanej weryfikacji

<img src="/src/img/screenshots/PM8.jpg" title="Spotify_whitelist" height="250px">

W pierwszym kroku wywoływana jest funkcja Authenticate.js, która sprawdza czy w adresie URL znajduje się token odpowiedzialny za autoryzację w Spotify. Jeśli token zostanie odczytany to użytkownik zostaje przekierowany do strony z głównym ekranem aplikacji, w przeciwnym wypadku zostaje przekierowany na stronę logowania Spotify a po udanej autoryzacji powraca do ekranu głównego aplikacji.

```
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
  const clientId = "*****************************";
  const redirectUri = `${window.location.protocol}//${window.location.host}`;
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
}
```

Po pomyślnym zalogowaniu się, oczom użytkownika ukazjue się główny interfejs aplikacji.

<img src="/src/img/screenshots/PM1.jpg" title="Paweloo Music__mainPawel" height="500px"> <img src="/src/img/screenshots/PM7.jpg" title="Paweloo Music_main_Tom" height="500px">

## Pobieranie danych

Imię oraz zdjęcie profilowe pobierane są pobierane z API Spotify oraz przypisywane do danego stanu.

```
componentDidMount() {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.display_name,
          profilePic: data.images.map(function (Object) {
            return Object.url;
          }),
       });
   });
}
``` 

W przypadku braku zdjęcia profilowego, przypisywane jest domyślne.

```
<Profile
      alt={props.name}
      style={{
        backgroundImage: `url(${
          props.picture.length !== 0 ? props.picture : defaultProf
        })`,
      }}
      onClick={props.isOpen}
      color={backColor} />
```
Na chwilę obecną dynamicznie pobierane są tylko okładki, tytuły i artyści z kategorii "New Releases"

<img src="/src/img/screenshots/PM6.jpg" title="Paweloo Music__lNewReleasees" height="500px">

WhiteWrapper.js
```
componentDidMount() {
    fetch("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ spotifyTracks: data.albums.items });
      });
  }
  .
  .
  .
  <SpotifyCoversContainer items={this.state.spotifyTracks} />
  ```
  
  SpotifyCoversContainer.js
  ```
  const SpotifyCoversContainer = (props) => (
  <TrackWrapper>
    {props.items.map((item) => (
      <SpotifyCovers key={item.name} {...item} />
    ))}
  </TrackWrapper>
);
```

SpotifyCovers.js
```
const SpotifyCovers = (props) => (
  <TrackWrapper>
    <Track
      alt={props.name}
      style={{
        backgroundImage: `url(${props.images[1].url})`,
      }}
    ></Track>
    <StyledTitle>{props.name}</StyledTitle>
    <StyledArtist>
      {props.artists.map(function (object) {
        return object.name;
      })}
    </StyledArtist>
  </TrackWrapper>
);
```

### Powitanie przed imieniem zmienia się w zależności od pory dnia/nocy.
```
let date = new Date();
let hours = date.getHours();

class WelcomeParagraph extends React.Component {
  state = {
    night: "Good night",
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
  };

  current = this.state.evening;

  render() {
    if (hours < 4) {
      this.current = this.state.night;
    } else if (hours < 12) {
      this.current = this.state.morning;
    } else if (hours < 19) {
      this.current = this.state.afternoon;
    } else {
      this.current = this.state.evening;
    }
    return (
      <StyledParagraph>
        {this.current}, {this.props.children}!
      </StyledParagraph>
    );
  }
}
```

## Ustawienia wyglądu

<img src="/src/img/screenshots/PM2.jpg" title="Paweloo Music__mainPawelSettings" height="500px">

Pierwsze 2 opcje pozwalające na zmianę nazwy użytkownika oraz zdjęcia profilowego nie są jeszcze dostępne.

### Zmiana motywu

W aplikacji jest opcja zmiany motywu na ciemny oraz koloru na jeden z 9, odbywa się to poprzez Context.

App.js
```
export const UserContext = createContext({});
export const ColorContext = createContext({});

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [backColor, setBackColor] = useState("#A719D2");
  return (
    <UserContext.Provider value={[theme, setTheme]}>
      <ColorContext.Provider value={[backColor, setBackColor]}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <PurpleTop></PurpleTop>
          <WhiteWrapper></WhiteWrapper>
        </ThemeProvider>
      </ColorContext.Provider>
    </UserContext.Provider>
  );
}
```

Potem dane dotyczące kolorów poszczególnych elementów są pobierane z pliku mainTheme.js na podstawie aktualnego stanu globalnego.

mainTheme.js
```
export const lightTheme = {
  body: "white",
  header: "#6b6b6b",
  text: "#6b6b6",
};

export const darkTheme = {
  body: "black",
  header: "white",
  text: "white",
};
```

GlobalTheme.js
```
const [backColor] = useContext(ColorContext);
return <Style color={backColor}></Style>;
```

WhiteWrapper.js
```
background-color: ${({ theme }) => theme.body};
```

<img src="/src/img/screenshots/PM3.jpg" title="Paweloo Music__theme" height="500px"> <img src="/src/img/screenshots/PM4.jpg" title="Paweloo Music__color" height="500px">

## Pasek wyszukiwania

Nie jest on jeszcze przystosowany do wyszkuiwania danych, w przyszłości będzię pobierał wyszukiwanych artystów oraz uwory z API Spotify.
Pasek podczas zamkniętego menu ustawień jest ukryty za głównym wprappem ze wszystkimi elementami, natomiast kiedy menu jest otwarte pasek wyszukiwania pozostaje na wierzchu gdyż dodawana jest do niego wartość OnTop.

```
const PurpleBack = styled.div`
  width: 100%;
  height: 400px;
  position: fixed;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;

  ${({ onTop }) =>
    onTop &&
    css`
      z-index: 999;
    `};
`;
```

<img src="/src/img/screenshots/PM5.jpg" title="Paweloo Music__searchBar" height="500px">

## #TODO
W najbliższym czasie będę pracował nad tym, aby aplikacja muzyczna spełniała swoje zadanie, czyli... była w stanie odtwarzać muzykę i była w pełni dynamiczna.
