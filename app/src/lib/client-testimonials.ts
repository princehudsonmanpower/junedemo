/**
 * Client success stories (same copy as Success Stories / testimonials carousel).
 * Single source for /testimonials and internship highlights.
 */
export interface ClientTestimonialRecord {
    id: string;
    stars: number;
    text: string;
    name: string;
    role: string;
    initial: string;
}

/** Employer / org name from `"Title, Company"` roles (used for carousel uniqueness). */
export function companyFromRole(role: string): string {
    const t = role.trim();
    const i = t.lastIndexOf(",");
    return i === -1 ? t : t.slice(i + 1).trim();
}

export const clientTestimonials: ClientTestimonialRecord[] = [
    {
        id: "mayuri-shrimal",
        stars: 5,
        text: "Working with JuneHires has been a really valuable experience for me. I didn't have a background in content writing or digital marketing, but they took a chance on me and gave me the opportunity to learn and grow. From my internship to becoming a Senior Copywriter, I've had the chance to develop my skills and take on new challenges. What I appreciate most is the guidance and support I've received from the team; they've helped me a lot in my role and I've learned from them. I'm grateful for the experience and the trust they've placed in me.",
        name: "Mayuri Shrimal",
        role: "Senior Copywriter, Adeptd",
        initial: "M",
    },
    {
        id: "bhavy-rawat",
        stars: 5,
        text: "My experience with JuneHires was fantastic. The team supported me end-to-end, from helpful interview prep to quick responses and clear, consistent communication. The whole process felt effortless, and I'm truly thankful to them for helping me take on my role as Head of Growth at Outbuzz.ai.",
        name: "Bhavy Rawat",
        role: "Head of Growth, Outbuzz.ai",
        initial: "B",
    },
    {
        id: "arya-shah",
        stars: 5,
        text: "I landed my job at Agrify.ai as an accountant in just three days, thanks to JuneHires, and it still feels unreal! I sent in my CV, scheduled an interview, and had a genuinely fun and insightful conversation with the recruiter. The next day, I got my offer letter like it was delivered by express karma. Fast, professional, and refreshingly human-JuneHires made the whole process feel less like job hunting and more like matchmaking for grown-ups who love to work and have fun together.",
        name: "Arya Shah",
        role: "Accountant, Agrify Fresh",
        initial: "A",
    },
    {
        id: "vaishnavi-bhairappa",
        stars: 5,
        text: "The process started with me applying for a role, and I got a call from HR, Rashmi. She was one of the finest and most easy-going HR professionals I've ever come across-extremely straightforward, aligning my experience with the role, and understanding exactly what I was looking for. The entire recruitment journey was seamless from interview setup, timely follow-ups, getting shortlisted, to final selection and onboarding. It's been 1.5 years since I joined this company, and I still see the same consistency. Rashmi ensures frequent check-ins, genuinely cares about employee well-being, and always makes herself approachable. Having an HR who not only hires you but also continues to support and guide you throughout your journey makes a huge difference. Truly grateful for this experience! 🙌😇",
        name: "Vaishnavi Bhairappa",
        role: "Success Manager, Adeptd",
        initial: "V",
    },
    {
        id: "akshat-yadhuvanshi",
        stars: 5,
        text: "I am truly grateful to JuneHires for helping me land my current role at Adeptd as a WordPress Developer. Their team, especially Rashmi ma'am, guided me at every step and made the hiring process seamless and stress-free.",
        name: "Akshat Yadhuvanshi",
        role: "WordPress Developer, Adeptd",
        initial: "A",
    },
    {
        id: "karanpreet",
        stars: 5,
        text: "It's been almost three months since I joined Adeptd as Head of Content through JuneHires and the whole experience has been really very smooth. From the very beginning, Achal, the HR, has been so supportive and approachable. She is genuinely one of the best people I've ever worked with. I can share anything with her without hesitation, and she always listens and helps in every way she can. It honestly made settling into my new role so much easier. I'm really glad to have found this opportunity through JuneHires!",
        name: "Karanpreet",
        role: "Head of Content, Adeptd",
        initial: "K",
    },
    {
        id: "rupam-rai",
        stars: 5,
        text: "I am truly grateful to Rashmi, Achal and the team at JuneHires for helping me land my dream job. Rashmi's dedication, guidance, and personal support throughout the process made all the difference. She not only understood my career goals but also guided me with clarity and encouragement at every step. What stood out the most was her genuine care and commitment-she wasn't just matching me to a role, she was helping me build my future. I deeply appreciate her efforts and highly recommend JuneHires to anyone looking for the right opportunities with the right guidance. Thank you, Team JuneHires, for being such a wonderful mentor and for helping me achieve this milestone!🌟",
        name: "Rupam Rai",
        role: "Success Manager, Adeptd",
        initial: "R",
    },
    {
        id: "nitin-rana",
        stars: 5,
        text: "JuneHires helped me a lot in finding the right opportunity and guided me throughout the hiring process. I'm really thankful to have them-they always looked at my skills and efforts rather than anything else. They were always there for me from then until today. Special thanks to Achal ma'am for her constant support; I'm truly so grateful.",
        name: "Nitin Rana",
        role: "Graphic Design Executive, Adeptd",
        initial: "N",
    },
    {
        id: "rishabh-singh",
        stars: 5,
        text: "Presently working as Finance Controller in a startup-a great opportunity to venture into the world of corporate finance. The role is filled with uncertainty of tasks, whether it's handling the accounts team, dealing with lenders and bankers, providing reports to investors, MIS, and what not. The journey is filled with lots of learning, pressure, and excitement. All thanks to Rashmi Singh for providing me with this opportunity. I met Rashmi when I was working at a CA firm-a really nice and fun-loving person and at the same time a strict boss for getting the job done. I must say you should get her work done ASAP because she won't let you forget that 😄. This was when she offered me the job, but at the time I was more into the CA firm world with upcoming exams ahead and I refused to join. When I left my job at the CA firm I decided to give this job opportunity a go-this thought came because Rashmi kept reminding me of the job throughout the year. I must say this was one of my best decisions. Thank you, Rashmi, and thank you, team JuneHires!",
        name: "Rishabh Singh",
        role: "Finance Controller, Agrify Fresh",
        initial: "R",
    },
    {
        id: "deeksha-kumari",
        stars: 5,
        text: "My experience with JuneHires has been amazing. Rashmi ma'am guided me throughout the process with constant support and a very friendly approach. Working with her is truly inspiring, as you not only feel encouraged but also learn a lot from her. She is a wonderful recruiter who genuinely sees potential in people and motivates them to achieve their best. JuneHires is doing a great job of connecting the right people with the right opportunities, and I'm really grateful to be one of them.",
        name: "Deeksha Kumari",
        role: "HR Assistant, Agrify Fresh",
        initial: "D",
    },
    {
        id: "achal-meshram",
        stars: 5,
        text: "After a 3-year career gap, I was struggling to find a good opportunity to grow in the field of HR. Most companies overlooked me either for being a fresher or due to my communication skills. That's when Rashmi ma'am gave me a chance and believed in me. She picked me up as a fresher and guided me step by step-from hiring freshers to experienced professionals, exploring different fields, building strong relationships, and growing both personally and professionally. Thanks to her mentorship and support, I am now earning on my own and continuously learning every day. JuneHires is truly a place where people like me get the chance to improve, grow, and get placed in the right companies. Here, JuneHires not only helps individuals build their careers but also helps companies grow by providing them with the best talent.",
        name: "Achal Meshram",
        role: "HR Executive, JuneHires",
        initial: "A",
    },
    {
        id: "tina-sharma",
        stars: 5,
        text: "I feel truly fortunate to have had the chance to work with Rashmi ma'am. Her guidance, patience, knowledge, and encouragement played a vital role in my personal and professional life. I learnt a lot under her guidance. She not only shared knowledge but also inspired and motivated me to believe in myself and aim higher. What makes her exceptional is her ability to listen, understand, and provide thoughtful advice that always motivates me to do better. Her leadership has had a lasting impact on my journey, and I will always be grateful for her support. I heartily recommend Rashmi Singh ma'am to anyone who leads with wisdom, kindness, and genuine care.",
        name: "Tina Sharma",
        role: "Accountant, Bryt Bazaar",
        initial: "T",
    },
    {
        id: "riyanka-khanna",
        stars: 5,
        text: "Achal at JuneHires really helped me get the Yral Podcast project. She believed in me from the start and was there through the entire interview process, which made everything so much easier and less stressful. JuneHires' support and encouragement gave me a lot of confidence, and I'm really grateful for that. What stood out most was how approachable and easy she was to talk to-she genuinely cared about how things were going. It felt less like a formal process and more like having someone guiding you throughout. Once again, thank you, Achal, for everything.😊",
        name: "Riyanka Khanna",
        role: "Video Editor, YRAL",
        initial: "R",
    },
    {
        id: "oshin-jadhwani",
        stars: 5,
        text: "My journey with JuneHires was amazing from start to end. Right from the first interaction, the team understood my profile and guided me with the right opportunities. They supported me in preparing for interviews, gave timely updates, and always stayed connected throughout the process. I did not even know small things like the basics of MS Word and Excel, but ma'am patiently taught me everything and built my confidence. The entire experience was smooth, professional, and very encouraging. Thanks to their constant guidance I was able to land my current role successfully. I'm truly grateful to JuneHires for being a part of this journey.",
        name: "Oshin Jadhwani",
        role: "HR Intern, JuneHires",
        initial: "O",
    },
    {
        id: "salman",
        stars: 5,
        text: "Huge shoutout to Rashmi-honestly one of the sweetest and chillest people you'll ever meet (unless you manage to get on her last nerve!). She's been there from day one, helping me understand the role and guiding me at every step. I actually got referred by a friend for an internship at Agrify Fresh, and what started as an internship turned into a full-time role as a Financial Analyst. These past 6 months have been such a fun and rewarding journey of learning, growing, and figuring things out along the way. Big thanks to JuneHires for connecting me to this opportunity and making every effort worth the while.",
        name: "Salman",
        role: "Jr. Financial Analyst, Agrify Fresh",
        initial: "S",
    },
];

/** Shown on /internships — internship and growth paths from the same Success Stories library. */
export const internshipSpotlightTestimonialIds = ["oshin-jadhwani", "mayuri-shrimal"] as const;

export function getClientTestimonialsByIds(ids: readonly string[]): ClientTestimonialRecord[] {
    return ids.map((id) => {
        const found = clientTestimonials.find((t) => t.id === id);
        if (!found) {
            throw new Error(`Unknown client testimonial id: ${id}`);
        }
        return found;
    });
}
