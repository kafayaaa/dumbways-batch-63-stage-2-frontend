import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

type MovieType = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export default function MoviePage() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/films");
        setMovies(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-20 py-20">
      <h1 className="text-3xl text-center font-bold mb-10 text-gray-950 dark:text-gray-50">
        Welcome to{" "}
        <span className="font-black text-sky-500">Ghibli Studio</span>, where a
        lot of new movies are waiting
      </h1>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {movies.map((movie) => (
            <Dialog key={movie.id}>
              <DialogTrigger asChild>
                <Card
                  onClick={() => setSelectedMovie(movie)}
                  className="dark:bg-gray-800 border-none rounded-3xl"
                >
                  <CardHeader>
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="aspect-square object-cover rounded-xl mb-3"
                    />
                    <CardTitle className="dark:text-gray-50 font-bold text-center text-xl">
                      {movie.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle className="dark:text-gray-50 text-xl mb-2">
                    {selectedMovie?.title}
                  </DialogTitle>
                  <DialogDescription className="dark:text-gray-50 text-lg text-justify">
                    <img
                      src={selectedMovie?.image}
                      alt={selectedMovie?.title}
                      className="mb-5"
                    />
                    {selectedMovie?.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
}
