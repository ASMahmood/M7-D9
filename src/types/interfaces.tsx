export interface searchBarInterface {
  search: Function;
}

export interface infoCardProps {
  info: {
    album: {
      cover_xl: string;
    };
    title: string;
    artist: {
      name: string;
    };
    id: number;
  };
}
