"use client";

export default function AppContainer() {
  return <div>AppContainer</div>;
}

interface IMap {
  render: () => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

class NaverMap implements IMap {
  render() {}
  addFavorite(id: string) {}
  removeFavorite(id: string) {}
}

class KakaoMap implements IMap {
  render() {}
  addFavorite(id: string) {}
  removeFavorite(id: string) {}
}

// class Map {
//   map = new NaverMap();
// }

class Map {
  map: IMap;

  constructor(map: IMap) {
    this.map = map;
  }
}

const map1 = new Map(new NaverMap());
const map2 = new Map(new KakaoMap());
