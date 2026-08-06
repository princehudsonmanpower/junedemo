export type FeedJobPost = {
    id: string;
    type: "job";
    tag: string;
    tagColor: string;
    tagBg: string;
    time: string;
    href: string;
    title: string;
    location: string;
    employmentType: string;
    compensation: string;
    workDays: string;
    overview: string;
    highlights: string[];
};

export type FeedPost = FeedJobPost;
