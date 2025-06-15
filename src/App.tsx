import './App.css'

function App() {

  const defaultMovieList = [
    {
      id: 1,
      name: "君の名は。",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg",
      overview: "1000年に一度の彗星の接近により、男女の身体が入れ替わる奇妙な現象が起きる。"
    },
    {
      id: 2,
      name: "ハウルの動く城",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/v0K2e1t6ocUNnkZ9BeiFdcOT9LG.jpg",
      overview: "父親の帽子店で帽子を作って暮らしていた18歳のソフィーは、荒野の魔女の呪いで90歳の老婆の姿になってしまう。彼女はハンサムだが気弱な魔法使いハウルと出会って、彼の居城でいっしょに暮らすようになるが、その城は4本足で歩く動く城だった。"
    },
    {
      id: 3,
      name: "バックトゥザフューチャー",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oHaxzQXWSvIsctZfAYSW0tn54gQ.jpg",
      overview: "スティーブン・スピルバーグとロバート・ゼメキスが贈るSFアドベンチャーシリーズ第1弾。高校生のマーティは、科学者・ドクの発明したタイムマシン・デロリアンで過去にタイムスリップしてしまう。"
    },
    {
      id: 4,
      name: "もののけ姫",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mVdz3vlmioKWZaHTGfu99zIuayZ.jpg",
      overview: "山里に住む若者アシタカは、怒りと憎しみにより“タタリ神”と化した猪神から呪いをかけられてしまう。"
    },
  ];

  return(
    <div>
      {defaultMovieList.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image} />
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>

  );
}

export default App
