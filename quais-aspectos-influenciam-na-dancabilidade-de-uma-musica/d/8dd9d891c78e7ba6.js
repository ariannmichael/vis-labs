// https://observablehq.com/@ariannmichael/quais-aspectos-influenciam-na-dancabilidade-de-uma-musica@65
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Quais aspectos influenciam na dançabilidade de uma música`
)});
  main.variable(observer("embed")).define("embed", ["require"], function(require){return(
require("vega-embed@3")
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Discuções sobre se músicas mais dançantes e animadas, possuem menor quantidade de palavras e acusticidade, é algo recorrente entre músicos e não músicos.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Músicas positivas possuem uma alta quantidade de palavras faladas?`
)});
  main.variable(observer("view1")).define("view1", ["embed"], function(embed){return(
embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url":"https://raw.githubusercontent.com/cienciadedados-ufcg/vis-cancoes/master/data/playlists-spotify.csv"},
  "mark": {
    "type": "rect"
  },
  "width": 700,
  "height": 300,

  "selection":{
    "sel_val": {"type": "interval"}
  },

  "encoding": {
    "x": { "bin": {"maxbins":60}, "field":"energy", "type": "quantitative",
     "axis":{"title": "Energia"}},
    "y": { "bin": {"maxbins": 40},"field": "speechiness", "type": "quantitative",
    "axis":{"title": "Quantidade de Palavras"}
    },
    "color": {
      "condition": {
          "selection": "sel_val",
          "field": "valence",
          "type": "quantitative"
        },
        "value": "#EFEFEF" 
    }  
  }
  
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Ao realizar um hover sobre os quadrados, é possível ver um maior detalhamento, sobre as informações de quantidade de palavras, energia e valência. Além de ser possível fazer um brush e limitar a área observada no gráfico.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Pelo gráfico é notável que as músicas com menor quantidade de palavras são as mais positivas.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `# As músicas mais acústicas são menos dançantes?`
)});
  main.variable(observer("view2")).define("view2", ["embed"], function(embed){return(
embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title":"Danceabilidade das playlists",
  "data": { "url":"https://raw.githubusercontent.com/cienciadedados-ufcg/vis-cancoes/master/data/playlists-spotify.csv"},
  "vconcat": [{
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1
  },
  "transform": [
    {"filter": {"selection": "sel_playlist"}}
  ],
  "encoding": {
    "x": {
      "field": "danceability", 
      "type": "quantitative", 
      "aggregate": "mean", 
      "axis":{
        "title":"Média de danceabilidade das musicas"
      }
    },
    "y": {
      "field": "playlist_name", 
      "type": "ordinal",
      "sort": { 
        "field": "track_popularity"
      },
      "axis": {
        "title": "Nome Playlist"
      }
    },
    "color": {
      "field": "playlist_name", 
      "type": "nominal"
    },
    "size": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }, "width": 500, "height": 300},{
  "selection": {
    "sel_playlist": {"type": "single", "fields": ["playlist_name"]}  
  },
  "mark": {
    "type": "rect",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1
  },
  "encoding": {
    "x": {
      "field": "acousticness", 
      "type": "quantitative", 
      "aggregate": "mean", 
      "axis":{
        "title":"Média de acusticidade das musicas"
      }
    },
    "y": {
      "field": "playlist_name", 
      "type": "ordinal",
      "sort": { 
        "field": "acousticness"
      },
      "axis":{
        "title":"Nome Playlist"
      }
    }
    ,
    "color": {
      "condition": {
        "selection": "sel_playlist",
        "field": "playlist_name", 
        "type": "nominal"
      },
      "value": "#EFEFEF" 
    },
    "size": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }, "width": 500, "height": 200
}]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Ao clicar em uma barra no gráfico inferior, o gráfico superior é filtrado para mostrar a media de dançabilidade de uma playlist. Com essa visualização, é possível ver a relação, entre a acusticidade e a dançabilidade das músicas de uma playlist.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `No caso da playlist de Coração Partido, que apresenta maior acusticidade é também a de menor dançabilidade.`
)});
  return main;
}
