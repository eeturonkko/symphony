import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  imageUrl: string;
  songName: string;
  artistName: string;
  albumName: string;
  songLink: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  imageUrl,
  songName,
  artistName,
  albumName,
  songLink,
}) => {
  return (
    <Card className="flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner border-none overflow-hidden rounded-lg h-[400px] w-[300px] ">
      <CardHeader className="relative flex-grow">
        <Image
          className="rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={imageUrl}
          alt={`Cover image for ${songName}`}
          placeholder="blur"
          blurDataURL={imageUrl}
        />
      </CardHeader>
      <CardContent className="px-2 py-1 mt-2"></CardContent>
      <CardFooter className="flex flex-col items-start w-full font-semibold px-2 pb-2">
        <CardTitle className="truncate">{songName}</CardTitle>
        <CardDescription className="text-gray-200 truncate">
          {artistName}
        </CardDescription>
        <CardDescription className="text-gray-300 truncate">
          {albumName}
        </CardDescription>
        <Link
          href={songLink}
          target="_blank"
          className="text-gray-300 underline mt-1"
          rel="noopener noreferrer"
        >
          Listen on Spotify
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArtistCard;
