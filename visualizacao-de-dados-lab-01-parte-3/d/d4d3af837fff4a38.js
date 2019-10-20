// https://observablehq.com/@ariannmichael/visualizacao-de-dados-lab-01-parte-3@89
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Visualização de Dados Lab 01 - parte 3`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Spotify é atualmente a maior plataforma de streaming de músicas e podcast, fazendo análises em cima dos dados sobre playlists, podemos observar algumas informações;`
)});
  main.variable(observer("embed")).define("embed", ["require"], function(require){return(
require("vega-embed@3")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Qual a relacão da valência da música e o tom maior ou menor`
)});
  main.variable(observer("viewof view1")).define("viewof view1", ["embed"], function(embed){return(
embed({  
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "title":"Qual a relacão da valência da música e o tom maior ou menor",
  "data": { "url":"https://raw.githubusercontent.com/cienciadedados-ufcg/vis-cancoes/master/data/playlists-spotify.csv"},
  "mark": {
    "type": "circle",
    "color": "#cf30b5"
    },
  "width": 800,
  "height": 200,
  "encoding": {
    "y": {
      "field": "mode_name", 
      "type": "nominal", 
      "axis":{
        "title":"média de popularidade"
      }
    },
    "x": {
      "field": "playlist_name", 
      "type": "ordinal",
      "axis": {"title": "nome da playlist"},
      "sort": {
        "op": "mean", 
        "field": "track_popularity"
      }
    },
    "size": {
      "field": "valence",
      "type": "quantitative",
      "aggregate": "mean",
      "title": "médias de valência"
    }
  }
})
)});
  main.variable(observer("view1")).define("view1", ["Generators", "viewof view1"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md `Podemos notar que não existe grande diferença nas valências em relações entre ser de tom maior ou menor.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## As músicas mais populares são as mais novas?`
)});
  main.variable(observer("viewof view2")).define("viewof view2", ["embed"], function(embed){return(
embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "title": "As músicas mais populares são as mais novas?",
  "data": {
    "url": "https://raw.githubusercontent.com/cienciadedados-ufcg/vis-cancoes/master/data/playlists-spotify.csv",
    "format": {
      "type": "csv"
    }
  },
  "width": 500,
  "height": 300,
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "track_popularity",
      "aggregate": "mean",
      "type": "quantitative",
      "axis":{
        "title":"popularidade"
      }
    },
    "x": {
      "field": "playlist_name",
      "type": "ordinal",
      "axis": {"title": "nome da playlist"},
      "sort": {
        "field": "track_album_release_date"
      }
    }
  }
})
)});
  main.variable(observer("view2")).define("view2", ["Generators", "viewof view2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md `Nas playlists é fácil de observar que na playlist de Pop Up, as musicas mais populares são as mais novas e no caso dos clássicos do funk as mais populares são as mais antigas`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Qual a relação entre acusticidade e instrumentalidade de cada música?`
)});
  main.variable(observer("viewof view3")).define("viewof view3", ["embed"], function(embed){return(
embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Qual a relação entre acusticidade e instrumentalidade de cada música?",
  "data": {
    "url": "https://raw.githubusercontent.com/cienciadedados-ufcg/vis-cancoes/master/data/playlists-spotify.csv",
    "format": {
      "type": "csv"
    }
  },
  "width": 500,
  "height": 300,
  "mark": {
    "type": "circle",
    "color": "#1DB954"
  },
  "encoding": {
    "y": {
      "field": "acousticness",
      "aggregate": "mean",
      "type": "quantitative",
      "axis":{
        "title":"acusticidade"
      }
    },
    "x": {
      "field": "playlist_name",
      "type": "ordinal",
      "axis": {"title": "nome da playlist"},
      "sort": {
        "op": "mean", 
        "field": "instrumentalness"
      }
    }
  }
})
)});
  main.variable(observer("view3")).define("view3", ["Generators", "viewof view3"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md `Notamos que na playlist de Coração Partidao é a que tem mais acusticidade na instrumentação, já no caso dos Clássicos do Funk existe pouca acusticidade nas músicas`
)});
  return main;
}
