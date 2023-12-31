"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGetTopTracks } from "@/lib/hooks/useGetTopTracks";
import Link from "next/link";
import Spinner from "@/components/ui/spinner";
import useFadeInWhenInView from "@/lib/hooks/useFadeinWhenInView";
import TopTrackListItem from "@/components/top-track-list-item";

function TopTracks({ token }: { token: string }) {
  const { ref, controls } = useFadeInWhenInView();
  const { data, isLoading, isError } = useGetTopTracks(token);

  if (isLoading) return <Spinner />;
  if (isError) {
    return (
      <div className="container flex justify-center mt-32 md:mt-8">
        <Button className="md:w-1/5 py-6 bg-primary-gradient text-sm">
          <Link href="/api/login">Log in to see your stats</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative flex items-start bg-transparent rounded-lg p-4 mt-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-purple-700 opacity-60 drop-shadow-2xl shadow-inner"></div>{" "}
      <div className="relative z-10 flex flex-col w-full">
        {data?.items.map((item, index) => (
          <TopTrackListItem key={item.id} item={item} rank={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default TopTracks;
