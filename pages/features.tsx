import Head from "next/head";
import Card from "../components/common/Card";

export default function Features() {
  return (
    <div>
      <Head>
        <title>Tailwind CSS Tutorial - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container px-5 py-10 mx-auto">
        {/* Cards Page - Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">
            Tailwind Css Responsive Cards
          </h1>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* First Card */}
          <Card
            imageSrc="https://picsum.photos/id/188/720/400/"
            date="Oct 17, 2022"
            title="Cities are crowded"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
              reprehenderit fuga! Dolores quisquam eius cum accusamus?"
            viewed="1.2K"
            reply={6}
          />

          {/* Second Card */}
          <Card
            imageSrc="https://picsum.photos/id/1016/720/400"
            date="Oct 17, 2022"
            title="Mountains are alone"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
              reprehenderit fuga! Dolores quisquam eius cum accusamus?"
            viewed="1.1K"
            reply={5}
          />

          {/* Third Card */}
          <Card
            imageSrc="https://picsum.photos/id/1011/720/400"
            date="Oct 17, 2022"
            title="Lakes are silent"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
              reprehenderit fuga! Dolores quisquam eius cum accusamus?"
            viewed="1.0K"
            reply={3}
          />
        </div>
      </div>
    </div>
  );
}