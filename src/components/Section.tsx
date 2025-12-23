import { Entry } from "@/interfaces/cv";

interface SectionProps {
  title: string;
  entries: Entry[];
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    alignItems: "center",
  },
  content: {
    textAlign: "left" as "left",
  },
  title: {
    color: "white",
    borderBottom: "1px solid white",
  },
  job: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1em",
  },
  listTypeNone: {
    listStyleType: "none",
  },
  heading: {
    margin: 0,
  },
  wrapText: {
    maxWidth: "750px",
    wordWrap: "break-word" as "break-word",
    textAlign: "justify" as "justify",
  },
};

const Section = ({ title, entries }: SectionProps) => {
  return (
    <div style={style.container}>
      <div style={style.content}>
        <h2 style={style.title}>{title}</h2>
        {entries.map((entry, index) => (
          <li key={index} style={style.listTypeNone}>
            <div style={style.job}>
              <h3 style={style.heading}>{entry.company}</h3>
              <span>{entry.location}</span>
            </div>
            <div style={style.job}>
              <h3 style={style.heading}>{entry.job}</h3>
              <span>{entry.year}</span>
            </div>
            <ul>
              {entry.items.map((item, itemIndex) => (
                <li key={itemIndex} style={style.wrapText}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Section;
