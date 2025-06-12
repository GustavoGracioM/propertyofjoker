import NavBar from "./component/NavBar";

const tracks = [
  {
    id: "61aQj9OClj0aQyzO57wlqB?si=f6a181860a3c47c0?si=25d344c0515a4cc8",
    name: "Blinding Lights",
    artist: "The Weeknd",
    image: "https://i.scdn.co/image/ab67616d00001e02b4e6e9a3a85a4d9ed8c4c8e6"
  },
  {
    id: "7ouMYWpwJ422jRcDASZB7P",
    name: "Sunflower",
    artist: "Post Malone, Swae Lee",
    image: "https://i.scdn.co/image/ab67616d00001e022e6b7bb9913673e33aa7c85f"
  }
];

export default function MusicList() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Músicas recomendadas 🎧</h2>
      {tracks.map((track) => (
        <div
          key={track.id}
          className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => window.open(`https://open.spotify.com/track/${track.id}`, "_blank")}
        >
          <img src={track.image} alt={track.name} className="w-16 h-16 rounded" />
          <div>
            <p className="font-semibold">{track.name}</p>
            <p className="text-sm text-gray-600">{track.artist}</p>
          </div>
        </div>
      ))}
      <NavBar />
    </div>
  );
}
