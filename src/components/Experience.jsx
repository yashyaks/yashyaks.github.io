import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <div className="max-w-[75rem] items-center mx-5 my-10 py-10 sm:mx-10 lg:mx-10 xl:mx-auto">
      <div className="text-left font-Poppins text-5xl md:text-7xl mb-8 ml-8">
        Experience
      </div>
    <Chrono
      items={[
        {
          title: "Jun 2024 - Aug 2024",
          cardTitle: "Data Engineering Intern",
          url: "https://www.paywithring.com/",
          cardSubtitle: "Pay with Ring",
          cardDetailedText: (
              <ul className="list-disc pl-6 text-sm">
                <li>
                  Worked on error-handling emails for Snowflake queries in an AWS Lambda Function.
                </li>
                <li>
                Currently working to migrate the company’s data warehouse from Snowflake to click house to optimize costs.
                </li>
              </ul>
            ),
        },
        {
          title: "Nov 2023 - Feb 2024",
          cardTitle: "AI/ML and Back-end Intern",
          url: "https://www.lawyantra.com/",
          cardSubtitle: "Lawyantra",
          cardDetailedText: (
              <ul className="list-disc pl-6 text-sm">
                <li>
                  Introduced 60+ subcategories for automated case classification in
                  Lawyantra's Gen-AI platform.
                </li>
                <li>
                  Developed a Lawyer Ranking System architecture and integrated it
                  with a Django REST framework and MySQL.
                </li>
                <li>
                  Migrated the company's file storage system from AWS EC2 instance
                  store to AWS S3, mitigating data loss risks.
                </li>
              </ul>
            ),
        },
      ]}
      mode="VERTICAL"
      timelinePointDimension={20}
      theme={{
        secondary: "black",
        cardBgColor: "black",
        titleColorActive: "risd_blue",
        titleColor: "white",
        cardTitleColor:"white",
        cardSubtitleColor: "white",
        cardDetailsColor: "white",
        toolbarBgColor: "black",
      }}
      fontSizes={{
        cardTitle: '1.2rem',
        title: '1rem',
        cardSubtitle: '1.1rem',
      }}
      cardHeight={80} // sets the height of the timeline card to 200px
      contentDetailsHeight={80} // sets the height of the detailed text to 80px
      readMore={false} // enables the readMore function for larger chunks of text

    />
    </div>

  );
};

export default Timeline;