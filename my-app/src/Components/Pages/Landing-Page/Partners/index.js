import style from "./partners.module.scss";
import Quote from "../../../../Assets/Images/Quote-Left.svg";

export const Testimonials = () => {
  return (
    <div className={style.testimonialsContainer}>
      <h2>Testimonials</h2>
      <p>
        CourseQuestHub was a lifesaver! It helped me ditch the confusion and
        finally see my future path - Software Engineering here I come!
      </p>

      <div className={style.QuoteText}>
        <img alt="" src={Quote} />
        <p>
          Abraham Muyiwa<span>SS3 student, Prime College, Abuja</span>
        </p>
        <img alt="" src={Quote} />
      </div>
    </div>
  );
};
