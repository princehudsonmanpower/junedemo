import Image from "next/image";

/** Four oval toes in an arc + one large main pad (June / founder moments). */
const PAW_PRINT = [
    {
        slot: "t1" as const,
        src: "/about/IMG_1807.jpg",
        alt: "June, a fluffy golden dog, sitting happily and looking up at the camera.",
        objectPosition: "center center" as const,
        caption: "That June smile.",
    },
    {
        slot: "t2" as const,
        src: "/about/IMG_0975.jpg",
        alt: "June in a JuneHires party hat and blue bow tie against a soft blue wall.",
        objectPosition: "center 38%" as const,
        caption: "Party-hat energy.",
    },
    {
        slot: "t3" as const,
        src: "/about/IMG_0989.jpg",
        alt: "June wearing a handmade JuneHires party hat and royal blue bow tie, looking at the camera.",
        objectPosition: "center 40%" as const,
        caption: "Heart-on, always.",
    },
    {
        slot: "t4" as const,
        src: "/about/IMG_1012.jpg",
        alt: "June sitting at a desk in an office chair, wearing a JuneHires party hat and blue bow tie.",
        objectPosition: "center 30%" as const,
        caption: "CEO of the desk.",
    },
    {
        slot: "palm" as const,
        src: "/about/IMG_0992.jpg",
        alt: "Rashmi Singh with June, both wearing JuneHires party hats; June in a blue bow tie.",
        objectPosition: "center 24%" as const,
        caption: "Where JuneHires began.",
    },
];

export default function AboutPawCollage() {
    return (
        <div
            className="paw-print"
            role="list"
            aria-label="Photo collage of June and Rashmi Singh in the shape of a dog paw print"
        >
            {PAW_PRINT.map((item) => (
                <div
                    key={item.slot}
                    className={`paw-print__pad paw-print__pad--${item.slot}`}
                    role="listitem"
                >
                    <div
                        className={`paw-print__media ${item.slot === "palm" ? "paw-print__media--palm" : "paw-print__media--toe"}`}
                    >
                        <div className="paw-print__ring" aria-hidden />
                        <div
                            className={`paw-print__clip ${item.slot === "palm" ? "paw-print__clip--palm" : "paw-print__clip--toe"}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 900px) 28vw, 140px"
                                className="paw-print__img object-cover"
                                style={{ objectPosition: item.objectPosition }}
                            />
                        </div>
                    </div>
                    <p className="paw-print__caption">{item.caption}</p>
                </div>
            ))}
        </div>
    );
}
