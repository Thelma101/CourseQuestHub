import React from "react";
import style from "./article.module.scss";

export const Article = () => {
  return (
    <div className={style.articleContainer}>
      <h2>Helpful Article</h2>

      <div className={style.articleTextContainer}>
        <div>
            <p className={style.articleTopic}>University Or Vocation? Unveiling Your perfect Path In Nigeria</p>

            <p>Choosing your future path  after secondary school can feel overwhelming. University seems like the “traditional” route, but mant  fulfilling careers thrive in vocational fields. This article dives into the pros and cons of both options, helping you discover the perfect fit for your skills  and aspirations.</p>
        </div>

        <div>
            <p className={style.articleTopic}>Spark Your Passion: Explore Thriving Career Fields Home And Abroad.</p>
            <p>Stuck in a rut and unsure what career ignites your passion/ Don't worry, you are not alone! This article showcases diverse and exciting  career fields thriving in Nigeria and abroad, from innovative tech to creative arts, helping you identify where your interests and talent truly shine.</p>
        </div>
      </div>
    </div>
  );
};
