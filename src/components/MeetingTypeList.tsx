"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";

export default function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const createMeeting = () => {};

  const HomeCardPassedProps = [
    {
      img: "/icons/add-meeting.svg",
      title: "New Meeting",
      description: "Start an instant meeting",
      className: "bg-orange-1",
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
      className: "bg-purple-1",
      handleClick: () => setMeetingState("isScheduleMeeting"),
    },
    {
      img: "/icons/recordings.svg",
      title: "View Recordings",
      description: "Meeting Recordings",
      className: "bg-yellow-1",
      handleClick: () => router.push("/recordings"),
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {HomeCardPassedProps.map((passedProps) => (
        <HomeCard key={passedProps.title} {...passedProps} />
      ))}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonClassName="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}
