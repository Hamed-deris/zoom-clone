"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeCard from "./HomeCard";

export default function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const HomeCardPassedProps = [
    {
      img: "/icons/add-meeting.svg",
      title: "New Meeting",
      description: "Start an instant meeting",
      className: "",
      handleClick: () => setMeetingState("isInstantMeeting"),
    },
    {
      img: "/icons/join-meeting.svg",
      title: "Join Meeting",
      description: "via invitation link",
      className: "bg-blue-1",
      handleClick: () => setMeetingState("isJoiningMeeting"),
    },
    {
      img: "/icons/schedule.svg",
      title: "Schedule Meeting",
      description: "Plan your meeting",
      className: "bg-purple-700",
      handleClick: () => setMeetingState("isScheduleMeeting"),
    },
    {
      img: "/icons/recordings.svg",
      title: "View Recordings",
      description: "Meeting Recordings",
      className: "bg-yellow-600",
      handleClick: () => router.push("/recordings"),
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-5  md:grid-cols-2 xl:grid-cols-4">
      {HomeCardPassedProps.map((pp) => (
        <HomeCard {...pp} />
      ))}
    </section>
  );
}
