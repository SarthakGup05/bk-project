import React from "react";
import MurliHeader from "../components/Murlipage/MurliHeader";
import PropTypes from "prop-types";

const murliData = {
  title: "Daily Murli",
  date: "04-11-2024",
  content: `प्रात:मुरली ओम् शान्ति "बापदादा" मधुबन
  “मीठे बच्चे - अपनी खामियां निकालनी हैं तो सच्चे दिल से बाप को सुनाओ, बाबा तुम्हें कमियों को निकालने की युक्ति बतायेंगे'' प्रश्नः- बाप की करेन्ट किन बच्चों को मिलती है?
  उत्तर:- जो बच्चे ईमानदारी से सर्जन को अपनी बीमारी सुना देते हैं, बाबा उन्हें दृष्टि देता। बाबा को उन बच्चों पर बहुत तरस पड़ता है। अन्दर में आता इस बच्चे का यह भूत निकल जाये। बाबा उन्हें करेन्ट देता है।
  
  ओम् शान्ति। बाप बच्चों से पूछते रहते हैं। हर एक बच्चे को अपने से पूछना है कि बाप से कुछ मिला? किस-किस चीज़ में कमी है? ...`,
  // Continue adding the rest of the Murli content here as a single string
};

const MurliContent = ({ title = murliData.title, date = murliData.date, content = murliData.content }) => (
  <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6 mt-32 w-full">
    {/* Header Section */}
    <MurliHeader title={title} date={date} />

    {/* Murli Content */}
    <div className="mt-4">
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  </div>
);

MurliContent.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
};

export default MurliContent;
