import { useState } from "react";
import MusicPlayer from "../components/Music Player/MusicPlayer";

const songsData = [
  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 1",
    artist: "Sample Artist 1",
    album: "Sample Album 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    added: "5 days ago",
    duration: "3:32",
  },
  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 2",
    artist: "Sample Artist 2",
    album: "Sample Album 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    added: "3 days ago",
    duration: "2:45",
  },
  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 3",
    artist: "Sample Artist 3",
    album: "Sample Album 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    added: "1 day ago",
    duration: "4:05",
  },
  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 4",
    artist: "Sample Artist 4",
    album: "Sample Album 4",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    added: "Just now",
    duration: "3:15",
  },
  {
    // Add more as needed  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 4",
    artist: "Sample Artist 4",
    album: "Sample Album 4",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    added: "Just now",
    duration: "3:15",
  },

  {
    // Add more as needed  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 4",
    artist: "Sample Artist 4",
    album: "Sample Album 4",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    added: "Just now",
    duration: "3:15",
  },

  {
    // Add more as needed  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 4",
    artist: "Sample Artist 4",
    album: "Sample Album 4",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    added: "Just now",
    duration: "3:15",
  },
  {
    // Add more as needed  {
    cover: "https://via.placeholder.com/150",
    title: "Sample Song 4",
    artist: "Sample Artist 4",
    album: "Sample Album 4",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    added: "Just now",
    duration: "3:15",
  },
];

function SongsPage() {
  const [activeSong, setActiveSong] = useState(songsData[0]);

  return (
    <div className="bg-white min-h-screen px-4 sm:px-8 py-8 mt-20">
      <div className="text-center mb-8 text-[#F7B777] text-2xl sm:text-3xl font-semibold mt-10">
        Songs
      </div>
      <div className="overflow-x-auto shadow-lg max-h-[400px] overflow-y-scroll">
        <table className="w-full text-left text-black">
          <thead className="bg-[#F7B777] text-white">
            <tr>
              <th className="py-2 sm:py-4 px-2 sm:px-6 font-semibold text-sm sm:text-base">
                #
              </th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 font-semibold text-sm sm:text-base">
                Title
              </th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 font-semibold text-sm sm:text-base">
                Artist
              </th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 font-semibold text-sm sm:text-base">
                Album
              </th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 font-semibold text-sm sm:text-base">
                Date Added
              </th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 font-semibold text-sm sm:text-base">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {songsData.map((song, index) => (
              <tr
                key={index}
                className="hover:bg-[#F7B777] transition-colors duration-200 ease-in-out cursor-pointer"
                onClick={() => setActiveSong(song)}
              >
                <td className="py-2 sm:py-4 px-2 sm:px-6 text-sm">
                  {index + 1}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6 flex items-center space-x-2 sm:space-x-3">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover"
                  />
                  <span className="text-sm sm:text-base">{song.title}</span>
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6 text-sm sm:text-base">
                  {song.artist}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6 text-sm sm:text-base">
                  {song.album}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6 text-sm sm:text-base">
                  {song.added}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6 text-sm sm:text-base">
                  {song.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:py-8 bg-gradient-to-br from-white/10 to-[#dca8a1] backdrop-blur-lg rounded-t-2xl sm:rounded-t-3xl z-10 h-20 sm:h-28 animate-slideup">
        <MusicPlayer
          songs={songsData}
          activeSong={activeSong}
          setActiveSong={setActiveSong}
        />
      </div>
    </div>
  );
}

export default SongsPage;
